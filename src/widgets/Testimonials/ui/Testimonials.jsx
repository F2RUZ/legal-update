"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import { FaQuoteRight } from "react-icons/fa"; // O'ng va pastga qaragan belgi

const testimonials = [
  {
    id: 1,
    name: "LEONARDO",
    role: "Manager",
    text: "Mollis aenean fermentum arcu diam egestas maleada viverra, ullampper.",
    img: "/lawho08.png.png",
  },
  {
    id: 2,
    name: "MICHAEL",
    role: "Marketing",
    text: "Mollis aenean fermentum arcu diam egestas maleada viverra, ullampper.",
    img: "/lawho08.png.png",
  },
  {
    id: 3,
    name: "SONNY",
    role: "California Lawyer",
    text: "Mollis aenean fermentum arcu diam nulla egestas maleada viverra.",
    img: "/lawho08.png.png",
  },
];

export const Testimonials = () => {
  const containerVariants = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-[#0c0b0a]">
      <Container>
        <div className="mb-12">
          <span className="text-[#C59D5F] text-[10px] font-bold uppercase tracking-[0.4em] block mb-2 italic">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white italic">
            Team Testimonials
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="bg-[#1a1714] p-8 rounded-lg relative overflow-hidden group border border-white/5 flex flex-col justify-between h-[230px]"
            >
              {/* Matn - Ixchamroq */}
              <p className="text-gray-400 text-base leading-relaxed italic font-light relative z-10">
                "{item.text}"
              </p>

              {/* Profil qismi */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C59D5F]/50">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-serif tracking-widest uppercase text-xs">
                    {item.name}
                  </h4>
                  <p className="text-[#C59D5F] text-[9px] italic uppercase tracking-tighter">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Qo'shtirnoq belgisi - Pastki o'ngda va yorqinroq */}
              <div className="absolute bottom-6 right-6">
                <FaQuoteRight className="text-[#C59D5F] text-4xl opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
              </div>

              {/* Hoverda chiqadigan tilla chiziq */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C59D5F] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
