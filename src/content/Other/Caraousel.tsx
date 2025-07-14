import { useState } from "react";
import { photo } from "../data";

export default function Slider() {
  const [slides, setSlides] = useState(photo);

  const handleNext = () => {
    setSlides((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setSlides((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
  };

  return (
    <div className="relative w-full min-h-[300px] flex justify-center items-center overflow-hidden mt-5">
      <div className="relative w-[95%] sm:w-[90%] md:w-[80%] h-[350px] sm:h-[450px] md:h-[500px] bg-amber-50 rounded-2xl overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute transition-all duration-700 ease-in-out rounded-2xl bg-cover bg-center shadow-xl flex justify-start items-end
              ${index === 0 ? "w-full h-full top-0 left-0 z-30 scale-100" : ""}
              ${index === 1 ? "w-[80%] sm:w-[70%] h-[80%] top-[10%] left-[5%] sm:left-[10%] z-20 scale-95" : ""}
              ${index === 2 ? "w-[70%] sm:w-[60%] h-[70%] top-[15%] left-[45%] sm:left-[60%] z-10 scale-90" : ""}
              ${index >= 3 ? "opacity-0 pointer-events-none" : ""}
            `}
            style={{ backgroundImage: `url(${slide.gambar})` }}
          >
            {(index === 0 || index === 1) && (
              <div className="relative p-4 sm:p-6 md:p-10 max-w-xs sm:max-w-sm md:max-w-md text-white z-50 bg-black/40 rounded-b-2xl">
                <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">{slide.nama}</h2>
                <p className="text-xs sm:text-sm md:text-base">{slide.desk}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tombol navigasi */}
      <div className="absolute bottom-3 sm:bottom-5 flex gap-4 sm:gap-5 z-50">
        <button
          onClick={handlePrev}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex justify-center items-center"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex justify-center items-center"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
