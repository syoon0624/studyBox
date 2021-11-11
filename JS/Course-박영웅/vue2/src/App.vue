<template>
  <TheHeader />
  <RouterView />
</template>

<script>
import TheHeader from '~/components/TheHeader'
import axios from 'axios'
export default {
  components: {
    TheHeader
  },
  async created() {
    const { data } = await axios({
      url: '/.netlify/functions/test',
      method: 'GET'
    })
    console.log(data)
  }
}
</script>
