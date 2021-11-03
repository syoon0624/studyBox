<template>
    <h1 @click="updateMessage">{{ msg }}</h1>
    <h1>{{ message }}</h1>
    <h1>{{ reversedMessage }}</h1>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

function mapState(moduleName, stateNames) {
    const res = {}
    stateNames.forEach(name => {
        res[name] = function() {
            return this.$store.state[moduleName][name]
        }
    })
    return res
}

export default {
    data() {
        return {
            msg: 'Hello Vue SFC!',
            count: 7
        }
    },
    computed: {
        ...mapState('message', [
            'message',
        ]),
        ...mapGetters('message', [
            'reversedMessage'
        ])
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