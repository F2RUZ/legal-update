"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpandArrowsAlt, FaCompressArrowsAlt } from "react-icons/fa";

export const ContactMap = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Modal ochilganda scrollni to'xtatish
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isExpanded]);

  return (
    <section className="relative w-full h-[500px] bg-[#1a1612]">
      <AnimatePresence mode="wait">
        <motion.div
          key={isExpanded ? "expanded" : "compact"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} // Animatsiya juda tez
          className={
            isExpanded
              ? "fixed inset-0 z-[9999] w-screen h-screen bg-black"
              : "relative w-full h-full"
          }
        >
          {/* SIZNING IFRAME LOKATSIYANGIZ */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d285.26308197151656!2d69.291950994009!3d41.31599008379466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b728ab23bdf%3A0x9e250a9b42ad32ce!2sTraffic%20Legal!5e1!3m2!1sru!2s!4v1767760980016!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={`w-full h-full transition-all duration-300 ${
              isExpanded ? "grayscale-0" : "grayscale-[0.4] contrast-[1.1]"
            }`}
          ></iframe>

          {/* Interaktiv Tugma */}
          <div
            className={`absolute z-[10000] ${
              isExpanded ? "top-10 right-10" : "top-6 right-6"
            }`}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 bg-[#C59D5F] text-black px-8 py-4 font-black uppercase tracking-[0.2em] text-[12px] shadow-2xl hover:bg-black hover:text-[#C59D5F] transition-all duration-200 active:scale-90"
            >
              {isExpanded ? (
                <>
                  <FaCompressArrowsAlt size={16} /> Close Map
                </>
              ) : (
                <>
                  <FaExpandArrowsAlt size={16} /> Expand Map 100%
                </>
              )}
            </button>
          </div>

          {/* Info Badge (Faqat kichik holatda) */}
          {!isExpanded && (
            <div className="absolute bottom-6 left-6 bg-white p-4 shadow-xl border-l-4 border-[#C59D5F] hidden md:block">
              <p className="text-[10px] font-bold text-black uppercase tracking-widest">
                Our Office Location
              </p>
              <p className="text-[12px] text-gray-500 italic">
                Visit us for consultation
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
