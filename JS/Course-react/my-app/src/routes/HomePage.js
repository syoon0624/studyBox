import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        This is Homepage.
        <br />
        <button className="waves-effect waves-light btn purple lighten-4"><Link to="/todo" className="deep-purple-text text-darken-1">TodoPage로 가기</Link></button>
    </div>
  );
}

export default HomePage;
