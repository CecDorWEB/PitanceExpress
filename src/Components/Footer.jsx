import "../Styles/Footer.css";
// import FavoriteContext from "../Context/FavoriteContext";

// import { useContext } from "react";
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
// const { stateQuantity, setStateQuantity } = useContext(FavoriteContext);

// const sum = stateQuantity.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// const addCart = () => {
//   setStateQuantity([...stateQuantity, sum]);
// };

// // const sum = (index) => {
// //   const newTable = [...stateQuantity];
// //   newTable[index];
// //   setStateQuantity(newTable);
// // };

{
  /* {stateQuantity.map((sum, index) => (
        <p key={index}>{sum}</p>
      ))} */
}
