export default function HeroSlogan({ hideBrand = false, singleLine = false }) {
  if (singleLine) {
    return (
      <div
        className="hero-slogan hero-slogan--single"
        aria-label="daar waar Padel en la dolce vita samenkomen"
      >
        <p className="hero-slogan__text-single">
          <span className="hero-slogan__part">daar waar </span>
          <span className="hero-slogan__highlight hero-slogan__highlight--gold">Padel</span>
          <span className="hero-slogan__part"> en </span>
          <span className="hero-slogan__highlight hero-slogan__highlight--gold">la dolce vita </span>
          <span className="hero-slogan__part">samenkomen.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="hero-slogan" aria-label="mimi padel — daar waar Padel en la dolce vita samenkomen">
      {!hideBrand && <p className="hero-slogan__brand">mimi padel</p>}
      {!hideBrand && <div className="hero-slogan__rule" aria-hidden="true" />}

      <p className="hero-slogan__text">
        <span className="hero-slogan__line hero-slogan__line--1">daar waar</span>
        <span className="hero-slogan__line hero-slogan__line--2">
          <span className="hero-slogan__highlight">Padel</span>
          <span className="hero-slogan__and"> en </span>
          <span className="hero-slogan__highlight hero-slogan__highlight--vita">la dolce vita</span>
        </span>
        <span className="hero-slogan__line hero-slogan__line--3">samenkomen.</span>
      </p>
    </div>
  );
}
