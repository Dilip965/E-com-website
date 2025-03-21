import { Link } from 'react-router-dom';
import page_n from '../../assets/images/page_not.jpg';
import './style.css';

function Notfound() {
  return (
    <div className="notfound-container">
      <img className="notfound-image " src={page_n} alt="Page Not Found" />
      <h1 className="notfound-title">Oops! Page Not Found</h1>
      <p className="notfound-text">
        The page you are looking for does not exist. It may have been moved or deleted.
      </p>
      <Link to="/" className="notfound-btn">Go Back Home</Link>
    </div>
  );
}

export default Notfound;
