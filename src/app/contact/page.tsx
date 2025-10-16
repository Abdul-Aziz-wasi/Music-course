"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative">
      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-2"
      >
        Get in Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-600 mb-8 text-center max-w-xl"
      >
        Have a question or want to work together? Fill out the form below and I’ll get back to you soon.
      </motion.p>

      {/* Contact Form & Info */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 bg-white shadow-xl rounded-2xl p-8 md:p-12">
        {/* Left: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-4"
        >
          <label className="font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="font-semibold text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            rows={5}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-black text-white py-3 rounded-xl font-semibold shadow-md hover:bg-gray-700 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center space-x-4 bg-blue-50 p-4 rounded-xl"
          >
            <Mail className="text-blue-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">contact@yourdomain.com</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center space-x-4 bg-blue-50 p-4 rounded-xl"
          >
            <Phone className="text-blue-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-800">Phone</p>
              <p className="text-gray-600">+880 1234-567890</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center space-x-4 bg-blue-50 p-4 rounded-xl"
          >
            <MapPin className="text-blue-600 w-6 h-6" />
            <div>
              <p className="font-semibold text-gray-800">Address</p>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Animation */}
      <motion.div
        className="absolute top-10 right-10 bg-blue-100 w-24 h-24 rounded-full blur-3xl opacity-40"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
