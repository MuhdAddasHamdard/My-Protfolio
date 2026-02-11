import React, { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
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
    <section
      id="contact"
      className="py-20 bg-dot-light dark:bg-dot-dark  dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-gray-400 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {contact.availability}
            </p>
          </div>

          <div className="  lg:flex gap-6 ">
            {/* Contact Info */}
            <div className=" bg-white mb-6 lg:w-1/2 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-700/40 rounded-2xl shadow-lg p-6 dark:hover:bg-gray-900/80">
              <h3 className="text-2xl text-center font-bold dark:text-gray-400 mb-6">
                Contact Information
              </h3>
              <div className=" flex justify-center gap-3 items-center">
                <div className="flex flex-col justify-center items-center">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    <div className="w-12 h-12 bg-slate-300 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-900" />
                    </div>
                  </a>
                  <p>Email</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                  </a>
                  <p>GitHub</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                  </a>
                  <p>LinkedIn</p>
                </div>

                <div className=" bg-teal-100 rounded-lg flex items-center flex-col justify-center">
                  <div>
                    <MapPin className="w-6 h-6 text-teal-700" />
                  </div>
                  <p>Kabul</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="dark:bg-gray-900 container bg-white dark:bg-gray-900/60 backdrop-blur-md border-white/20 dark:border-gray-700/40 transition hover:bg-white/80 dark:hover:bg-gray-900/80 border p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold dark:text-gray-400 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="gap-4  lg:flex lg:justify-center">
                  <div className="lg:flex-grow">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 mb-3 rounded-lg bg-transparent ring-1 focus:ring-[#0F766E] border-transparent transition-all"
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
                      className="w-full px-4 py-3 rounded-lg ring-1 bg-transparent fill-transparent focus:ring-[#0F766E] focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 rounded-lg ring-1 bg-transparent focus:ring-[#0F766E] focus:border-transparent transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-2 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
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
