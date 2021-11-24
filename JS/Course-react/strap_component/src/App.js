import 'bootstrap/dist/css/bootstrap.css';
import { Container, Input } from "reactstrap"
import ReactstrapCard from './component/ReactstrapCard';
import ReactstrapCollapse from './component/ReactstrapCollapse';
import ReactstrapFade from './component/ReactstrapFade';
import ReactstrapForm from './component/ReactstrapForm';

function App() {
  return (
    <Container>
      <Input />
      <ReactstrapCard />
      <ReactstrapCollapse />
      <ReactstrapFade />
      <ReactstrapForm />
    </Container>
  );
}

export default App;
