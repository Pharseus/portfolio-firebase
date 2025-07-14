// @ts-ignore
import Navbar from "./components/Navbar.js";
import { PreLoader } from "./components/PreLoader.js";
import About from "./content/App/About.js";
import Contact from "./content/App/Contact.js";
import Hero from "./content/App/Hero.js";
import Test from "./content/App/Test.js";
import { Footer } from "./components/Footer.js";

// import DataImage from "./content/data.js";
// import { listTools, listProyek } from "./content/data.js";

// xl 1280 keatas
function App() {

  return (
    <>

    <PreLoader />
    <div className="container mx-auto px-4">
      <Navbar />
    {/* Hero */}
      <Hero />
    {/* Hero */}

      {/* Tentang */}
      <About />
      {/* Tentang */}

      {/* Proyek */}
      <Test />
      {/* Proyek */}

      {/* Kontak */}
       <Contact/>
      {/* formsubmitco, form bdk name*/}
      {/* Kontak */}
      <Footer />
    </div>
    </>
  )
}

export default App
