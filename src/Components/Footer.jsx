import "../Styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bottomNav">
      <button className="bottomIcon1">
        <Link to="/Home"></Link>
      </button>
      <span className="spanLine"></span>
      <button className="bottomIcon2">
        <Link to="/Menu"></Link>
      </button>
      <span className="spanLine"></span>
      <button className="bottomIcon3">
        <Link to="/Favorite"></Link>
      </button>
      <span className="spanLine"></span>
      <button className="bottomIcon4">
        <Link to="/Cash"></Link>
      </button>
    </div>
  );
}
export default Footer;
