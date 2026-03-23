import {
  Award,
  ChevronRight,
  Clock,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import OrnamentalDivider from "../components/OrnamentalDivider";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "../context/NavigationContext";

const featuredProducts = [
  {
    name: "Khurja Special Khurchan",
    price: "₹650/kg",
    image: "/assets/generated/product-khurchan.dim_600x500.jpg",
  },
  {
    name: "Mawa Ghewar",
    price: "₹750/kg",
    image: "/assets/generated/product-ghewar.dim_600x500.jpg",
    note: "24 ghante ke andar consume karein best taste ke liye",
  },
  {
    name: "Kaju Katli",
    price: "₹1000/kg",
    image: "/assets/generated/product-kaju-katli.dim_600x500.jpg",
  },
];

const trustBadges = [
  { icon: Clock, label: "115+ Saal Ki Parampara", sub: "Since 1908" },
  { icon: Star, label: "100% Pure Desi Ghee", sub: "Koi milawat nahi" },
  { icon: Award, label: "Khurja Ki Shaan", sub: "Sabse purani dukaan" },
  { icon: ShieldCheck, label: "Hygienic Preparation", sub: "Swachh aur fresh" },
];

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-[85vh] flex items-center"
        style={{ overflow: "hidden" }}
        data-ocid="home.page"
      >
        <img
          src="/assets/generated/hero-khurchan.dim_1400x600.jpg"
          alt="Khurja Special Khurchan"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,26,20,0.88) 0%, rgba(102,19,39,0.7) 50%, rgba(42,26,20,0.5) 100%)",
          }}
        />
        {/* Paisley pattern overlay */}
        <div className="absolute inset-0 maroon-pattern opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div
              className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase"
              style={{
                backgroundColor: "rgba(212,176,97,0.2)",
                border: "1px solid var(--gold)",
                color: "var(--gold)",
              }}
            >
              Pure Desi Ghee Preparation · Since 1908
            </div>

            <h1
              className="font-display font-bold leading-tight mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--cream)",
              }}
            >
              115+ Years of{" "}
              <span className="gold-shimmer">Sweet Tradition</span>
              <br />
              in Every Bite
            </h1>

            <p
              className="font-body text-base lg:text-lg mb-8 leading-relaxed"
              style={{ color: "rgba(243,230,209,0.85)" }}
            >
              Made with 100% Pure Desi Ghee. Experience the Taste of Khurja's
              Finest Legacy. Hamare haath se bani mithaiyaan aapke ghar mein
              meethaas laayein.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate("products")}
                className="px-8 py-3.5 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:shadow-gold hover:scale-105"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--dark-brown)",
                }}
                data-ocid="home.products.primary_button"
              >
                Hamare Products Dekhein
              </button>
              <button
                type="button"
                onClick={() => navigate("about")}
                className="px-8 py-3.5 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:bg-white hover:bg-opacity-10"
                style={{
                  border: "1.5px solid var(--gold)",
                  color: "var(--gold)",
                }}
                data-ocid="home.about.secondary_button"
              >
                Humari Kahani
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 0 ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  i === 0 ? "var(--gold)" : "rgba(212,176,97,0.4)",
              }}
            />
          ))}
        </div>
      </section>

      {/* TRUST BADGES */}
      <section
        style={{
          backgroundColor: "var(--maroon)",
          borderTop: "2px solid var(--gold)",
        }}
        className="maroon-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(212,176,97,0.2)",
                    border: "1px solid rgba(212,176,97,0.4)",
                  }}
                >
                  <badge.icon size={18} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <div
                    className="font-body font-semibold text-sm"
                    style={{ color: "var(--cream)" }}
                  >
                    {badge.label}
                  </div>
                  <div
                    className="text-xs font-body"
                    style={{ color: "rgba(243,230,209,0.6)" }}
                  >
                    {badge.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        className="heritage-pattern py-16 lg:py-24"
        style={{ backgroundColor: "var(--cream)" }}
        data-ocid="home.products.section"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div
              className="text-xs font-body font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--maroon)" }}
            >
              Humari Mishthaan
            </div>
            <h2
              className="font-display text-3xl lg:text-4xl font-bold mb-3"
              style={{ color: "var(--maroon)" }}
            >
              Curated Indulgence
            </h2>
            <OrnamentalDivider />
            <p
              className="font-body text-base max-w-xl mx-auto"
              style={{ color: "var(--dark-brown)" }}
            >
              Made with 100% Pure Desi Ghee. Experience the Taste of Khurja's
              Finest Legacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProducts.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProductCard {...p} index={i + 1} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("products")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:shadow-maroon hover:scale-105"
              style={{
                backgroundColor: "var(--maroon)",
                color: "var(--cream)",
              }}
              data-ocid="home.all_products.button"
            >
              Saari Mithaiyaan Dekhein <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* WEDDING COLLECTION */}
      <section
        className="py-16 lg:py-24 maroon-pattern"
        style={{ backgroundColor: "var(--maroon-dark)" }}
        data-ocid="home.wedding.section"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2
              className="font-display text-3xl lg:text-4xl font-bold"
              style={{ color: "var(--gold)" }}
            >
              The Wedding Collection
            </h2>
            <OrnamentalDivider color="var(--gold)" />
          </motion.div>

          <div
            className="rounded-xl overflow-hidden flex flex-col lg:flex-row"
            style={{
              border: "1px solid rgba(212,176,97,0.3)",
              backgroundColor: "rgba(42,26,20,0.4)",
            }}
          >
            <div className="lg:w-1/2">
              <img
                src="/assets/generated/wedding-bhaji-box.dim_800x600.jpg"
                alt="Premium Wedding Bhaji Box"
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div
                className="text-xs font-body font-semibold tracking-widest uppercase mb-2"
                style={{ color: "rgba(212,176,97,0.7)" }}
              >
                Khaas Uplabdh
              </div>
              <h3
                className="font-display text-2xl lg:text-3xl font-bold mb-4"
                style={{ color: "var(--cream)" }}
              >
                Celebrate Weddings with Shivlal Ustad
              </h3>
              <p
                className="font-body text-sm leading-relaxed mb-6"
                style={{ color: "rgba(243,230,209,0.8)" }}
              >
                Aapki shaadi aur celebration ke liye premium Bhaji Boxes. Pure
                desi ghee ki mithaiyaan, traditional packaging, aur customized
                options available hain.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigate("wedding")}
                  className="px-6 py-3 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:shadow-gold hover:scale-105"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "var(--dark-brown)",
                  }}
                  data-ocid="home.wedding.primary_button"
                >
                  Explore Wedding Gifts
                </button>
                <a
                  href="https://wa.me/919897905864?text=Namaste%2C%20mujhe%20Wedding%20Bhaji%20Box%20ke%20baare%20mein%20jaankari%20chahiye."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:scale-105"
                  style={{
                    border: "1.5px solid var(--gold)",
                    color: "var(--gold)",
                  }}
                  data-ocid="home.wedding.whatsapp.button"
                >
                  <MessageCircle size={16} /> Customize Packs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section
        className="heritage-pattern py-16 lg:py-24"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="text-xs font-body font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--maroon)" }}
            >
              Hamare Baare Mein
            </div>
            <h2
              className="font-display text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "var(--maroon)" }}
            >
              Our Story
            </h2>
            <OrnamentalDivider />
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "var(--dark-brown)" }}
            >
              Saan 1908 mein, Pt. Shivlal ji ne Khurja mein ek choti si
              mishthaan ki dukaan shuru ki. Pure desi ghee se bani mithaiyaan,
              haath ki kaarigaree, aur pyaar se bani recipes — yahi hamaari
              pehchaan rahi hai.
            </p>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: "var(--dark-brown)" }}
            >
              Aaj, 115+ saal baad bhi, hum wahi parampara nibha rahe hain. Har
              mithai mein wohi purana swad, wohi mehnat, wohi vishwas.
            </p>
            <button
              type="button"
              onClick={() => navigate("about")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:scale-105"
              style={{
                backgroundColor: "var(--maroon)",
                color: "var(--cream)",
              }}
              data-ocid="home.about.button"
            >
              Poori Kahani Padhein <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        style={{ backgroundColor: "var(--gold)" }}
        className="py-12 text-center"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="font-display text-2xl lg:text-3xl font-bold mb-2"
            style={{ color: "var(--dark-brown)" }}
          >
            Aaj Hi Order Karein!
          </h2>
          <p
            className="font-body text-sm mb-6"
            style={{ color: "rgba(42,26,20,0.8)" }}
          >
            WhatsApp par contact karein ya seedha dukaan par aayein
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919897905864"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#25D366", color: "white" }}
              data-ocid="home.whatsapp.primary_button"
            >
              <MessageCircle size={18} /> WhatsApp par Karein
            </a>
            <button
              type="button"
              onClick={() => navigate("contact")}
              className="flex items-center gap-2 px-8 py-3.5 rounded font-display font-semibold text-sm tracking-widest uppercase transition-all hover:scale-105"
              style={{
                backgroundColor: "var(--dark-brown)",
                color: "var(--cream)",
              }}
              data-ocid="home.contact.button"
            >
              Contact Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
