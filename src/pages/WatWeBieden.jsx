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
        </div>

        <SecondaryMedia src={homeBottomPhoto} aspect="3x2" label="Foto volgt" />

        <div className="home-bottom-text page-body">
          <p>
            Mimipadel staat voor op maat gemaakte reizen. Wil jij graag genieten van &ldquo;la dolce vita&rdquo; in
            het heuvelachtige Toscane, of juist het bruisende Perugia ontdekken in Umbrië? Wij bieden een vaste
            basis met vaste padel momenten en uiteraard seizoensgebonden excursies. Jij kiest jouw favoriete
            bestemming, wordt het Sinalunga of Perugia? Bekijk hier onze reizen en vraag direct via WhatsApp jouw
            offerte aan.
          </p>
        </div>

        <a href="#/reizen" className="btn btn--spaced">
          Bekijk onze reizen
        </a>

        <SecondaryMedia src={homeSecondaryVideo} type="video" aspect="16x9" label="Video volgt" />
      </div>
    </section>
  );
}
