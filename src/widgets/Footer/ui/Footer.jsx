"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStripe,
} from "react-icons/fa";
import {
  SiUber,
  SiAirbnb,
  SiSlack,
  SiSpotify,
  SiNetflix,
} from "react-icons/si";

const partnerLogos = [
  { icon: <FaStripe size={40} />, name: "Stripe" },
  { icon: <SiUber size={35} />, name: "Uber" },
  { icon: <SiAirbnb size={35} />, name: "Airbnb" },
  { icon: <SiSlack size={35} />, name: "Slack" },
  { icon: <SiSpotify size={35} />, name: "Spotify" },
  { icon: <SiNetflix size={35} />, name: "Netflix" },
];

const Footer = () => {
  // Animatsiya variantlari
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    viewport: { once: true },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <footer className="relative w-full bg-white overflow-hidden">
      {/* 1. PARTNERS SECTION */}
      <div className="py-16 border-t border-gray-100 bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center lg:justify-between items-center gap-10 md:gap-12"
          >
            {partnerLogos.map((partner, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ opacity: 1, scale: 1.1, color: "#C59D5F" }}
                className="text-gray-300 transition-all duration-300 cursor-pointer"
              >
                {partner.icon}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>

      {/* 2. MAIN FOOTER AREA */}
      <div className="relative bg-[#1a120b] pt-40 pb-10 mt-32">
        {/* --- NEWSLETTER OVERLAY --- */}
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 -top-64 w-full bg-[#080a0b] border border-[#C59D5F]/30 p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl z-30 overflow-hidden"
          >
            <div className="w-full lg:w-1/2 relative z-10">
              <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight italic">
                Subscribe Your Email <br />
                <span className="text-white/70">
                  for Newsletter & Promotion
                </span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2 relative z-10 flex items-center border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent py-4 text-white outline-none focus:placeholder-transparent transition-all pr-28"
              />
              <button className="absolute right-0 bg-[#C59D5F] text-[#1a120b] px-8 py-3 font-bold uppercase text-[11px] tracking-widest hover:bg-white transition-all duration-300 active:scale-95">
                Send
              </button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
              <Image
                src="/bolga.png"
                alt="Law"
                fill
                className="object-cover object-right scale-125 grayscale"
              />
            </div>
          </motion.div>
        </Container>

        {/* --- MAIN CONTENT --- */}
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
          >
            {/* Kolonka 1 */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-[#C59D5F] flex items-center justify-center">
                  <span className="text-[#C59D5F] font-serif text-xl">L</span>
                </div>
                <h3 className="text-2xl font-serif text-white tracking-widest uppercase">
                  LawOne
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                "Leo sem euismod massa iaculis ullamcorper duis potenti,
                facilisi per natoque sapien proin pulvinar habitant."
              </p>
              <div className="flex gap-4 pt-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#C59D5F] hover:border-[#C59D5F] transition-all"
                    >
                      <Icon size={14} />
                    </a>
                  )
                )}
              </div>
            </motion.div>

            {/* Kolonka 2 */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest border-b border-[#C59D5F]/20 pb-2 inline-block italic">
                Our Services
              </h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                {[
                  "Domestic Violence",
                  "Business Activity",
                  "Murder Crime",
                  "Commercial Law",
                  "Financial Law",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-[#C59D5F] cursor-pointer transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#C59D5F] group-hover:w-4 transition-all duration-300" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Kolonka 3 */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest border-b border-[#C59D5F]/20 pb-2 inline-block italic">
                Support
              </h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                {[
                  "Professional",
                  "Contact Us",
                  "About Us",
                  "Support System",
                  "Refund Policy",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-[#C59D5F] cursor-pointer transition-colors italic"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Kolonka 4 */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest border-b border-[#C59D5F]/20 pb-2 inline-block italic">
                Gallery
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden group border border-white/5"
                  >
                    <Image
                      src={`/Margin.png`}
                      alt="law"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/5"
          >
            {[
              { icon: <FaPhoneAlt />, label: "Phone", val: "+6297501" },
              { icon: <FaEnvelope />, label: "Email", val: "lawone@mail.com" },
              {
                icon: <FaMapMarkerAlt />,
                label: "Location",
                val: "JL. Soekarno, USA",
              },
            ].map((det, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#C59D5F] group-hover:bg-[#C59D5F] group-hover:text-black transition-all duration-500">
                  {det.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                    {det.label}
                  </p>
                  <p className="text-white font-serif text-base italic">
                    {det.val}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center pt-10 border-t border-white/5 text-gray-600 text-[9px] uppercase tracking-[0.4em] italic"
          >
            Copyright © 2026 LAWONE ADVISORY. All Rights Reserved.
          </motion.div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
