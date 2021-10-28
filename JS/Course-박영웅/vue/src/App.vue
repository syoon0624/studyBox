<template>
    <h1>{{ message }}</h1>
    <TextField />
</template>

<script>
import TextField from '~/components/TextField'

export default {
    components: {
        'TextField': TextField
    },
    data() {
        return {
            message: 'Hello Vue SFC!'
        }
    }
}
</script>