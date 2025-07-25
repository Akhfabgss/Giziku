import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, hover } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "Langkah", href: "steps" },
  { name: "Fitur", href: "features" },
  { name: "Tampilan", href: "showcase" },
  { name: "FAQ", href: "faq" },
  { name: "Tim", href: "team" },
  { name: "Kontak", href: "contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
      updateActiveSection();
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); 
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const updateActiveSection = () => {
    const scrollY = window.scrollY + 120;
    const sections = navLinks
      .map(link => {
        const el = document.getElementById(link.href);
        if (!el) return null;
        return {
          id: link.href,
          offsetTop: el.offsetTop,
          height: el.offsetHeight
        };
      })
      .filter(Boolean);

    const last = sections[sections.length - 1];
    if (scrollY > last.offsetTop + last.height) {
      setActiveHash(null);
      return;
    }

    const current = [...sections].reverse().find(sec => scrollY >= sec.offsetTop);
    if (current) setActiveHash(`#${current.id}`);
  };

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const yOffset = -window.innerHeight / 12;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    const start = window.scrollY;
    const dist = y - start;
    const duration = 700;

    const ease = t =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let startTime = null;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = ease(progress);
      window.scrollTo(0, start + dist * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const renderNavItems = (isMobile = false) => (
    navLinks.map((item, i) => (
      <button
        key={i}
        onClick={() => {
          scrollTo(item.href);
          if (isMobile) setIsMobileMenuOpen(false);
        }}
        className={`relative text-sm ${
          isMobile
            ? "text-white" 
            : activeHash === `#${item.href}`
              ? "text-white font-semibold"
              : isScrolled
                ? "text-white/70 hover:text-white"
                : "text-black hover:text-white"
        }`}
      >
        <span className="relative">
          {item.name}
          {activeHash === `#${item.href}` && (
            <motion.div
              layoutId="nav-underline"
              className={`absolute -bottom-1 left-0 right-0 h-[2px] w-1/2 mx-auto rounded-full ${
                isScrolled ? "bg-white" : "bg-white"
              }`}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </span>
      </button>
    ))
  );

  return (
    <div className="relative w-full z-50">
      <motion.div
        animate={{
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          boxShadow: isScrolled ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "none",
          borderRadius: isScrolled
            ? isMobile ? "10px" : "30px"
            : "0px",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className={`fixed top-3 left-0 right-0 px-6 py-3 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled ? "mx-4" : "mx-0"
        }`} // 🔧 MODIFIED mx when scroll
      >
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 z-20">
          <img src="/img/logo_n.png" alt="Logo" width={30} height={30} className="rounded-full" />
          <span className={`${isScrolled ? "text-white" : "text-black"} font-bold`}>GIZIKU</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {renderNavItems()}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden z-20">
          {isMobileMenuOpen ? (
            <IconX className="text-black dark:text-white" onClick={() => setIsMobileMenuOpen(false)} />
          ) : (
            <IconMenu2 className="text-black dark:text-white" onClick={() => setIsMobileMenuOpen(true)} />
          )}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed mt-3 top-16 left-4 right-4 bg-black text-white rounded-xl shadow-lg px-6 py-6 flex flex-col gap-4 lg:hidden z-40"
          >
            {renderNavItems(true)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
