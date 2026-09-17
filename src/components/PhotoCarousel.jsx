import { useRef, useState } from "react";

const SWIPE_THRESHOLD_PX = 48;

export default function PhotoCarousel({ images = [], label = "Afbeelding volgt", ariaLabel = "Foto's" }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const count = images.length;

  if (count === 0) {
    return (
      <div className="ratio-4x5">
        <div className="media-placeholder-fill">
          <span>{label}</span>
        </div>
      </div>
    );
  }

  const go = (delta) => {
    setIndex((i) => (i + delta + count) % count);
  };

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

  return (
    <div className="photo-carousel" aria-roledescription="carousel" aria-label={ariaLabel}>
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
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
