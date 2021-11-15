<template>
    <li>
        <div class="title" 
        @click="$router.push({
            name: 'Workspace',
            params: {
                id: workspace.id
            }
        })">
            <span class="material-icons">
                play_arrow
            </span>
            <span class="text">
                {{ workspace.title || '제목 없음'}}
            </span>
            <div class="actions">
                <span class="material-icons"
                @click.stop="createWorkspace">
                    add
                </span>
                <span class="material-icons"
                @click.stop="deleteWorkspace">
                    delete
                </span>
            </div>
        </div>
        <ul v-if="hasChildren">
            <WorkspaceItem v-for="ws in workspace.children" :key="ws.id"
            :workspace="ws" />
        </ul>
    </li>
</template>

<script>
export default {
    props: {
        workspace: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        hasChildren() {
            return this.workspace.children && this.workspace.children.length
        }
    },
    methods: {
        createWorkspace() {
            this.$store.dispatch('workspace/createWorkspace', {
                parentId: this.workspace.id
            })
        },
        deleteWorkspace() {

        }
    }
}
</script>