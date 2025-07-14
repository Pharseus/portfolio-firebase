import Slider from "../content/Other/Caraousel"
import Navbar from "../content/Other/Navbar"
import App from "../content/Other/Project"

const Main = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-[#111] dark:text-white p-8">
        <Navbar />
        <App />
        <div className="flex items-center justify-center mt-20">
          <h1 className="text-2xl font-bold">Places I have Visited</h1>
        </div>
        <Slider />
      </div>
    </>
  )
}

export default Main