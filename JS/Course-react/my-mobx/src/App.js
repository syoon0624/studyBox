import "bootstrap/dist/css/bootstrap.css";
import Counter from "./component/count/Counter";
import CounterStore from "./component/store/CounterStore";

//mobx 실행
const myCounter = new CounterStore();

function App() {
  return (
    <div className="App">
      <Counter count={myCounter}/>
    </div>
  );
}

export default App;
