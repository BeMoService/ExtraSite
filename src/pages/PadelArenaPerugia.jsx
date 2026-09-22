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
          <p className="lead-text">Tekst over deze locatie volgt binnenkort.</p>
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
