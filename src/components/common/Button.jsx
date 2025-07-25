import React, { useEffect, useRef, useState } from "react";

export default function Button({ children, variant = 'primary', ...props }) {
  return (
    <button
      className={`rounded-md px-5 py-3 font-semibold shadow-md transition hover:brightness-95 active:scale-[0.97] ${
        variant === 'primary'
          ? 'bg-white text-[#2AD882]'  // Tombol putih, teks hijau (bisa dibaca)
          : 'bg-[#2AD882] text-white'  // Sekadar fallback kalo variant beda
      }`}
      {...props}
    >
      {children}
    </button>
  )
}
