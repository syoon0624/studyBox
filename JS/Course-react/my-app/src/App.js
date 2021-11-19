import './App.css';
import TodayPlan from './component/TodayPlan';
import MyComponent from './component/MyComponent';
import C11_StateExample from './component/StateExample';
import LifeCycle from './component/LifeCycle';
import { useEffect, useState } from 'react'

const App = () => {
  const [destroy, setDestroy] = useState(false);

  //ComponentDidMount 호출
  useEffect(() => {
    setDestroy(!destroy);
  },[])

  return (
    <div className="App">
      {/* <TodayPlan />
      <MyComponent name="패스트 캠퍼스" />
      <C11_StateExample /> */}
      { destroy ? null : <LifeCycle /> }
    </div>
  );
}

export default App;
