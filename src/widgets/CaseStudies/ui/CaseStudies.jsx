"use client";
import React from "react";
import Image from "next/image";
import { Container } from "@/shared/ui/Container/Container";
import { motion } from "framer-motion";

const cases = [
  { title: "Personal Injury", img: "/Margin.png" },
  { title: "Investment", img: "/Margin.png" },
  { title: "Legal Separation", img: "/Margin.png" },
  { title: "Domestic Violence", img: "/Margin.png" },
  { title: "Illegal", img: "/Margin.png" },
  { title: "Digital Crime", img: "/Margin.png" },
];

export const CaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="mb-20">
          <span className="text-[#C59D5F] text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1612] max-w-xl leading-tight">
            Many projects Done that make us Stand out
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              {/* Rasm qismi */}
              <div className="relative w-full h-[380px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Ma'lumot qismi (Oq box - o'ngga surilgan) */}
              <div className="relative z-10 w-[70%] ml-auto -mt-24 bg-white px-0.5   p-0.5 shadow-sm">
                <div className="text-right">
                  <h3 className="text-xl font-serif font-bold text-[#1a1612] uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm italic mb-6">
                    Lorem ipsum dolor
                  </p>
                </div>

                {/* Tugma: Hover/Active qora rangda */}
              </div>
              <button
                className="
                  w-full py-4 bg-[#FCD17B] text-black font-bold uppercase tracking-[0.2em] text-[12px]
                  transition-all duration-300
                  hover:bg-black hover:text-[#FCD17B] 
                  active:bg-[#1a1a1a] active:scale-[0.98]
                "
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
