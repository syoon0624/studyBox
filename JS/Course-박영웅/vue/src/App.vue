<template>
    <h1 @click="updateMessage">{{ message }}</h1>
    <h1>{{ heropy }}</h1>
    <h1>{{ reversedMessage }}</h1>
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
    computed: {
        heropy() {
            return this.$store.state.message.message
        },
        reversedMessage() {
            return this.$store.getters['message/reversedMessage']
        }
    },
    methods: {
        updateMessage() {
            this.$store.dispatch('message/updateMessage')
        }
    },
    async mounted() {
        const res = await this.$fetch('matrix')
        console.log(res)
    }
}
</script>