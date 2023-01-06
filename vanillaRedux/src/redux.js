export function createStore(reducer) {
  let state;
  const handler = [];

  function dispatch(action) {
    state = reducer(state, action);
    handler.forEach((listener) => {
      listener();
    });
  }

  function getState() {
    return state;
  }

  // dispatch를 통해 변한 state를 구독한 모든 컴포너트에게 알림
  function subscribe(listener) {
    handler.push(listener);
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}
