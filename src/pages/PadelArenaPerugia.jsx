import PhotoCarousel from "../components/PhotoCarousel.jsx";
import { perugiaClubPhotos, perugiaTrainerPhotos } from "../config/media.js";

export default function PadelArenaPerugia() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <PhotoCarousel images={perugiaClubPhotos} ariaLabel="Padel Arena Fastweb clubfoto's" label="Clubfoto's volgen" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Padel Arena Fastweb - Perugia</h1>

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
            <li>6 FITP trainers</li>
            <li>Gym</li>
            <li>Bar &amp; buitenbar.</li>
          </ul>
          <p>
            Maestro trainers die écht met je meekijken, die tijdens het inspelen al doorhebben waar jouw kracht en
            valkuil liggen. Vanuit daar starten jouw lessen. Uiteraard is er na elke les tijd gereserveerd voor vrij
            spel om jouw geleerde technieken toe te passen. Bij mimi padel speel en oefen je altijd met
            gelijkwaardige spelers. Wij staan voor uitdagende, op maat gemaakte sessies. Je krijgt les van
            toptrainers met de allerhoogste FITP-kwalificatie van de Italiaanse tennis- en padelfederatie. Zo haal je
            gegarandeerd het beste uit jezelf en word je een nóg betere padeller!
          </p>
          <p>
            Om dit niveau te bereiken moesten onze trainers een zwaar leer- en examineringstraject doorlopen via het
            (ISF) Istituto Superiore die Formazione en praktijkervaring hebben in de tweede categorie spelersniveau.
            Dit zijn de spelers op het één na hoogste niveau, zij spelen mee in het nationale team en behoren tot de
            beste spelers van het land.
          </p>
        </div>

        <div className="secondary-media">
          <h2 className="page-subtitle">Trainers</h2>
          <PhotoCarousel
            images={perugiaTrainerPhotos}
            ariaLabel="Padel Arena Fastweb trainers"
            label="Trainerfoto's volgen"
          />
        </div>
      </div>
    </section>
  );
}
