import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import OrnamentalDivider from "../components/OrnamentalDivider";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const submitContact = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Kripaya sabhi fields fill karein");
      return;
    }
    try {
      await submitContact.mutateAsync(form);
      toast.success("Aapka message send ho gaya! Hum jald sampark karenge.");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      toast.error("Message send nahi hua. WhatsApp pe direct contact karein.");
    }
  };

  return (
    <div data-ocid="contact.page">
      {/* Hero */}
      <section
        className="relative py-20 text-center maroon-pattern"
        style={{ backgroundColor: "var(--maroon)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="font-display text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--gold)" }}
            >
              Sampark Karein
            </h1>
            <OrnamentalDivider color="var(--gold)" />
            <p
              className="font-body text-base"
              style={{ color: "rgba(243,230,209,0.85)" }}
            >
              Hum aapki seva ke liye hamesha taiyaar hain
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="heritage-pattern py-16 lg:py-24"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="font-display text-2xl font-bold mb-6"
                style={{ color: "var(--maroon)" }}
              >
                Hamara Pata & Sampark
              </h2>
              <OrnamentalDivider className="justify-start" />

              <div className="space-y-5 mb-8">
                <div
                  className="flex items-start gap-4 p-4 rounded-lg"
                  style={{
                    backgroundColor: "var(--cream-light)",
                    border: "1px solid rgba(212,176,97,0.3)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--maroon)" }}
                  >
                    <MapPin size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div
                      className="font-display font-semibold text-sm mb-1"
                      style={{ color: "var(--maroon)" }}
                    >
                      Hamaara Pata
                    </div>
                    <div
                      className="font-body text-sm"
                      style={{ color: "var(--dark-brown)" }}
                    >
                      Binda Wala Chowk,
                      <br />
                      Khurja-203131 (U.P.)
                    </div>
                    <div
                      className="mt-1 text-xs font-body font-bold tracking-wide"
                      style={{ color: "var(--maroon)" }}
                    >
                      ⚠️ WE HAVE NO BRANCH
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center gap-4 p-4 rounded-lg"
                  style={{
                    backgroundColor: "var(--cream-light)",
                    border: "1px solid rgba(212,176,97,0.3)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--maroon)" }}
                  >
                    <Phone size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div
                      className="font-display font-semibold text-sm mb-1"
                      style={{ color: "var(--maroon)" }}
                    >
                      Phone
                    </div>
                    <a
                      href="tel:+919756605864"
                      className="font-body text-sm hover:underline"
                      style={{ color: "var(--dark-brown)" }}
                    >
                      +91-9756605864
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-center gap-4 p-4 rounded-lg"
                  style={{
                    backgroundColor: "var(--cream-light)",
                    border: "1px solid rgba(212,176,97,0.3)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle size={18} color="white" />
                  </div>
                  <div>
                    <div
                      className="font-display font-semibold text-sm mb-1"
                      style={{ color: "var(--maroon)" }}
                    >
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/919897905864"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm hover:underline"
                      style={{ color: "var(--dark-brown)" }}
                    >
                      +91-9897905864
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-center gap-4 p-4 rounded-lg"
                  style={{
                    backgroundColor: "var(--cream-light)",
                    border: "1px solid rgba(212,176,97,0.3)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--maroon)" }}
                  >
                    <Mail size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div
                      className="font-display font-semibold text-sm mb-1"
                      style={{ color: "var(--maroon)" }}
                    >
                      Email
                    </div>
                    <a
                      href="mailto:shivlalustad@gmail.com"
                      className="font-body text-sm hover:underline"
                      style={{ color: "var(--dark-brown)" }}
                    >
                      shivlalustad@gmail.com
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-center gap-4 p-4 rounded-lg"
                  style={{
                    backgroundColor: "var(--cream-light)",
                    border: "1px solid rgba(212,176,97,0.3)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                    }}
                  >
                    <Instagram size={18} color="white" />
                  </div>
                  <div>
                    <div
                      className="font-display font-semibold text-sm mb-1"
                      style={{ color: "var(--maroon)" }}
                    >
                      Instagram
                    </div>
                    <a
                      href="https://www.instagram.com/shivlalustad?igsh=MW8wNnNxeHUzd3Y0YQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm hover:underline"
                      style={{ color: "var(--dark-brown)" }}
                    >
                      @shivlalustad
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: "2px solid rgba(212,176,97,0.4)" }}
              >
                <iframe
                  title="Binda Wala Chowk, Khurja"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.456!2d77.855!3d28.251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7b1c5b8ddddd%3A0x1234567890abcdef!2sBinda+Wala+Chowk%2C+Khurja%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="font-display text-2xl font-bold mb-6"
                style={{ color: "var(--maroon)" }}
              >
                Message Bhejein
              </h2>
              <OrnamentalDivider className="justify-start" />

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-ocid="contact.form"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-body font-semibold tracking-wide uppercase mb-1"
                    style={{ color: "var(--maroon)" }}
                  >
                    Aapka Naam *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Aapka poora naam"
                    className="w-full px-4 py-3 rounded-lg font-body text-sm outline-none transition-all"
                    style={{
                      backgroundColor: "var(--cream-light)",
                      border: "1px solid rgba(102,19,39,0.3)",
                      color: "var(--dark-brown)",
                    }}
                    data-ocid="contact.name.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-body font-semibold tracking-wide uppercase mb-1"
                    style={{ color: "var(--maroon)" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-lg font-body text-sm outline-none transition-all"
                    style={{
                      backgroundColor: "var(--cream-light)",
                      border: "1px solid rgba(102,19,39,0.3)",
                      color: "var(--dark-brown)",
                    }}
                    data-ocid="contact.phone.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-body font-semibold tracking-wide uppercase mb-1"
                    style={{ color: "var(--maroon)" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Aapka order ya sawal yahan likhein..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg font-body text-sm outline-none transition-all resize-none"
                    style={{
                      backgroundColor: "var(--cream-light)",
                      border: "1px solid rgba(102,19,39,0.3)",
                      color: "var(--dark-brown)",
                    }}
                    data-ocid="contact.message.textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitContact.isPending}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-display font-semibold text-sm tracking-widest uppercase transition-all hover:scale-[1.02] disabled:opacity-50"
                  style={{
                    backgroundColor: "var(--maroon)",
                    color: "var(--cream)",
                  }}
                  data-ocid="contact.submit_button"
                >
                  <Send size={16} />
                  {submitContact.isPending
                    ? "Bhej rahe hain..."
                    : "Message Bhejein"}
                </button>
              </form>

              {/* Or WhatsApp */}
              <div className="mt-6 text-center">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      backgroundColor: "rgba(102,19,39,0.2)",
                    }}
                  />
                  <span
                    className="text-xs font-body"
                    style={{ color: "rgba(102,19,39,0.6)" }}
                  >
                    Ya Seedha
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      backgroundColor: "rgba(102,19,39,0.2)",
                    }}
                  />
                </div>
                <a
                  href="https://wa.me/919897905864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-display font-semibold text-sm tracking-widest uppercase transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                  data-ocid="contact.whatsapp.button"
                >
                  <MessageCircle size={16} /> WhatsApp pe Contact Karein
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
