import { Award, Clock, Heart, Star } from "lucide-react";
import { motion } from "motion/react";
import OrnamentalDivider from "../components/OrnamentalDivider";

const milestones = [
  {
    year: "1908",
    title: "Shuruaat",
    desc: "Pt. Shivlal ji ne Khurja ke Binda Wala Chowk mein pehli mishthaan ki dukaan kholee.",
  },
  {
    year: "1940s",
    title: "Vistar",
    desc: "Khurchan ki recipe ne poore Khurja aur Bulandshahr mein shaurat hasil ki.",
  },
  {
    year: "1980s",
    title: "Nai Peedhi",
    desc: "Doosri peedhi ne dukaan sambhaali aur traditional recipes ko aur behtar kiya.",
  },
  {
    year: "2000s",
    title: "Modern Era",
    desc: "Wedding Bhaji boxes aur bulk orders mein expansion. Puri U.P. mein demand.",
  },
  {
    year: "2024",
    title: "115+ Saal",
    desc: "Aaj bhi wohi purana swad, wohi vishwas, wohi desi ghee ki khushboo.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Pyaar se Bani",
    desc: "Har mithai mein hamaara pyaar aur mehnat shamil hai.",
  },
  {
    icon: Award,
    title: "100% Pure Desi Ghee",
    desc: "Koi milawat nahi, koi shortcuts nahi — sirf asli desi ghee.",
  },
  {
    icon: Star,
    title: "Traditional Recipes",
    desc: "1908 se chali aayi recipes, jo generation to generation pass hoti hain.",
  },
  {
    icon: Clock,
    title: "Fresh & Hygienic",
    desc: "Roz subah taaza mithai banayi jaati hai. Freshness guaranteed.",
  },
];

export default function About() {
  return (
    <div data-ocid="about.page">
      {/* Page hero */}
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
              Hamare Baare Mein
            </div>
            <h1
              className="font-display text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--gold)" }}
            >
              Humari Kahani
            </h1>
            <OrnamentalDivider color="var(--gold)" />
            <p
              className="font-body text-base"
              style={{ color: "rgba(243,230,209,0.85)" }}
            >
              115+ saal ki parampara, ek hi jagah, ek hi swad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section
        className="heritage-pattern py-16 lg:py-24"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/assets/generated/hero-khurchan.dim_1400x600.jpg"
                alt="Traditional Sweets"
                className="rounded-xl w-full object-cover shadow-xl"
                style={{
                  maxHeight: "420px",
                  border: "2px solid rgba(212,176,97,0.4)",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="text-xs font-body font-semibold tracking-widest uppercase mb-2"
                style={{ color: "var(--maroon)" }}
              >
                1908 se Aaj Tak
              </div>
              <h2
                className="font-display text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "var(--maroon)" }}
              >
                115+ Saal Ki Sweet Parampara
              </h2>
              <OrnamentalDivider className="justify-start" />
              <div
                className="space-y-4 font-body text-sm leading-relaxed"
                style={{ color: "var(--dark-brown)" }}
              >
                <p>
                  Saan 1908 mein, jab Khurja ek chhota sa kasba tha, Pt. Shivlal
                  ji ne ek sapna dekha — ek aisi dukaan jo log sirf mithai
                  khaane nahi, balki ek yadgaar anubhav lene aayein.
                </p>
                <p>
                  Unki khaas recipe thi <strong>Khurchan</strong> — ek aisi
                  mithai jo pure desi ghee mein dudh ko ghante ghante pakaa kar
                  banayi jaati thi. Is mithai ki khushboo aaj bhi Khurja ki
                  pehchaan hai.
                </p>
                <p>
                  Poori duniya mein <strong>Khurja Khurchan</strong> ki shaurat
                  hai, aur us shaurat ka ek aham hissa hai Pt. Shivlal Ustad ji
                  ka naam. Aaj 115+ saal baad bhi, hum wahi traditional methods
                  use karte hain, wahi desi ghee, wahi mehnat.
                </p>
                <p>
                  Hamare paas ek hi dukaan hai — Binda Wala Chowk, Khurja. Koi
                  branch nahi, koi franchise nahi. Sirf ek jagah, sirf asli
                  swad.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{ backgroundColor: "var(--cream-light)" }}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="font-display text-3xl font-bold"
              style={{ color: "var(--maroon)" }}
            >
              Hamaara Safar
            </h2>
            <OrnamentalDivider />
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div
                  className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center font-display font-bold text-sm"
                  style={{
                    backgroundColor: "var(--maroon)",
                    color: "var(--gold)",
                    border: "2px solid var(--gold)",
                  }}
                >
                  {m.year}
                </div>
                <div
                  className="flex-1 p-4 rounded-lg"
                  style={{
                    backgroundColor: "var(--cream)",
                    border: "1px solid rgba(212,176,97,0.3)",
                  }}
                >
                  <h3
                    className="font-display font-semibold text-base mb-1"
                    style={{ color: "var(--maroon)" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="font-body text-sm"
                    style={{ color: "var(--dark-brown)" }}
                  >
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="heritage-pattern py-16"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="font-display text-3xl font-bold"
              style={{ color: "var(--maroon)" }}
            >
              Hamare Mool Mulya
            </h2>
            <OrnamentalDivider />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl"
                style={{
                  backgroundColor: "var(--cream-light)",
                  border: "1px solid rgba(212,176,97,0.3)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "var(--maroon)",
                    border: "2px solid var(--gold)",
                  }}
                >
                  <v.icon size={24} style={{ color: "var(--gold)" }} />
                </div>
                <h3
                  className="font-display font-semibold text-sm mb-2"
                  style={{ color: "var(--maroon)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="font-body text-xs leading-relaxed"
                  style={{ color: "var(--dark-brown)" }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
