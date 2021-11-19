import logo from './logo.svg';
import './App.css';
import TodayPlan from './component/TodayPlan';
import MyComponent from './component/MyComponent';

const App = () => {
  return (
    <div className="App">
      <TodayPlan />
      <MyComponent name="패스트 캠퍼스" />
    </div>
  );
}

export default App;
