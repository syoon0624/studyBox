<template>
  <div class="app__inner">
    <LNB />
    <div class="app__page">

    </div>
  </div>

  <RouterView />
</template>

<script>
import LNB from '~/components/LNB'

export default {
  components: {
    LNB
  },
}
</script>

<style lang="scss" scoped>
.app__inner {
  display: flex;
  height: 100vh;
  .app__page {
    flex-grow: 1;
    border: 4px solid red;
    height: 100%;
  }
}
</style>