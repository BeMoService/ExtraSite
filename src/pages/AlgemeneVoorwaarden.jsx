import AlgemeneVoorwaardenVolledig from "../components/AlgemeneVoorwaardenVolledig.jsx";

export default function AlgemeneVoorwaarden() {
  return (
    <section className="section legal-page">
      <h1 className="page-title">Algemene voorwaarden</h1>

      <div className="page-body">
        <p>
          Indien u een padelreis bij ons boekt, betekent dit dat u akkoord gaat met de voorwaarden van
          Mimipadel. Onze voorwaarden zijn te vinden op onze website. Daarnaast gaan wij ervan uit dat u alle
          voor uw reis relevante informatie op onze website hebt gelezen. Het aanbod van Mimipadel is
          vrijblijvend en kan zo nodig door Mimipadel worden herroepen. Onze voorwaarden zijn toegevoegd bij
          de bevestiging die u van ons ontvangt na inschrijving.
        </p>

        <details className="legal-details">
          <summary className="legal-details__summary">Open de volledige algemene voorwaarden</summary>
          <AlgemeneVoorwaardenVolledig />
        </details>
      </div>
    </section>
  );
}
