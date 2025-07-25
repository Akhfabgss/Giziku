import React from 'react'
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";


const Contact = () => {
  return (
    <section id='contact' className="bg-[#f8fff8] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10" data-aos="fade-right" data-aos-duration="800">
          <h2 className="text-3xl font-bold text-[#2AD882]">Get In Touch</h2>
          <p className="mt-2 text-gray-600">
            Punya pertanyaan atau ingin kerja sama? Kirim pesan kepada kami!
          </p>
        </div>

        {/* Contact Form + Info */}
       <div className="bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="800">
            {/* Left: Form (2 columns) */}
            <div className="md:col-span-2 items-center">
                <form className="space-y-5 p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                    type="text"
                    placeholder="Name"
                    className="flex-1 border-b border-gray-400 focus:outline-none focus:border-[#2AD882] py-4"
                    />
                    <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 border-b border-gray-400 focus:outline-none focus:border-[#2AD882] py-4"
                    />
                </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-[#2AD882] py-4"
                    />
                    <textarea
                        placeholder="Message"
                        rows="1"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-[#2AD882] py-4 resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-[#2AD882] text-lg text-white font-semibold px-10 py-2 rounded-full hover:bg-[#24c176] transition"
                    >
                        Send
                    </button>
                </form>
            </div>

            {/* Right: Contact Info (1 column) */}
            <div className="bg-[#2AD882] text-white rounded-lg p-6 flex flex-col justify-center gap-6 m-3">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-sm">
                  Hubungi kami untuk kerja sama, pertanyaan, atau masukan mengenai aplikasi Giziku. Kami siap membantu Anda!
                </p>

                <div className="space-y-8">
                <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <IconMail size={40} />
                    <p>Giziku.id@gmail.com</p>
                </div>
                <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <IconPhone size={40} />
                    <p>+62 856 9322 8743</p>
                </div>
                <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-200 cursor-pointer mb-5">
                    <IconMapPin size={40} />
                    <p>Bogor, Indonesia</p>
                </div>
                </div>
            </div>
            </div>
      </div>
    </section>
  )
}

export default Contact