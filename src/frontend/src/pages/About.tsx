import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigation } from "../context/NavigationContext";
import { useFadeInUp } from "../hooks/useFadeInUp";
import { useSubmitContactForm } from "../hooks/useQueries";

const timelineItems = [
  {
    year: "1957",
    title: "The Founding",
    desc: "Late Shri Arjun Das Ahuja establishes Shahji Dairy in Meerut with a simple mission: deliver pure, unadulterated dairy products to every household.",
  },
  {
    year: "1980s",
    title: "Growing Reputation",
    desc: "Shahji Dairy becomes synonymous with quality in Meerut. The Bilona method of handcrafted A2 ghee earns a loyal following across generations of families.",
  },
  {
    year: "2000s",
    title: "Expanding the Vision",
    desc: "The second generation carries forward the legacy with expanded product lines — from A2 ghee to fresh paneer, mawa, and wholesome homestyle meals.",
  },
  {
    year: "Today",
    title: "Salamat Shahji Dairy",
    desc: "Ibad Shah brings Shahji Dairy to Delhi under the Salamat banner. Authentic products, modern reach — the same uncompromising commitment to purity.",
  },
];

export default function About() {
  const headRef = useFadeInUp<HTMLDivElement>();
  const storyRef = useFadeInUp<HTMLDivElement>();
  const timelineRef = useFadeInUp<HTMLDivElement>();
  const contactRef = useFadeInUp<HTMLDivElement>();
  const { navigate } = useNavigation();
  const submitContact = useSubmitContactForm();

  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill all fields.");
      return;
    }
    try {
      await submitContact.mutateAsync(form);
      toast.success("Message sent! We will contact you shortly.");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      toast.error("Failed to send. Please try WhatsApp.");
    }
  }

  return (
    <main style={{ paddingTop: "72px" }} data-ocid="about.page">
      {/* Hero */}
      <section
        className="py-24 lg:py-32 text-center"
        style={{ backgroundColor: "var(--charcoal)" }}
      >
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--gold-start)" }}
          >
            Our Story
          </p>
          <h1
            className="font-display text-4xl lg:text-6xl mb-6"
            style={{ color: "var(--cream)" }}
          >
            Our Heritage
          </h1>
          <div className="gold-divider mb-6" />
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: "rgba(245,245,220,0.65)" }}
          >
            Since 1957, a story of purity, tradition, and an unwavering
            commitment to the ancient art of dairy.
          </p>
        </motion.div>
      </section>

      {/* Full Story */}
      <section className="py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div
          ref={storyRef}
          className="fade-in-up max-w-3xl mx-auto px-6 lg:px-8"
        >
          <h2
            className="font-display text-3xl mb-6"
            style={{ color: "var(--charcoal)" }}
          >
            The Shahji Dairy Story
          </h2>
          <div
            className="w-16 h-0.5 mb-8"
            style={{
              background:
                "linear-gradient(135deg, var(--gold-start), var(--gold-end))",
            }}
          />
          <div
            className="font-body text-sm leading-[2] space-y-5"
            style={{ color: "rgba(26,26,26,0.8)" }}
          >
            <p>
              In 1957, in the vibrant city of Meerut, a man named{" "}
              <strong>Late Shri Arjun Das Ahuja</strong> started something small
              — a dairy with big dreams. He believed that the quality of food
              shapes the quality of life. His A2 ghee, churned using the ancient
              Bilona method, became the gold standard of purity in his
              neighbourhood.
            </p>
            <p>
              The <strong>Bilona method</strong> is as old as civilization
              itself. Fresh A2 cow milk is cultured into curd overnight. The
              curd is then churned by hand using a traditional wooden mathani.
              The butter that floats to the top is carefully collected and
              slowly simmered over a gentle flame — until the impurities
              separate and what remains is liquid gold: pure A2 ghee.
            </p>
            <p>
              Decades passed. Shri Ahuja's legacy endured. His commitment to
              purity was inherited by the next generation, and then the next.
              Every family that opened a jar of Shahji Dairy ghee could taste
              the difference — the richness, the aroma, the grain that no
              commercial ghee could replicate.
            </p>
            <p>
              Today, <strong>Ibad Shah</strong> carries this torch forward under
              the banner of <strong>Salamat Shahji Dairy</strong> in Delhi. The
              product range has grown — fresh A2 milk, homestyle meals, mawa
              sweets — but the philosophy remains unchanged: no shortcuts, no
              additives, no compromises. Just purity as nature intended.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "var(--charcoal)" }}
      >
        <div
          ref={timelineRef}
          className="fade-in-up max-w-3xl mx-auto px-6 lg:px-8"
        >
          <h2 className="font-display text-3xl mb-4 text-center text-gold-gradient">
            Our Journey
          </h2>
          <div className="gold-divider mb-14" />

          <div className="relative">
            <div
              className="absolute left-4 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, var(--gold-start), var(--gold-end), transparent)",
              }}
            />
            <div className="space-y-12">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-8 pl-12 relative"
                  data-ocid={`about.timeline.item.${i + 1}`}
                >
                  <div
                    className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full -translate-x-1/2"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--gold-start), var(--gold-end))",
                    }}
                  />
                  <div>
                    <div
                      className="font-display text-lg mb-1"
                      style={{ color: "var(--gold-start)" }}
                    >
                      {item.year}
                    </div>
                    <h3
                      className="font-display text-xl mb-2"
                      style={{ color: "var(--cream)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "rgba(245,245,220,0.65)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div
          ref={contactRef}
          className="fade-in-up max-w-xl mx-auto px-6 lg:px-8"
        >
          <h2
            className="font-display text-3xl mb-3 text-center"
            style={{ color: "var(--charcoal)" }}
          >
            Get in Touch
          </h2>
          <div className="gold-divider mb-8" />

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-ocid="about.contact.form"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="font-body text-xs tracking-widest uppercase block mb-1.5"
                style={{ color: "var(--charcoal)" }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full px-4 py-3 rounded font-body text-sm"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(26,26,26,0.2)",
                  color: "var(--charcoal)",
                  outline: "none",
                }}
                placeholder="Your name"
                data-ocid="about.contact.input"
              />
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="font-body text-xs tracking-widest uppercase block mb-1.5"
                style={{ color: "var(--charcoal)" }}
              >
                Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                className="w-full px-4 py-3 rounded font-body text-sm"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(26,26,26,0.2)",
                  color: "var(--charcoal)",
                  outline: "none",
                }}
                placeholder="Your phone number"
                data-ocid="about.contact.input"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="font-body text-xs tracking-widest uppercase block mb-1.5"
                style={{ color: "var(--charcoal)" }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                className="w-full px-4 py-3 rounded font-body text-sm resize-none"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(26,26,26,0.2)",
                  color: "var(--charcoal)",
                  outline: "none",
                }}
                rows={4}
                placeholder="Your message"
                data-ocid="about.contact.textarea"
              />
            </div>
            <button
              type="submit"
              disabled={submitContact.isPending}
              className="btn-gold w-full py-4 rounded-full text-sm tracking-widest uppercase"
              data-ocid="about.contact.submit_button"
            >
              {submitContact.isPending ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p
              className="font-body text-xs mb-3"
              style={{ color: "rgba(26,26,26,0.5)" }}
            >
              Or reach us directly:
            </p>
            <a
              href="https://wa.me/918979369843"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold"
              style={{ color: "var(--gold-start)" }}
              data-ocid="about.whatsapp.button"
            >
              📱 WhatsApp: 089793 69843
            </a>
            <br />
            <a
              href="tel:+918979369874"
              className="font-body text-sm font-semibold mt-1 inline-block"
              style={{ color: "var(--gold-start)" }}
            >
              📞 Phone: 089793 69874
            </a>
          </div>
        </div>
      </section>

      {/* Back to home */}
      <section
        className="py-12 text-center"
        style={{ backgroundColor: "var(--charcoal)" }}
      >
        <button
          type="button"
          onClick={() => navigate("home")}
          className="btn-gold-outline px-8 py-3.5 rounded-full text-xs tracking-widest uppercase"
          data-ocid="about.home.button"
        >
          ← Back to Home
        </button>
      </section>
    </main>
  );
}
