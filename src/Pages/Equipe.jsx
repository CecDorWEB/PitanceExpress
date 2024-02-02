import "../Styles/equipe.css";

function Equipe() {
  return (
    <section className="equipe_container">
      <h1>L&apos;équipe</h1>
      <div className="livreurs_container">
        <div className="livreur">
          <img src="src/assets/thibault.png" alt="Thibaut le livreur"></img>
          <h2>Thibault</h2>
          <p>Livreur de gueux</p>
        </div>
        <div className="livreur">
          <img src="src/assets/yohan.png" alt="Yohan le livreur"></img>
          <h2>Yohan</h2>
          <p>Livreur de nobles</p>
        </div>
      </div>
      <div className="cuisinieres_container">
        <div className="cuisiniere">
          <img src="src/assets/cecile.png" alt="Cecile la cuisto"></img>
          <h2>Cécile</h2>
          <p>Cuisinière du dimanche</p>
        </div>
        <div className="cuisiniere">
          <img src="src/assets/margot.png" alt="Margot la cuisto"></img>
          <h2>Margot</h2>
          <p>Cuisinière du lundi</p>
        </div>
        <div className="cuisiniere">
          <img src="src/assets/axelle.png" alt="Axelle la cuisto"></img>
          <h2>Axelle</h2>
          <p>Cuisinière de jamais</p>
        </div>
      </div>
    </section>
  );
}

export default Equipe;
