import axios from 'axios'
import router from '~/routes'

export default {
  namespaced: true,
  state: () => ({
    workspaces: [],
    currentWorkspace: {}
  }),
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    // List
    async readWorkspaces({ commit }) {
      const workspaces = await request({
        method: 'GET'
      })
      commit('assignState', {
        workspaces
      })
      console.log(workspaces)
    },
    // Item
    readWorkspace() {

    },
    async createWorkspace({ commit }) {
      const currentWorkspace = await request({
        method: 'POST',
        data: {
          title: ''
        }
      })
      commit('assignState', {
        currentWorkspace
      })
      router.push({
        name: 'Workspace',
        params: {
          id: currentWorkspace.id
        }
      })
    },
    updataWorkspace() {

    },
    deleteWorkspace() {

    }
  }
}

async function request(options) {
  const { workspaceId = '', method, headers, data } = options
  const { data: dataToReturn } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${workspaceId}`,
    method,
    headers: {
        'content-type': "application/json",
        'apikey': "FcKdtJs202110",
        'username': "SYLee"
    },
    data
  })
  return dataToReturn
}