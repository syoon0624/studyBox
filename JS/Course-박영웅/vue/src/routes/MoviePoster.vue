<template>
    <img :src="poster" />
</template>

<script>
export default {
    props: {
        poster: {
            type: String,
            default: ''
        }
    }
}
</script>