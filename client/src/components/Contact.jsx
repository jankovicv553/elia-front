import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      className="py-20 px-6 bg-purple-100 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold mb-6">Kontaktiraj nas</h2>
      <p className="text-lg text-gray-700 mb-4">
        Imate pitanja? Pošaljite nam poruku i rado ćemo odgovoriti.
      </p>
      <form className="max-w-xl mx-auto text-left">
        <input
          type="text"
          placeholder="Vaše ime"
          className="w-full mb-4 p-3 rounded border border-gray-300"
        />
        <input
          type="email"
          placeholder="Email adresa"
          className="w-full mb-4 p-3 rounded border border-gray-300"
        />
        <textarea
          rows="4"
          placeholder="Poruka"
          className="w-full mb-4 p-3 rounded border border-gray-300"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition"
        >
          Pošalji poruku
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
c;
