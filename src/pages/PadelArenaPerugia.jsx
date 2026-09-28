import PhotoCarousel from "../components/PhotoCarousel.jsx";
import { perugiaClubPhotos, perugiaTrainerPhotos } from "../config/media.js";

export default function PadelArenaPerugia() {
  return (
    <section className="section page-club">
      <div className="page-club__top grid grid-2">
        <div className="col-image page-club__club-photo">
          <PhotoCarousel
            images={perugiaClubPhotos}
            ariaLabel="Padel Arena Fastweb clubfoto's"
            label="Clubfoto's volgen"
            aspect="3x2"
            fillHeight
          />
        </div>

        <div className="col-text page-club__club-copy">
          <h1 className="page-title">Padel Arena Fastweb &amp; Perugia</h1>

          <div className="page-body">
            <p>Een club zoals weinigen ooit gezien hebben.</p>
            <p>
              Hier trainen de ALLERBESTEN, Padel Arena Fastweb is in 2024 EN 2025 verkozen tot beste padelclub in
              Italië. Onze trainers geven les aan dé padeltoekomst van Italië. Zo heeft de club maar liefst:
            </p>
            <ul className="feature-list feature-list--plain">
              <li>14 padelbanen</li>
              <li>3 beachvolleybalvelden</li>
              <li>Ruime faciliteiten</li>
              <li>7 Maestro FITP trainers</li>
              <li>Gym</li>
              <li>Bar &amp; buitenbar.</li>
            </ul>
            <p>
              Maestro trainers die écht met je meekijken, die tijdens het inspelen al doorheen waar jouw krachten en
              valkuil liggen. Vanuit daar starten jouw lessen. Uiteraard is er na elke les tijd gereserveerd voor vrij
              spel om jouw geleerde technieken toe te passen.
            </p>
            <p>
              Je krijgt les van toptrainers met de allerhoogste FITP-kwalificatie van de Italiaanse tennis- en
              padelfederatie. Zo haal je gegarandeerd het beste uit jezelf en word je een nóg betere padeller!
            </p>
            <p>
              Om dit niveau te bereiken moesten onze trainers een zwaar leer- en examineringstraject doorlopen via het
              (ISF) Istituto Superiore die Formazione en praktijkervaring hebben in de tweede categorie spelersniveau.
              Dit zijn de spelers op het één na hoogste niveau, zij spelen mee in het nationale team en behoren tot de
              beste spelers van het land.
            </p>
          </div>
        </div>
      </div>

      <div className="page-club__trainers-row grid grid-2">
        <div className="page-club__trainers-spacer" aria-hidden="true" />
        <div className="secondary-media page-club__trainers">
          <h2 className="page-subtitle">Trainers</h2>
          <PhotoCarousel
            images={perugiaTrainerPhotos}
            ariaLabel="Padel Arena Fastweb trainers"
            label="Trainerfoto's volgen"
            aspect="4x5"
          />
        </div>
      </div>
    </section>
  );
}
