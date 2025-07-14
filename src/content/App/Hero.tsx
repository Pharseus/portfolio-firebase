// @ts-ignore
import { Avatar } from "@mui/material";
import DataImage from "../data.js";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";


const Hero = () => {
  const imageRef = useRef(null);

  const handleDownloadPDF = () => {
    const input = imageRef.current;
    if (!input) {
      alert("Gambar belum siap.");
      return;
    }

    html2canvas(input, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = 210;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("CV_RogerMampuRejeki.pdf");
      })
      .catch((err) => {
        console.error("Gagal generate PDF:", err);
        alert("Gagal menyimpan PDF. Coba lagi.");
      });
  };

  return (
    <>
      {/* Hero */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <Avatar alt="foto" src={DataImage.HeroImage} />
            <q>Never Give Up. After the rain, the sun will always shine again.😊</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Roger</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya merupakan mahasiswa Teknik Informatika Soegijapranata Semarang. Saya berasal dari Kalimantan Tengah, yang lebih tepatnya tinggal di Palangka Raya.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <button
              onClick={handleDownloadPDF}
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </button>
            <Link to="/galeri" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Galeri <i className="ri-arrow-right-line ri-lg"></i>
            </Link>
          </div>
        </div>
        {/* Elemen gambar yang akan diambil sebagai PDF */}
        <div ref={imageRef} className="w-[500px] md:ml-auto">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            loading="eager"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
