<template>
    <h1>{{ message }}</h1>
    <HelloWorld class="active"/>
</template>

<script>
import HelloWorld from '~/components/TextField'

export default {
    components: {
       HelloWorld
    },
    data() {
        return {
            message: 'Hello Vue SFC!',
            count: 7
        }
    }
}
</script>