import React from 'react'
import team from '../lib/team'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'

export default function Team() {
  return (
    <section id="team" className="bg-[#FFFFFF] py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20  text-center" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2AD882] mb-2">
          Tim Pengembang <br /> Giziku
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Kami adalah tim pengembang yang berdedikasi dalam menciptakan aplikasi Giziku untuk membantu masyarakat Indonesia memantau dan mengelola asupan gizi secara mudah dan efektif. Dengan latar belakang beragam, kami bersatu untuk menciptakan solusi teknologi yang berdampak positif.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full border-4 border-[#2AD882] overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-[#2AD882] mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.desc}</p>
              <div className="flex gap-4 text-gray-400 text-sm justify-center">
                {member.socials.facebook && (
                  <a href={member.socials.facebook} target="_blank" rel="noreferrer">
                    <FaFacebookF />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                )}
                {member.socials.instagram && (
                  <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                )}
                {member.socials.youtube && (
                  <a href={member.socials.youtube} target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
