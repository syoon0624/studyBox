<template>
  <nav
    ref="nav"
    :style="{ width: `${navWidth}px` }">
    <div class="header">
      <div class="user-profile"></div>
      Yoon's NOTION
    </div>
    <ul>
      <!-- :workspace는 배열로 가져온 값들 하나하나를 담은것이다. 이것을 자식 컴포넌트로 보낼 것임 -->
      <WorkspaceItem
        v-for="workspace in workspaces"
        :key="workspace.id"
        :workspace="workspace" />
    </ul>
    <div class="actions">
      <div
        class="action"
        @click="$store.dispatch('workspace/createWorkspace')">
        <span class="material-icons">
          add
        </span> 새로운 페이지
      </div>
    </div>
    <div
      ref="resizeHandle"
      class="resize-handle"
      @dblclick="navWidth = 240"></div>
  </nav>
</template>

<script>
import interact from 'interactjs'
import WorkspaceItem from '~/components/WorkspaceItem'
export default {
  components: {
    WorkspaceItem
  },
  data() {
    return {
      navWidth: 240
    }
  },
  computed: {
    workspaces() {
      return this.$store.state.workspace.workspaceList
    }
  },
  async created() {
    // actions 실행: this.$store.dispatch('모듈 이름/실행시킬 actions 이름')
    // this.$store.dispatch('workspace/createWorkspace')
    await this.$store.dispatch('workspace/readWorkspaceList')
    if(this.$route.fullPath === '/') {
        this.$route.push({
            name: 'Workspace',
            params: {
                id: this.$store.state.workspace.workspaces[0].id
            }
        })
    }
  },
  mounted() {
    interact(this.$refs.nav)
    .resizable({
      edges: {
        right: this.$refs.resizeHandle
      }
    })
    .on('resizemove', event => {
      this.navWidth = event.rect.width
    })
  }
}
</script>

<style lang="scss" scoped>
nav {
  max-width: 500px;
  min-width: 160px;
  height: 100%;
  background-color: $color-background;
  flex-shrink: 0; // 뷰포트 가로 너비가 작을 때 찌그러짐 방지
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  .header {
    padding: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    .user-profile {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      margin-right: 10px;
      background-image: url("https://heropy.blog/css/images/logo.png");
      background-size: cover;
    }   
  }
  ul {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .actions {
    border-top: 1px solid $color-border;
    .action {
      height: 45px;
      display: flex;
      align-items: center;
      padding: 0 14px;
      color: $color-icon;
      cursor: pointer;
      &:hover {
        background-color: $color-background--hover1;
      }
      .material-icons {
        margin-right: 4px;
        color: $color-icon;
      }
    }
  }
  .resize-handle {
    width: 4px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    cursor: col-resize;
    transition: .4s;
    &:hover {
      background-color: $color-border;
    }
}
}
</style>