import logo from './logo.svg';
import './App.css';
import TodayPlan from './component/TodayPlan';
import MyComponent from './component/MyComponent';
import C11_StateExample from './component/StateExample';
import LifeCycle from './component/LifeCycle';

const App = () => {
  return (
    <div className="App">
      <TodayPlan />
      <MyComponent name="패스트 캠퍼스" />
      <C11_StateExample />
      <LifeCycle />
    </div>
  );
}

export default App;
