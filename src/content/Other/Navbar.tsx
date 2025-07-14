import { Avatar } from "@mui/material"
import DataImage from "../data.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 mb-8 ">
      {/* Kiri */}
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold">My Galery</h1>

      {/* Kanan */}
      <div className="flex items-center gap-4">
        {/* <h1 className="text-4xl font-bold">Portfolio</h1> */}
        < Link to="/home" className="lg:text-4xl md:text-3xl sm:text-2xl font-bold">Portfolio</Link>
        <Avatar alt="Saya" src={DataImage.HeroImage} className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Navbar;