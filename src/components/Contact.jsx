import React, { useState } from "react";
import {
  PaperPlaneTiltIcon,
  EnvelopeSimpleIcon,
  UserIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { portfolioData } from "../mock";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

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

  const inputClass = `
    w-full
    rounded-xl border border-white/10 bg-navy/50 px-4 py-3.5 text-sm text-slate-200
    placeholder:text-slate-500 outline-none transition-all duration-300
    focus:border-accent/50 focus:bg-navy/70 focus:ring-4 focus:ring-accent/10
  `;

  return (
    <section id="contact" className="section-pad relative overflow-hidden scroll-mt-28 bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-44 top-1/4 h-[480px] w-[480px] rounded-full bg-teal/6 blur-[160px]"
      />

      <div className="container-xl relative z-10">
        <SectionHeading
          index="07"
          eyebrow="Contact Me"
          title="Get in Touch"
          description={contact.availability}
        />

        <Reveal>
          <div className="relative">
            {/* Soft halo above the panel */}
            <div
              aria-hidden
              className="absolute -inset-x-10 -top-10 h-40 rounded-full bg-teal/10 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface p-6 shadow-card-lg sm:p-10 lg:p-14">
              <div
                aria-hidden
                className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent"
              />

              <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                {/* Left */}
                <div>
                  <h3 className="font-display text-2xl font-bold leading-snug text-subtle sm:text-3xl">
                    Let's Build Something{" "}
                    <span className="font-serif-accent text-gradient-accent">
                      Amazing
                    </span>{" "}
                    Together
                  </h3>

                  <p className="mt-5 text-base leading-relaxed text-muted">
                    Feel free to contact me for collaborations, freelance
                    projects, or just to say hello. I'm always open to
                    discussing new ideas and opportunities.
                  </p>

                  <div className="mt-8 space-y-3.5">
                    <a
                      href={`mailto:${contact.email}`}
                      className="group flex items-center gap-4 rounded-2xl border border-line-soft bg-navy/50 p-4 transition-all duration-300 hover:border-accent/25 hover:bg-navy/70"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-accent transition-colors duration-300 group-hover:bg-teal/25">
                        <EnvelopeSimpleIcon size={20} weight="bold" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-subtle">
                          Email Me
                        </span>
                        <span className="mt-0.5 block text-sm text-muted">
                          {contact.email}
                        </span>
                      </span>
                    </a>

                    <a
                      href={contact.whatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-line-soft bg-navy/50 p-4 transition-all duration-300 hover:border-accent/25 hover:bg-navy/70"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-accent transition-colors duration-300 group-hover:bg-teal/25">
                        <WhatsappLogoIcon size={20} weight="bold" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-subtle">
                          WhatsApp
                        </span>
                        <span className="mt-0.5 block text-sm text-muted">
                          Fastest way to reach me
                        </span>
                      </span>
                    </a>

                    <div className="flex items-center gap-4 rounded-2xl border border-line-soft bg-navy/50 p-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-accent">
                        <UserIcon size={20} weight="bold" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-subtle">
                          Availability
                        </span>
                        <span className="mt-0.5 block text-sm text-muted">
                          Open for freelance projects
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@gmail.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Write your message..."
                      className={`${inputClass} resize-none`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-teal px-6 py-4 text-base font-semibold text-subtle transition-all duration-300 hover:bg-teal-deep hover:shadow-glow-soft"
                  >
                    Send Message
                    <PaperPlaneTiltIcon
                      size={18}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  </button>

                  {status && (
                    <p className="rounded-xl border border-accent/20 bg-teal/10 px-4 py-3 text-center text-sm text-accent">
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;