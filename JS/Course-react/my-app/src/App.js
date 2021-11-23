import "../src/sass/materialize.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage'
import TodoPage from './routes/TodoPage'

const App = () => {
  return (
    <div className="container" style={{paddingTop: "50px"}} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
