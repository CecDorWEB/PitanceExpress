import { Link } from "react-router-dom";

import "../Styles/home.css";
import MusicHeader from "../Components/MusicHeader";

function Home() {
  return (
    <div className="home_page">
      <MusicHeader />
      <h1 className="home_title">Pitance Express</h1>
      <p className="home_msg">
        Oyé Oyé ! Soyez les bienvenues sur les pages électroniques de Pitance
        Express, où vous pouvez jouir des délices médiévaux, délivrés
        promptement jusqu&apos;à votre demeure par notre fidèle charette,
        assurant ainsi une expérience gastronomique sans pareille.
      </p>
      <Link to="/Menu">
        <button className="home_button">
          Recevoir la délivrance par l&apos;entremise d&apos;un gueu
        </button>
      </Link>
      <img src="src\assets\welcome.png" className="home_img" />
    </div>
  );
}

export default Home;
