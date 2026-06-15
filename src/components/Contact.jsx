import React, { useState } from "react";
import {
  PaperPlaneTiltIcon,
  EnvelopeSimpleIcon,
  UserIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { portfolioData } from "../mock";

const Contact = () => {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setStatus("Your email app is opening with the message ready to send.");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 md:py-20 bg-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-100 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="uppercase tracking-[0.2em] text-sm text-gray-500 font-semibold">
              Contact Me
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Get in Touch
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-2xl text-gray-600 leading-relaxed">
              {contact.availability}
            </p>

            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Contact Card */}
          <div className="relative">
            {/* Glow Border */}
            <div className="absolute -inset-1 bg-gray-300 rounded-3xl blur opacity-40"></div>

            <div className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl p-5 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight sm:text-3xl">
                    Let's Build Something Amazing Together
                  </h3>

                  <p className="text-gray-600 text-2xl leading-relaxed mb-8">
                    Feel free to contact me for collaborations, freelance
                    projects, or just to say hello. I'm always open to
                    discussing new ideas and opportunities.
                  </p>

                  {/* Small Info Cards */}
                  <div className="space-y-4">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-gray-900 hover:bg-white"
                    >
                      <div className="p-3 rounded-xl bg-white shadow">
                        <EnvelopeSimpleIcon
                          size={22}
                          className="text-gray-800"
                        />
                      </div>

                      <div>
                        <h4 className="font-bold text-xl text-gray-900">
                          Email Me
                        </h4>
                        <p className="text-gray-500 text-xl">{contact.email}</p>
                      </div>
                    </a>

                    <a
                      href={contact.whatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-gray-900 hover:bg-white"
                    >
                      <div className="p-3 rounded-xl bg-white shadow">
                        <WhatsappLogoIcon size={22} className="text-gray-800" />
                      </div>

                      <div>
                        <h4 className="font-bold text-xl text-gray-900">
                          WhatsApp
                        </h4>
                        <p className="break-all text-xl text-gray-500">
                          Fastest way to reach me
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <div className="rounded-xl bg-white p-3 shadow">
                        <UserIcon size={22} className="text-gray-800" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-gray-900">
                          Availability
                        </h4>
                        <p className="text-xl text-gray-500">
                          Open for freelance projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block mb-2 text-xl font-medium text-gray-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="
                        w-full
                        px-5
                        py-4
                        rounded-2xl
                        border
                        border-gray-200
                        bg-gray-50
                        text-xl
                        text-gray-900
                        placeholder:text-gray-400
                        focus:border-gray-900
                        focus:ring-4
                        focus:ring-gray-200
                        transition-all
                        outline-none
                      "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-2 text-xl font-medium text-gray-700">
                      Your Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@gmail.com"
                      className="
                        w-full
                        px-5
                        py-4
                        rounded-2xl
                        border
                        border-gray-200
                        bg-gray-50
                        text-xl
                        text-gray-900
                        placeholder:text-gray-400
                        focus:border-gray-900
                        focus:ring-4
                        focus:ring-gray-200
                        transition-all
                        outline-none
                      "
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2 text-xl font-medium text-gray-700">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Write your message..."
                      className="
                        w-full
                        px-5
                        py-4
                        rounded-2xl
                        border
                        border-gray-200
                        bg-gray-50
                        text-xl
                        text-gray-900
                        placeholder:text-gray-400
                        focus:border-gray-900
                        focus:ring-4
                        focus:ring-gray-200
                        transition-all
                        outline-none
                        resize-none
                      "
                    ></textarea>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="
                      group
                      w-full
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      px-6
                      py-4
                      bg-gray-900
                      hover:bg-black
                      text-white
                      text-xl
                      font-semibold
                      rounded-2xl
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      shadow-xl
                    "
                  >
                    Send Message
                    <PaperPlaneTiltIcon
                      size={20}
                      className="group-hover:translate-x-1 transition"
                    />
                  </button>
                  {status && (
                    <p className="text-center text-sm text-gray-600">
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
