<template>
    <h1>{{ user.name }} / {{ depth }}</h1>
    <template v-if="user.children && user.children.length">
        <UserName v-for="u in user.children" :key="u.id" :user="u" :depth="depth+1"/>
    </template>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: () => ({})
        },
        depth: {
            type: Number,
            default: 1
        }
    }
}
</script>