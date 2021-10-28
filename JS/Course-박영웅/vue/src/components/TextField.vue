<template>
    <input type="text" :value="message"/>
    <div>{{ count }}</div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: ''
        },
        count: {
            type: Number,
            default: 0,
            required: true
        }
    }
}
</script>