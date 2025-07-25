import React from 'react'
import { IconClipboardText, IconCalendarTime, IconChecklist } from '@tabler/icons-react'

const steps = [
  {
    icon: <IconClipboardText size={32} className="text-[#2AD882]" />,
    title: "Atur Budget",
    desc: "Masukkan budget untuk makan dirimu dan keluarga untuk disesuaikan dengan kebutuhan gizi harian.",
  },
  {
    icon: <IconCalendarTime size={32} className="text-[#2AD882]" />,
    title: "Rencana Makan Otomatis",
    desc: "Dapatkan rencana makan harian berdasarkan anggaran dan kebutuhan gizimu.",
  },
  {
    icon: <IconChecklist size={32} className="text-[#2AD882]" />,
    title: "Pantau Kecukupan Gizi",
    desc: "Lihat ringkasan asupan nutrisi harian & tips makan sehat dalam satu aplikasi.",
  },
]

const Steps = () => {
  return (
    <section id='steps' className='py-20 px-4 lg:px-40 mx-auto max-w-screen'>
      <h1 className='text-3xl sm:text-4xl mb-12 text-[#2AD882] font-bold' data-aos="fade-right" data-aos-duration="800">Langkah Mudah</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="800">
        {steps.map((step, index) => (
        <div
        key={index}
        className="h-auto p-10 rounded-t-xl rounded-bl-xl rounded-br-[4rem] 
            shadow-[0_0_12px_rgba(0,0,0,0.2)] 
            hover:shadow-[0_0_12px_4px_rgba(42,216,130,0.6)] 
            transition-all duration-300 bg-white"
        >
            <div className="bg-[#D2F6EA] w-12 h-12 flex items-center justify-center rounded-full mb-4">
              {step.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Steps
