import './App.css';
import Counter from './component/Counter';
import NewCount from './component/NewCounter';
import { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(20);

  const sendChild = () => {
    setCount(count + 10);
  }

  return (
    <div className="App">
      <Counter count={count} />
      <NewCount count={count} />
      <button onClick={sendChild}> 자식으로 30 보내기</button>
    </div>
  );
}

export default App;
