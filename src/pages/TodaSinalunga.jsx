import PhotoCarousel from "../components/PhotoCarousel.jsx";
import { todaClubPhotos, todaTrainerPhotos } from "../config/media.js";

export default function TodaSinalunga() {
  return (
    <section className="grid grid-2 section">
      <div className="col-image">
        <PhotoCarousel images={todaClubPhotos} ariaLabel="TODA clubfoto's" />
      </div>

      <div className="col-text">
        <h1 className="page-title">Toda - Sinalunga</h1>

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

        <div className="secondary-media">
          <h2 className="page-subtitle">Trainers</h2>
          <PhotoCarousel images={todaTrainerPhotos} ariaLabel="TODA trainers" />
        </div>
      </div>
    </section>
  );
}
