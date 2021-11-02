<template>
    <div >Hello World</div>
</template>

<script>
import sample from '~/mixins/sample'

export default {
    mixins: [sample],
    inheritAttrs: false
}
</script>

<style lang="scss" scoped>
div {
    &.active {
        color: red;
    }
}
</style>