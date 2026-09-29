import {
  tripHeroImage,
  tripQuaternaryImage,
  tripQuinaryImage,
  tripSecondaryImage,
  tripTertiaryImage,
} from "../config/media.js";

function ReizenFlyer({ date, src }) {
  return (
    <article className="reizen-page__flyer-block">
      <h2 className="reizen-page__date">{date}</h2>
      <img className="reizen-page__flyer" src={src} alt="" loading="lazy" />
    </article>
  );
}

export default function Reizen() {
  return (
    <section className="section reizen-page">
      <div className="reizen-page__layout grid grid-2">
        <div className="reizen-page__photos">
          <ReizenFlyer date="Zaterdag 17 t/m dinsdag 20 oktober 2026" src={tripHeroImage} />
          <ReizenFlyer date="Vrijdag 6 t/m dinsdag 10 november 2026" src={tripSecondaryImage} />
          <ReizenFlyer date="Zaterdag 28 november t/m dinsdag 1 december 2026" src={tripTertiaryImage} />
          <ReizenFlyer
            date="Woensdag 30 december 2026 t/m zondag 3 januari 2027"
            src={tripQuaternaryImage}
          />
          <ReizenFlyer date="Verwachte data 2027" src={tripQuinaryImage} />
        </div>

        <div className="reizen-page__content col-text">
          <header className="reizen-page__intro">
            <h1 className="page-title">Onze reizen</h1>

            <div className="page-body">
              <p>
                Mimipadel staat voor op maat gemaakte reizen. Wil jij graag genieten van &ldquo;la dolce
                vita&rdquo; in het heuvelachtige Toscane, of juist het bruisende Perugia ontdekken in Umbrië? Wij
                bieden een vaste basis met vaste padel momenten en uiteraard seizoensgebonden excursies. Jij kiest
                jouw favoriete bestemming, wordt het Sinalunga of Perugia? Bekijk hier onze reizen en vraag direct via
                WhatsApp jouw offerte aan.
              </p>

              <p className="note-text">
                Let op: wij bieden deze reis aan bij een afname van 4 – 12 personen. Voor grotere groepen
                vragen wij via whatsapp contact op te nemen.
              </p>
            </div>
          </header>

          <section className="reizen-page__block page-body">
            <h2 className="page-subtitle">Volledig op maat?</h2>
            <p>
              Of toch nét even anders? Want op maat betekent bij ons ook écht op maat. Kom je liever samen met je
              kinderen, komt een andere datum jou net beter uit, reis je met een partner die geen padel speelt of zit
              je het liefst met je eigen padelteam in één vakantiehuis? Wij denken graag met je mee. Geef je wensen
              door en wij maken dezelfde dag nog een offerte op maat voor je.
            </p>
          </section>

          <section className="reizen-page__block page-body">
            <h2 className="page-subtitle">Toscane</h2>
            <p>
              In Toscane werken we samen met &ldquo;TODA&rdquo;, een nieuwe familieclub met nu al meer dan 650 leden.
              Hier word je getraind door FITP-coaches Federico, Nicole en Antonio. Zij staan garant voor persoonlijke
              aandacht en een geduldige uitleg. Laat je na een intensieve padelles verwennen op een historisch
              landgoed: Tenuta La Fratta zorgt voor een sfeervol verblijf. Ontdek hier de authentieke
              &ldquo;Cucina&rdquo; en geniet van een verfijnd glas wijn op het terras of aan het buitenzwembad.
            </p>

            <h2 className="page-subtitle">Umbrië</h2>
            <p>
              In Umbrië werken we samen met dé beste padelclub van Italië. Hier word je getraind door één van de maar
              liefst zeven FITP-coaches. Zij trainen onder andere de nieuwste generatie die in de toekomst zal shinen
              op de Premier Padel. Na een zware workout kom je volledig tot rust in het wellnesscentrum van ons
              viersterrenhotel, dat op loopafstand van de baan ligt.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
