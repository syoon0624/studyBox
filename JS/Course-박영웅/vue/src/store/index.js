import { createStore } from 'vuex'

export default createStore({
    //data는 함수다.
    state: () => ({
        count: 0,
        message: 'Hello Vue!'
    }),
    //computed data
    getters: {
        double(state) {
            return state.count *2
        },
        reversedMessage(state) {
            return state.message.split('').reverse().join('')
        }
    },
    // 변이 메소드(데이터 수정 권한 v) - commit으로 실행
    mutations: {
        increase(state) {
            state.count += 1
        },
        reverseMessage(state) {
            state.message = state.message.split('').reverse().join('')
        },
        assignState(state, payload) { //heropy must be object!!
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },
    // 액션 메소드(데이터 수정 권환 x, 비동기), 컴포넌트에서 주로 활용 - dispatch로 실행
    actions: {
        // 함수 - 명령형
        increase({ state, commit }) {
            commit('assignState', {
                count: state.count + 1,
                message: 'Good~~~'
            })
        },
        updateMessage({ commit }) {
            commit('assignState', {
                message: 'Good Morning~'
            })
        }
    }
})