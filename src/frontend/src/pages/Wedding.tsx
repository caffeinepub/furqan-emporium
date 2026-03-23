import { CheckCircle, Gift, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import OrnamentalDivider from "../components/OrnamentalDivider";

const boxTypes = [
  {
    name: "Classic Bhaji Box",
    contents: "Khurchan, Kaju Katli, Motichoor Ladoo, Mawa Gujiya",
    note: "Wedding celebrations ke liye perfect",
  },
  {
    name: "Royal Bhaji Box",
    contents: "Khurchan, Ghewar, Kaju Katli, Ladoo, Gujiya, Bakery items",
    note: "Bade weddings aur VIP guests ke liye",
  },
  {
    name: "Custom Bhaji Box",
    contents: "Aapki pasand ke hisaab se koi bhi mithai combine karein",
    note: "Minimum order: 50 boxes",
  },
];

const features = [
  "100% Pure Desi Ghee se bani mithaiyaan",
  "Traditional Khurja packaging",
  "Bulk orders mein special discount",
  "Customized box design available",
  "Timely delivery guaranteed",
  "Hygienic preparation & packaging",
];

export default function Wedding() {
  const waLink = `https://wa.me/919897905864?text=${encodeURIComponent("Namaste, mujhe Wedding Bhaji Box ke baare mein jaankari chahiye. Quantity aur price bata dein.")}`;

  return (
    <div data-ocid="wedding.page">
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
            <div
              className="text-xs font-body font-semibold tracking-widest uppercase mb-2"
              style={{ color: "rgba(212,176,97,0.7)" }}
            >
              Celebrations ke Liye
            </div>
            <h1
              className="font-display text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--gold)" }}
            >
              Premium Wedding Bhaji Boxes
            </h1>
            <OrnamentalDivider color="var(--gold)" />
            <p
              className="font-body text-base"
              style={{ color: "rgba(243,230,209,0.85)" }}
            >
              Aapki shaadi ko aur meetha banayein — pure desi ghee ki khaas
              mithaiyaan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="heritage-pattern py-16 lg:py-24"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/assets/generated/wedding-bhaji-box.dim_800x600.jpg"
                alt="Wedding Bhaji Box"
                className="rounded-xl w-full object-cover shadow-xl"
                style={{ border: "2px solid rgba(212,176,97,0.4)" }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="font-display text-3xl font-bold mb-4"
                style={{ color: "var(--maroon)" }}
              >
                Khaas Uplabdh — Shaadi ke Liye
              </h2>
              <OrnamentalDivider className="justify-start" />
              <p
                className="font-body text-sm leading-relaxed mb-6"
                style={{ color: "var(--dark-brown)" }}
              >
                Shaadi, engagement, mundan, gruhapravesh — har khushi ke mauke
                par Pt. Shivlal Ustad ki mishthaan se celebration aur special ho
                jaati hai. Hamare premium Bhaji Boxes mein pure desi ghee se
                bani taaza mithaiyaan, sundar packaging mein milti hain.
              </p>
              <ul className="space-y-2 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle
                      size={16}
                      style={{ color: "var(--maroon)", flexShrink: 0 }}
                    />
                    <span
                      className="font-body text-sm"
                      style={{ color: "var(--dark-brown)" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                  data-ocid="wedding.whatsapp.button"
                >
                  <MessageCircle size={16} /> WhatsApp pe Order
                </a>
                <a
                  href="tel:+919756605864"
                  className="flex items-center gap-2 px-6 py-3 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--maroon)",
                    color: "var(--cream)",
                  }}
                  data-ocid="wedding.phone.button"
                >
                  <Phone size={16} /> Call Karein
                </a>
              </div>
            </motion.div>
          </div>

          {/* Box types */}
          <div className="text-center mb-10">
            <h2
              className="font-display text-3xl font-bold"
              style={{ color: "var(--maroon)" }}
            >
              Hamare Box Options
            </h2>
            <OrnamentalDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boxTypes.map((box, i) => (
              <motion.div
                key={box.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl text-center"
                style={{
                  backgroundColor: "var(--cream-light)",
                  border: "1px solid rgba(212,176,97,0.4)",
                  boxShadow: "0 2px 12px rgba(102,19,39,0.1)",
                }}
                data-ocid={`wedding.box.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "var(--maroon)",
                    border: "2px solid var(--gold)",
                  }}
                >
                  <Gift size={24} style={{ color: "var(--gold)" }} />
                </div>
                <h3
                  className="font-display font-semibold text-base mb-2"
                  style={{ color: "var(--maroon)" }}
                >
                  {box.name}
                </h3>
                <p
                  className="font-body text-xs mb-3"
                  style={{ color: "var(--dark-brown)" }}
                >
                  {box.contents}
                </p>
                <div
                  className="text-xs font-body px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(212,176,97,0.2)",
                    color: "var(--maroon)",
                    border: "1px solid rgba(212,176,97,0.4)",
                  }}
                >
                  {box.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 text-center maroon-pattern"
        style={{ backgroundColor: "var(--maroon-dark)" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="font-display text-2xl font-bold mb-2"
            style={{ color: "var(--gold)" }}
          >
            Abhi Booking Karein!
          </h2>
          <p
            className="font-body text-sm mb-6"
            style={{ color: "rgba(243,230,209,0.8)" }}
          >
            Bulk orders ke liye advance booking zaroori hai. WhatsApp par
            sampark karein.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: "#25D366", color: "white" }}
            data-ocid="wedding.cta.whatsapp.button"
          >
            <MessageCircle size={18} /> WhatsApp pe Contact Karein
          </a>
        </div>
      </section>
    </div>
  );
}
