import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        This is Homepage.
        <br />
        <button><Link to="/todo">TodoPage로 가기</Link></button>
    </div>
  );
}

export default HomePage;
