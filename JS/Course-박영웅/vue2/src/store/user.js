//헤더에서 사용자 정보를 항시 띄워주기
export default {
    naemspaced: true,
    state: () => ({
        currentUser: null,
      }),
      mutations: {
          assignState(state, payload) {
              Object.keys(payload).forEach(key => {
                  state[key] = payload[key]
              })
          }
      }
}