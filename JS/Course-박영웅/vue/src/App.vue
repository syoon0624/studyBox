<template>
    <h1>{{ message }}</h1>
    <HelloWorld class="active"/>
    <TheButton />
</template>

<script>
import HelloWorld from '~/components/TextField'
import TheButton from '~/components/TheButton'

export default {
    components: {
       HelloWorld, TheButton
    },
    data() {
        return {
            message: 'Hello Vue SFC!',
            count: 7
        }
    },
    async mounted() {
        const res = await this.$fetch('matrix')
        console.log(res)
    }
}
</script>