<template>
  <TheHeader />
  <RouterView />
</template>

<script>
import dayjs from 'dayjs'
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader
  },
  created() {
    const iso = dayjs(dayjs('2021-11-12 20:00:00').format('YYYY-MM-DD HH:mm:ss')).toISOString()
    console.log(iso)

    const formatted = dayjs('2021-11-12T11:00:00.000Z').format('YYYY년 MM월 DD일 HH시 mm분 ss초')
    console.log(formatted)

    console.log(dayjs()) // 현재 시간 dayjs객체
    console.log(dayjs().isBefore('2021-11-12T11:00:00.000Z')) //시간 전후시간대에 따라 Boolean 출력
    
  }
}
</script>
