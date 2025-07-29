import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      className="py-20 px-6 bg-white-700 text-center text-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
      <p className="text-lg mb-4">
        Have a question? Send us a message or connect with us on social media.
      </p>

      <form className="max-w-xl mx-auto text-left">
        <input
          type="text"
          placeholder="Your name"
          className="w-full mb-4 p-3 rounded border border-gray-300 text-black"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full mb-4 p-3 rounded border border-gray-300 text-black"
        />
        <textarea
          rows="4"
          placeholder="Your message"
          className="w-full mb-4 p-3 rounded border border-gray-300 text-black"
        />
        <button
          type="submit"
          className="bg-gray-100 text-white-700 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social links */}
      <div className="flex justify-center mt-10 gap-6 text-2xl">
        <a
          href="https://www.facebook.com/people/Elia-Elevated-Athleisure/61576227774900/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/eliaelevatedathleisure/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@elia.socialclub"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.youtube.com/@eliasocialclub"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300"
        >
          <FaYoutube />
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;
