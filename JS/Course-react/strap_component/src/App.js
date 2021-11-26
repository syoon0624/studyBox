import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from "reactstrap"
import Counter from './component/Counter';
import RequestComponent from './component/RequestComponent';
import CopyComponent from "./component/CopyComponent"

function App() {
  return (
    <Container>
      <Counter counterStore={10}/>
      <Row>
        <RequestComponent />
      </Row>
      <Row>
        <CopyComponent />
      </Row>
    </Container>
  );
}

export default App;
