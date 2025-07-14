export const Footer = () => {
  return (
    <div className="border border-zinc-600 border-[3px] opacity-70 rounded-2xl mt-32 mb-5 py-4 px-3 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/Pharseus" target="blank">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/roger_mrr/" target="blank">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            {/* <a href="#">
                <i className="ri-reddit-fill ri-2x"></i>
            </a> */}
            <a href="#">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}
