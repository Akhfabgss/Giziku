import React, { useState } from 'react'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import faqImg from '/public/img/faq.png'
import faqs from '../lib/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3" data-aos="fade-right" data-aos-duration="800">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2AD882] mb-10">
            Frequently <br /> Asked Questions
          </h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-md shadow-sm hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={i * 500}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between px-6 py-4"
                >
                  <span className="text-left text-sm sm:text-base text-gray-700">
                    {faq.question}
                  </span>
                  {openIndex === i ? (
                    <IconChevronUp size={24} className="text-[#2AD882] transition-transform" />
                  ) : (
                    <IconChevronDown size={24} className="text-[#2AD882] transition-transform" />
                  )}
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i ? 'max-h-[300px] pt-0 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col items-center text-center" data-aos="fade-left" data-aos-duration="800">
          <img
            src={faqImg}
            alt="FAQ Illustration"
            className="mb-6 w-[300px] h-[300px] object-contain"
          />
          <h3 className="text-xl font-bold text-[#2AD882] mb-1">Any Question?</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            You can ask anything you want to know about Giziku
          </p>
        </div>
      </div>
    </section>
  )
}
