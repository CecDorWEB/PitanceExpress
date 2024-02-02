import "../Styles/Footer.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../Context/FavoriteContext";

function Footer() {
  const { basket } = useContext(FavoriteContext);

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
        <p className="exposant">{basket.length}</p>
        <button className="bottomIcon4"></button>
      </Link>
    </div>
  );
}
export default Footer;
