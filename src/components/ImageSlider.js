"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function ImageSlider({ images = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    skipSnaps: false,
  });

  const prev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const next = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  if (!images.length) return null;

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-3xl">
        <div className="flex">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%]">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="h-64 sm:h-80 md:h-96 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full px-3 py-2 shadow-lg"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full px-3 py-2 shadow-lg"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
