import logo from './logo.svg';
import './App.css';
import TodayPlan from './component/TodayPlan';
import MyComponent from './component/MyComponent';
import C11_StateExample from './component/StateExample';

const App = () => {
  return (
    <div className="App">
      <TodayPlan />
      <MyComponent name="패스트 캠퍼스" />
      <C11_StateExample />
    </div>
  );
}

export default App;
