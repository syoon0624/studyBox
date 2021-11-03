<template>
    <h1 @click="updateMessage">{{ msg }}</h1>
    <h1>{{ message }}</h1>
    <h1>{{ reversedMessage }}</h1>
    <input type="text" v-model="message" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            msg: 'Hello Vue SFC!',
            count: 7
        }
    },
    computed: {
        ...mapGetters('message', [
            'reversedMessage'
        ]),
        message: {
            get() {
                return this.$store.state.message.message
            },
            set(message) {
                this.$store.commit('message/assignState', {
                    message
                })
            }
        }
    },
    methods: {
        ...mapActions('message', [
            'updateMessage'
        ])
    },
    async mounted() {
        const res = await this.$fetch('matrix')
        console.log(res)
    }
}
</script>