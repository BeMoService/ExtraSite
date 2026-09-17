import { useCallback, useEffect, useRef, useState } from "react";

const SWIPE_THRESHOLD_PX = 48;
const AUTO_ADVANCE_MS = 5000;
const PAUSE_AFTER_INTERACTION_MS = 10000;

export default function PhotoCarousel({ images = [], label = "Afbeelding volgt", ariaLabel = "Foto's" }) {
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const touchStartX = useRef(null);
  const pauseAutoplayUntil = useRef(0);
  const count = images.length;

  const bumpPause = () => {
    pauseAutoplayUntil.current = Date.now() + PAUSE_AFTER_INTERACTION_MS;
  };

  const go = useCallback(
    (delta) => {
      if (count === 0) return;
      bumpPause();
      setIndex((i) => (i + delta + count) % count);
    },
    [count]
  );

  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (count <= 1) return undefined;

    const id = window.setInterval(() => {
      if (document.hidden || hoverPaused) return;
      if (Date.now() < pauseAutoplayUntil.current) return;
      setIndex((i) => (i + 1) % count);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [count, hoverPaused]);

  if (count === 0) {
    return (
      <div className="ratio-4x5">
        <div className="media-placeholder-fill">
          <span>{label}</span>
        </div>
      </div>
    );
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientX;
    if (end == null) return;
    const delta = end - start;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    go(delta < 0 ? 1 : -1);
  };

  const goTo = (i) => {
    bumpPause();
    setIndex(i);
  };

  return (
    <div
      className="photo-carousel"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div className="ratio-4x5 photo-carousel__frame">
        <div
          className="photo-carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {images.map((src, i) => (
            <div className="photo-carousel__slide" key={src} aria-hidden={i !== index}>
              <img src={src} alt="" draggable={false} />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="carousel-hit carousel-hit--prev"
              aria-label="Vorige foto"
              onClick={() => go(-1)}
            />
            <button
              type="button"
              className="carousel-hit carousel-hit--next"
              aria-label="Volgende foto"
              onClick={() => go(1)}
            />
          </>
        )}
      </div>

      {count > 1 && (
        <div className="carousel-dots" role="tablist" aria-label={`${ariaLabel}, navigatie`}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Foto ${i + 1} van ${count}`}
              className={i === index ? "is-active" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
