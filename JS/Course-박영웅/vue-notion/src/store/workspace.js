import axios from 'axios'
import router from '~/routes'

export default {
  namespaced: true,
  state: () => ({
    // 사용할 워크스페이스 목록이 담김
    workspaces: [],
    currentWorkspace: {},
    currentWorkspacePath: []
  }),
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    // 워크스페이스 리스트 가져오기
    async readWorkspaceList({ commit }) {
      const workspaceList = await request({
        method: 'GET'
      })
      commit('assignState', {
        workspaceList
      })
      console.log(workspaceList)
    },
    // 단일 워크스페이스 가져오기
    async readWorkspaceItem({ commit }, payload) {
      console.log(payload)
      console.log("???")
      const { id } = payload
      const workspace = await request({
        method: 'GET',
        workspaceId: id
      })
      commit('assignState', {
        currentWorkspace: workspace
      })
    },
    async createWorkspace({ commit, dispatch }, payload = {}) {
      const { parentId } = payload
      const currentWorkspace = await request({
        method: 'POST',
        data: {
          title: '',
          parentId
        }
      })
      await dispatch('readWorkspaceItem')
      commit('assignState', {
        currentWorkspace
      })
      // this.$router
      router.push({
        // children의 name과 같다
        // 즉, 해당 이름을 가진 페이지로 이동하겠다는 뜻
        name: 'Workspace',
        params: {
          id: currentWorkspace.id
        }
      })
    },
    async updateWorkspace({ dispatch }, payload) {
      const { id, title, content, poster } = payload
      await request({
        method: 'PUT',
        workspaceId: id,
        data: {
          title,
          content,
          poster
        }
      })
      await dispatch('readWorkspaceItem')
    },
    async deleteWorkspace({ state, dispatch }, payload) {
      const { id } = payload
      await request({
        method: 'DELETE',
        workspaceId: id
      })
      await dispatch('readWorkspaceItem')
      // 현재 페이지의 id
      if (id === router.currentRoute.value.params.id) {
        router.push({
          name: 'Workspace',
          params: {
            id: state.workspaceList[0].id
          }
        })
      } 
    },
    findWorkspacePath({ state }) {
      const currentWorkspaceId = router.currentRoute.value.params.id
      function _find(workspace, parents) {
        if(workspace.id === currentWorkspaceId) {
          commit('assignState', {
            currentWorkspacePath: [...parents, workspace]
          })
          console.log(state.currentWorkspacePath)
        }
        if (workspace.children) {
          workspace.children.forEach(ws => _find(ws, [...parents, workspace]))
        }
      }
      state.workspaces.forEach(workspace => _find(workspace, []))
    }
  }
}

// API 요청 로직을 재활용하기 위한 함수
async function request(options) {
  // workspaceId 값이 없을 것을 대비해서 기본값으로 빈 값을 설정함
  const { workspaceId = '', method, data } = options
  const { data: dataToReturn } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${workspaceId}`,
    method,
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username': 'cm'
    },
    data
  })
  return dataToReturn
}