import { useState } from "react";
import proyek1 from "../data";
import proyek2 from "../data";
import proyek3 from "../data";
import proyek4 from "../data";
import proyek5 from "../data";
import proyek6 from "../data";
import "./SliderGallery.css";


const slidesData = [
  { id: 1, img: proyek1, title: "Slide 01", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 2, img: proyek2, title: "Slide 02", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 3, img: proyek3, title: "Slide 03", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 4, img: proyek4, title: "Slide 04", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 5, img: proyek5, title: "Slide 05", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 6, img: proyek6, title: "Slide 06", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];

export default function SliderGallery() {
  const [slides, setSlides] = useState(slidesData);

  const handleNext = () => {
    setSlides((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setSlides((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  const getPositionClass = (i: number) => {
    switch (i) {
      case 0: return "slide-active-1";
      case 1: return "slide-active-2";
      case 2: return "slide-right-1";
      case 3: return "slide-right-2";
      case 4: return "slide-right-3";
      case 5: return "slide-hidden";
      default: return "";
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden relative">
      <div className="slider-container rounded-2xl">
        <div className="relative w-full h-full slider">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`slides ${getPositionClass(i)}`}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Tetap tampilkan konten di slide 0 dan 1 */}
              {(i === 0 || i === 1) && (
                <div className="content text-white p-10 max-w-xl z-10">
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  <p className="mt-2 text-base">{slide.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-5 z-20">
          <span
            onClick={handlePrev}
            className="w-12 h-12 bg-black rounded-full flex justify-center items-center cursor-pointer active:opacity-50 relative"
          >
            <span className="w-4 h-4 border-t-4 border-l-4 border-white rotate-[315deg] translate-x-[2px] translate-y-[2px] absolute" />
          </span>
          <span
            onClick={handleNext}
            className="w-12 h-12 bg-black rounded-full flex justify-center items-center cursor-pointer active:opacity-50 relative"
          >
            <span className="w-4 h-4 border-t-4 border-l-4 border-white rotate-[135deg] translate-x-[2px] translate-y-[2px] absolute" />
          </span>
        </div>
      </div>

      {/* Thumbnail untuk mobile */}
      <div className="thumbnail-wrapper md:hidden">
        {slides.slice(1, 5).map((slide) => (
          <div
            key={slide.id}
            className="thumbnail-item"
            style={{ backgroundImage: `url(${slide.img})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
