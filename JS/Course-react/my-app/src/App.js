import "../src/sass/materialize.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage'
import TodoPage from './routes/TodoPage'
import StoryInput from './component/StoryInput';
import CardComponent from "./component/CardComponent";
import StyleInput from "./component/StyleInput";

const App = () => {
  return (
    <div className="container" style={{paddingTop: "50px"}} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
      <StoryInput
        name="text"
        label="라벨"
        type="text"
        errorMessage="최대길이는 10자 입니다."
      ></StoryInput>
      <CardComponent />
      <StyleInput validType="number"/>
    </div>
  );
}

export default App;
