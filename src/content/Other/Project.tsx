// File: src/App.tsx
import { useState } from "react";
// import "./index.css";
import { listWisata } from "../data";

function App() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelected(id);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <>
        <div className="flex items-center justify-center mt-2 mb-3">
            <h1 className="text-2xl font-bold">Place I Want To Go</h1>
        </div>
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {listWisata.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleSelect(item.id)}
            >
            <img src={item.gambar} alt="thumbnail" className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      {selected !== null && (
          <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-sm"
          onClick={handleClose}
          >
          <div
            className="bg-[#111] text-white rounded-xl overflow-hidden max-w-2xl shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={ handleClose }
                className="absolute top-2 right-2 text-white bg-gray-700 hover:bg-gray-600 opacity-80 rounded-full w-8 h-8 flex items-center justify-center"
                aria-label="Close">
                    &times;
            </button>
            <img
              src={listWisata.find((i) => i.id === selected)?.gambar}
              alt="detail"
              className="w-full object-cover"
              />
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-1">
                {listWisata.find((i) => i.id === selected)?.nama}
              </p>
              <h2 className="text-2xl font-semibold mb-2">
                {listWisata.find((i) => i.id === selected)?.desk}
              </h2>
              {/* <div className="text-gray-300 text-sm mb-2 flex gap-2 flex-wrap">
                {listWisata.find((i) => i.id === selected)?.tools.map((tool, idx) => (
                  <span key={idx} className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                    {tool}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      )}
      </>
  );
}

export default App;
