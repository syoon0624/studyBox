<template>
    <nav style="width: 240px;">
        <div class="header"></div>
    </nav>
    <ul>
        <WorkspaceItem 
        v-for="workspace in workspaces"
        :key="workspace.id" :workspace="workspace"/>
    </ul>
    <div class="actions"></div>
</template>

<script>
import WorkspaceItem from '~/components/WorkspaceItem'

export default {
    components: {
        WorkspaceItem
    },
    computed: {
        workspaces() {
            return this.$store.state.workspace.workspaces
        }
    }
}
</script>

<style lang="scss" scoped>

</style>