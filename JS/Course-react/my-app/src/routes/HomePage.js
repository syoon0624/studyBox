import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        This is Homepage.
        <br />
        <Link to="/todo" className="deep-purple-text text-darken-1">
          <button className="waves-effect waves-light btn purple lighten-4">TodoPage로 가기</button>
        </Link>
    </div>
  );
}

export default HomePage;
