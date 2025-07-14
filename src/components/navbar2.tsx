import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// const Navbar = () => {
//     const [active, setActive] = useState(false);



//     useEffect(() => {
//         const handleScroll = () => {
//             if(window.scrollY > 150){
//                 setActive(true);
//             } else {
//                 setActive(false);
//             }
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll",handleScroll)
//         }
//     }, []); 
// import React from 'react'

const Navbar = () => {

    const [visible, setVisible] = useState(true);
    const scrollTimeoutRef = useRef(0);

    useEffect(() =>{
        const handleScroll = () =>{
            const isMobile = window.innerWidth <= 640;

            if(isMobile){
                setVisible(true); //tampil saat scroll di hp

                if (scrollTimeoutRef.current){
                    clearTimeout(scrollTimeoutRef.current);
                }
                (scrollTimeoutRef.current) = setTimeout(() => {
                    setVisible(false);
                }, 2000); //sembunyi setelah 2 detik tidak scroll
            } else {
                setVisible(true); //selalu tampil ketika sm keatas
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeoutRef.current){
                clearTimeout(scrollTimeoutRef.current);
            }
        }
    }, []);

return (
    <div className={`navbar py-7 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out 
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 sm:-translate-y-0 sm:opacity-100"}`}>
        <div className="logo">
            <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portfolio</h1>
        </div>
            <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2
            -translate-x-1/2 md:-translate-x-0 md:opacity-100 
            bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl
            md:bg-transparent transition-all md:transition-none z-40`}
            >
                {/* <li><a href="#beranda" className="sm:text-lg text-base font-medium">Beranda</a></li> */}
                {/* <li>className="sm:text-lg text-base font-medium">Beranda</li> */}
                <li><Link to="/other">Beranda</Link></li>
                <li><a href="#tentang" className="sm:text-lg text-base font-medium">Tentang</a></li>
                <li><a href="#proyek" className="sm:text-lg text-base font-medium">Proyek</a></li>
                <li><a href="#kontak" className="sm:text-lg text-base font-medium">Kontak</a></li>
            </ul>
    </div>
)
}

export default Navbar;

// ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}