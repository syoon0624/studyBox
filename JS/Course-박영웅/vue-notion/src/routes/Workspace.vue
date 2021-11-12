<template>
  <h1>Home page..</h1>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('workspace/readWorkspaces')
  }
}
</script>
