<template>
    <h1>{{ message }}</h1>
    <TextField :message="message" :count="count" @heropy="message = $event"/>
    <button @click="count+=1">increase</button>
</template>

<script>
import TextField from '~/components/TextField'

export default {
    components: {
        'TextField': TextField
    },
    data() {
        return {
            message: 'Hello Vue SFC!',
            count: 7
        }
    }
}
</script>