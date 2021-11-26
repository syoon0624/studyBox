import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "reactstrap"
import Counter from './component/Counter';

function App() {
  return (
    <Container>
      <Counter counterStore={10}/>
    </Container>
  );
}

export default App;
