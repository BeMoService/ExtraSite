import { SecondaryMedia } from "../components/PageSideContent.jsx";
import HeroSlogan from "../components/HeroSlogan.jsx";
import { homeBottomPhoto, homeSecondaryVideo } from "../config/media.js";
import logoImage from "../assets/mimipadel-logo.png";

export default function WatWeBieden() {
  return (
    <section className="home-page section">
      <div className="home-hero">
        <div className="home-hero__logo">
          <img src={logoImage} alt="" className="home-hero__logo-img" />
        </div>

        <div className="home-hero__intro">
          <div className="home-hero__slogan">
            <HeroSlogan hideBrand singleLine />
          </div>
          <h1 className="site-headline site-headline--hero">BOEK NU JOUW PADELREIS naar Italië.</h1>
          <p className="lead-text lead-text--hero">
            Speel padel op de beste locaties en ontdek de heuvels tussen Umbrië en Toscane. Wij bieden de
            beste faciliteiten, werken samen met gekwalificeerde trainers en staan voor passie gecombineerd
            met het fijne Italiaanse leven.
          </p>
        </div>
      </div>

      <div className="home-content">
        <h2 className="page-title">Wat we bieden</h2>

        <div className="page-body">
          <h3 className="page-subtitle">Ons trainingsprogramma</h3>
          <p>
            Ontdek ons ijzersterke en energieke trainingsprogramma! Met veel passie en kennis hebben we een
            complete training ontwikkeld voor ieder niveau. Wij focussen ons volledig op jouw persoonlijke
            verbeterpunten. Samen gaan we doelgericht en vooral met veel plezier aan de slag om jou een nóg
            betere padeller te maken.
          </p>

          <p>
            Een compleet verzorgde reis, zo simpel als het klinkt, zo uitgebreid als het voelt. Bij mimi
            padel staat een persoonlijke touch bovenaan, wij zullen er alles aan doen zodat jij een
            onvergetelijke reis krijgt. Jouw ervaring staat centraal, wij bewegen wel mee. Of dit nou gaat om
            een extra padel les, die ene unieke leuke locale tip of juist het vervoer van en naar een
            wijnproeverij.
          </p>

          <ul className="feature-list feature-list--plain">
            <li>
              Minimaal 1,5 training per dag en daarna tijd voor vrij spel van Maestro FITP trainers.
            </li>
            <li>Verblijf in een luxe sterrenhotel inclusief ontbijt.</li>
            <li>Spannende wedstrijden en toernooien.</li>
            <li>Jouw persoonlijke Mimipadel shirt (met jouw eigen naam).</li>
            <li>Welkomstdrankje inclusief welkomstpakket.</li>
          </ul>
        </div>

        <a href="#/reizen" className="btn btn--spaced">
          Bekijk onze reizen
        </a>

        <SecondaryMedia src={homeBottomPhoto} aspect="3x2" label="Foto volgt" />

        <div className="home-bottom-text content-slot content-slot--lead" aria-label="Tekst volgt" />

        <SecondaryMedia src={homeSecondaryVideo} type="video" aspect="16x9" label="Video volgt" />
      </div>
    </section>
  );
}
