import PhotoCarousel from "../components/PhotoCarousel.jsx";
import { todaClubPhotos, todaTrainerPhotos } from "../config/media.js";

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
              Je krijgt les van toptrainers met de allerhoogste FITP-kwalificatie van de Italiaanse tennis- en
              padelfederatie. Zo haal je gegarandeerd het beste uit jezelf en word je een nóg betere padeller!
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
    </section>
  );
}
