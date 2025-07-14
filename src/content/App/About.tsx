// @ts-ignore
import DataImage from "../data.js";
import { listTools } from "../data.js";

const About = () => {
    return (
    <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          {/* data-aos-once="true" untuk animasi hanya sekali saja setelah di load */}
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
            {/* <div className="sm:hidden">
                <Avatar alt="" src={DataImage.HeroImage} />
            </div> */}
            {/* <div className="w-48 h-48 rounded-md overflow-hidden shadow-lg"> */}

            <p className="text-base/loose mb-10">
            Setiap proyek adalah peluang untuk belajar hal baru. Saya percaya bahwa teknologi dapat menjadi jembatan antara ide dan dampak nyata di masyarakat.
            </p>
            <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
                <div>
                    <h1 className="text-4xl mb-1">2 <span className="text-violet-500">+</span></h1>
                    <p>Proyek Selesai</p>
                </div>
                <div>
                    <h1 className="text-4xl mb-1">1 <span className="text-violet-500">+</span></h1>
                    <p>Tahun Pengalaman</p>
                </div>
            </div>
        </div>
    </div>

        <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Tools yang dipakai</h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Berikut beberapa tools yang sering maupun pernah saya gunakan dalam mengerjakan proyek-proyek.</p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map(tool =>(
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" 
                key={tool.id}
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                <div>
                    <h4 className="font-bold">{tool.nama}</h4>
                    <p className="opacity-50">{tool.ket}</p>
                </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    ) 
}

export default About;