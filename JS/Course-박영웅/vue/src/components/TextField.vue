<template>
    <div >Hello World</div>
    <div v-bind="$attrs">Hello world</div>
</template>

<script>
export default {
    // $attrs
    props: {
    }
}
</script>

<style lang="scss" scoped>
div {
    &.active {
        color: red;
    }
}
</style>