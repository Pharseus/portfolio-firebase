import { listProyek } from "../data.tsx";
import { useRef } from "react";

import {motion, useScroll, useTransform} from 'framer-motion';

const Test = () => {
  const targerRef = useRef(null);
  const { scrollYProgress } = useScroll ({target : targerRef});
  const x = useTransform(scrollYProgress, [0,1], ['0%', '-70%']);


  return (
    <div className="caraousel bg-zinc-900 h-[500vh] mt-20"id="proyek" ref={targerRef}>
      <div className="contentContainer h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden">
        <motion.div className="images flex gap-4 sm:gap-6 px-2 sm:px-4 w-max" style={{ x }}>
          {/* <div className="imageItem images grid grid-cols-6 grid-rows-1 gap-[3vw] py-0 px-[4rem]"> */}
          <motion.div className="imageItem flex gap-[3vw] py-0 sm:px-4"
          initial={{ opacity: 0, y : 150 }}
          whileInView={{ opacity: 1, y : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          {listProyek.map(proyek =>(
            // <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
            <div key={proyek.id} className="p-4 py-4 bg-zinc-800 rounded-md min-w-[100vw] md:min-w-[50vw] lg:min-w-[50vw]">
                <img src={proyek.gambar} alt="Proyek Image" className="" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600" key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Test
