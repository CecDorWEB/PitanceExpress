import "../Styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bottomNav">
      <Link to="/">
        <button className="bottomIcon1"> </button>
      </Link>
      <span className="spanLine"></span>
      <Link to="/Menu">
        <button className="bottomIcon2"> </button>
      </Link>
      <span className="spanLine"></span>
      <Link to="/Favorite">
        <button className="bottomIcon3"> </button>
      </Link>
      <span className="spanLine"></span>
      <Link to="/Cash">
        <button className="bottomIcon4"></button>
      </Link>
    </div>
  );
}
export default Footer;
