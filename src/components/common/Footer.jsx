import React from "react";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Langkah", href: "#steps" },
  { name: "Fitur", href: "#features" },
  { name: "Tampilan", href: "#showcase" },
  { name: "FAQ", href: "#faq" },
  { name: "Tim", href: "#team" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] pt-16 font-inter px-5 lg:px-0">
      {/* Top section */}
      <div className="w-11/12 lg:w-3/4 mx-auto grid gap-15 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-600">
        {/* Logo + description */}
        <div>
          <img
            src="/img/logo-footer.png"
            alt="Giziku Logo"
            width={140}
            height={48}
            className="mb-4 select-none"
          />
          <p className="max-w-xs leading-relaxed">
            Giziku hadir sebagai solusi gizi keluarga berbasis teknologi. Menyederhanakan cara keluarga Indonesia mengatur anggaran, memilih makanan sehat, dan menjaga kecukupan gizi harian.
          </p>
        </div>

        {/* Navigation links */}
        <div className="lg:col-span-1 grid grid-cols-2 gap-15 mb-4">
            <div className="flex flex-col gap-2">
                {navigation.slice(0, Math.ceil(navigation.length / 2)).map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={`transition-colors duration-200 font-medium text-gray-600 hover:text-[#2AD882] mb-5`}
                >
                    {item.name}
                </a>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                {navigation.slice(Math.ceil(navigation.length / 2)).map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={`transition-colors duration-200 font-medium text-gray-600 hover:text-[#2AD882] mb-5`}
                >
                    {item.name}
                </a>
                ))}
            </div>
        </div>

        {/* Location */}
        <div className="text-sm">
          <h4 className="text-gray-800 font-semibold mb-2">Location</h4>
          <p>
            Jl. Kumbang No.14, RT.02/RW.06, Babakan, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16128
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* Bottom section */}
      <div className="w-11/12 lg:w-3/4 mx-auto pb-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>© 2025 Digdaya. All Rights Reserved.</p>

        {/* Social icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 text-gray-900 hover:text-[#2AD882]"
          >
            <IconBrandFacebook size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 text-gray-900 hover:text-[#2AD882]"
          >
            <IconBrandLinkedin size={22} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 text-gray-900 hover:text-[#2AD882]"
          >
            <IconBrandGithub size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 text-gray-900 hover:text-[#2AD882]"
          >
            <IconBrandInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
