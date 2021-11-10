<template>
  <h1>About page..</h1>
  <div>
    <input type="file" @change="selectFile" />
  </div>
  <div>
    <img :src="profileImgBase64" alt="Hello">
  </div>
  <button @click="updateUser">
    사용자 정보 수정!
  </button>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      profileImgBase64: null
    }
  },
  methods: {
    selectFile(event) {
      const { files } = event.target
      // 유사배열 Array-like
      for (const file of files) {
        console.log(file)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load', () => {
          console.log(reader.result)
          this.profileImgBase64 = reader.result
        })
      }
    },
    async updateUser() {
      const token = sessionStorage.getItem('accessToken')
      const {data} = await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user',
          method: 'PUT',
          headers: {
              "content-type": "application/json",
              "apikey": "FcKdtJs202110",
              "username": "pascal",
              "authorization": `Bearer ${token}`
          },
            data: {
              "profileImgBase64": this.profileImgBase64
          }
      })
      console.log(data)
    }
  }
}
</script>