<template>
    <button @click="log">
        <slot></slot>
        <div >{{ $store.state.message }}</div>
    </button>
    
</template>

<script>
import sample from '~/mixins/sample'

export default {
    mixins: [sample],
    methods: {
        log() {
            console.log(this.sample)
        }
    }
}
</script>