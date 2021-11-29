import "bootstrap/dist/css/bootstrap.css";
import Counter from "./component/count/Counter";
import CounterStore from "./component/store/CounterStore";
import UserStore from "./component/store/UserStore";
import User from "./component/user/User";

//mobx 실행
const myCounter = new CounterStore();
const userStore = new UserStore();

function App() {
  return (
    <div className="App">
      <Counter count={myCounter}/>
      <User userStore={userStore} count={myCounter}/>
    </div>
  );
}

export default App;
