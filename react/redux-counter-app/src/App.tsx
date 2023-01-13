import './App.css';

type Props = {
  value: number;
};

function App({ value }: Props) {
  return (
    <div className="App">
      <p>Clicked: times</p>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
