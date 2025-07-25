import React from 'react'
import { IconCheck } from '@tabler/icons-react'
import fiturImg from "/public/img/fitur.png" 

const features = [
  {
    title: 'Resep Makanan Sehat & Bergizi',
    desc: 'Dapatkan rekomendasi resep harian yang lezat, sesuai kebutuhan nutrisi keluarga.',
  },
  {
    title: 'Rencana Makan Harian Otomatis',
    desc: 'AI kami membantu merancang menu mingguan berdasarkan anggaran dan preferensi gizi Anda.',
  },
  {
    title: 'Pantauan Gizi Real-Time', 
    desc: 'Tanya apa saja tentang nutrisi, gizi, atau rencana makan. Bot pintar kami siap membantu Anda 24/7.',
  },
  {
    title: 'Bot AI Gizi Asisten Keluarga',
    desc: 'Cari tahu lokasi bahan makanan terdekat, termasuk diskon bahan makanan yang mendekati masa kadaluarsa — bantu kurangi food waste!',
  },
]

const Features = () => {
  return (
    <section id='features' className='py-10 md:py-20 px-4 lg:px-40 mx-auto max-w-screen' data-aos="fade-right" data-aos-duration="800">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#2AD882] mb-12">
        Fitur Keren yang <br /> Membuat Giziku Berbeda!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={fiturImg}
            alt="Fitur App"
            className="w-full max-w-[1200px] lg:scale-115 transition-transform duration-300"
          />
        </div>

        <div className="space-y-6">
          {features.map((fitur, index) => (
            <div
              key={index}
              className="border rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[4rem] p-6 shadow-sm bg-white"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 500}
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#D2F6EA] w-8 h-8 flex items-center justify-center rounded-full shrink-0">
                  <IconCheck size={15} className="text-[#2AD882]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{fitur.title}</h3>
                  <p className="text-sm text-gray-700">{fitur.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
