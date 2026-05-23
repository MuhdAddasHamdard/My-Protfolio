import React, { useState } from "react";
// import {Send } from "@phosphor-icons/react";
import { portfolioData } from "../mock";

const Contact = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-dot-light dark:bg-dot-dark ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-[#0F766E] mx-auto mb-6"></div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {contact.availability}
            </p>
          </div>

          <div className="  lg:flex gap-6 ">
            {/* Contact Info */}

            {/* Contact Form */}
            <div
              className=" container backdrop-blur-md transition  bg-[#111827]
border border-white/5
p-6
rounded-2xl
shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="gap-4 lg:flex lg:justify-center">
                  <div className="lg:flex-grow">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="
w-full
px-4
py-3
rounded-xl
bg-[#0B1220]
text-slate-200
placeholder:text-slate-500
border border-white/5
focus:border-[#0F766E]
focus:ring-2
focus:ring-[#0F766E]/30
transition-all
outline-none
"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="lg:flex-grow">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="
w-full
px-4
py-3
rounded-xl
bg-[#0B1220]
text-slate-200
placeholder:text-slate-500
border border-white/5
focus:border-[#0F766E]
focus:ring-2
focus:ring-[#0F766E]/30
transition-all
outline-none
"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="
w-full
px-4
py-3
rounded-xl
bg-[#0B1220]
text-slate-200
placeholder:text-slate-500
border border-white/5
focus:border-[#0F766E]
focus:ring-2
focus:ring-[#0F766E]/30
transition-all
outline-none
"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
w-full
inline-flex
items-center
justify-center
gap-2
px-2
py-4
bg-[#0F766E]
text-white
font-semibold
rounded-xl
hover:bg-[#115E59]
hover:scale-[1.02]
transition-all
duration-300
shadow-[0_10px_30px_rgba(15,118,110,0.25)]
"
                >
                  {/* <Send className="w-5 h-5" /> */}
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
