const Contact = () => {
  return (
    <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center"
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50"
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Yuk ngobrol! Isi form ini kalau kamu punya pertanyaan, proyek, atau sekadar mau kenalan😄</p>
        <form action="https://formsubmit.co/23k10057@student.unika.ac.id" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" 
        autoComplete="off"
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
        data-aos-once="true"> {/**/}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim pesan</button>
            </div>
          </div>
        </form>
      </div>
  )
}
export default Contact;
