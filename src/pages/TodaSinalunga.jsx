import PhotoCarousel from "../components/PhotoCarousel.jsx";
import { todaClubPhotos, todaTenutaPhotos, todaTrainerPhotos } from "../config/media.js";

export default function TodaSinalunga() {
  return (
    <section className="section page-club">
      <div className="page-club__top grid grid-2">
        <div className="col-image page-club__club-photo">
          <PhotoCarousel
            images={todaClubPhotos}
            ariaLabel="TODA clubfoto's"
            aspect="3x2"
            fillHeight
          />
        </div>

        <div className="col-text page-club__club-copy">
          <h1 className="page-title">TODA &amp; Sinalunga</h1>

          <div className="page-body">
            <p>
              <strong>TODA</strong> in Sinalunga, een vernieuwde club met padelbanen waarop Coello &amp; Tapia
              het Major toernooi in Rome wonnen van Galán &amp; Chingotto. Maar ook dé club waar een fanatieke
              wedstrijd gecombineerd wordt met Italiaanse gezelligheid.
            </p>
            <p>
              De faciliteiten zijn hier uitstekend — <em>il bagno é perfetto</em>. Oftewel de douches,
              toiletten en omkleedruimtes zijn nieuw en afgewerkt met prachtig Italiaans marmer.
            </p>
            <p>
              Na het padellen biedt de buitenbar met overdekte loungeplek een koud flesje water of voor de
              liefhebbers een huisgemaakte Aperol spritz. Nóg niet genoeg uitgedaagd? Speel dan eens een
              potje pickleball op de buitenbaan.
            </p>
          </div>
        </div>
      </div>

      <div className="page-club__trainers-row grid grid-2">
        <div className="col-text page-club__trainers-copy">
          <h2 className="page-subtitle">Trainers</h2>
          <div className="page-body">
            <p>
              Meet onze trainers bij TODA: Federico, Nicole &amp; Antonio, deze toptrainers (met zelfs Federico als
              Maestro op het allerhoogste FITP-kwalificatie van de Italiaanse tennis- en padelfederatie) halen
              gegarandeerd het beste uit jou om een nóg betere padeller te worden.
            </p>
            <p>
              Om dit niveau te bereiken moesten onze trainers een zwaar leer- en examineringstraject doorlopen via
              het (ISF) Istituto Superiore die Formazione en praktijkervaring hebben in de tweede categorie
              spelersniveau. Dit zijn de spelers op het één na hoogste niveau, zij spelen mee in het nationale team
              en behoren tot de beste spelers van het land.
            </p>
          </div>
        </div>

        <div className="col-image page-club__trainers">
          <PhotoCarousel images={todaTrainerPhotos} ariaLabel="TODA trainers" aspect="4x5" />
        </div>
      </div>

      <div className="page-club__tenuta-row grid grid-2">
        <div className="col-image page-club__club-photo">
          <PhotoCarousel
            images={todaTenutaPhotos}
            ariaLabel="Tenuta la Fratta"
            aspect="3x2"
            fillHeight
          />
        </div>

        <div className="col-text page-club__club-copy">
          <h2 className="page-subtitle">Tenuta la Fratta</h2>
          <p className="page-club__tagline">Un borgo storico nel cuore pi&uacute; autentico della Toscane</p>
          <p className="page-club__tagline page-club__tagline--lead">
            Een historisch dorp in het meest authentieke hart van Toscane.
          </p>
          <div className="page-body">
            <p>
              Dit oude dorp waar vroeger zo&rsquo;n 40 families samenwoonden is gerenoveerd tot een prachtig
              kleinschalig hotel, kom hier binnen in de &ldquo;woonkamer&rdquo; en voel je thuis. Buiten scharrelen
              wat kippen, een ezel en een pony los in de tuin. Vanuit je kamer kijk je uit over weilanden en het
              terras met zachte loungestoelen. Alle kamers zijn voorzien van een kwalitatief bed en inloopdouche. Loop
              eens een rondje over dit overweldigende oude terrein, waar nog enorm veel details te zien zijn. Of geniet
              van een drankje &amp; hapje op &eacute;&eacute;n van de ligbedden aan het ruime zwembad. Voor het
              avondeten blijf je thuis, steek je het terras over en kom je terecht in een nieuwe ruimte van rust, waar
              alleen gewerkt wordt met lokale producten, waaronder eigen olijfolie, wijn en vlees. Hier straalt alles
              rust uit, een plek waar je eigenlijk niet meer weg wilt.
            </p>
            <p>
              Vanaf het hotel ben je in zo&rsquo;n 5 minuten rijden bij de padelclub, rijdt daarna eens de steile weg
              omhoog Sinalunga in en eindig midden in een pittoresk klein dorpje boven op een berg. Neem plaats op het
              terras voor een gelato, tussen de lokale &ldquo;oudjes&rdquo; en geniet van het &ldquo;la dolce
              vita&rdquo;.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
