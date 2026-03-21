import {
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  {
    id: 1,
    title: "Royal Dinner Sets",
    desc: "Exquisitely crafted bone china dinner sets with gold detailing, perfect for fine dining and cherished occasions.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    tag: "Bestseller",
  },
  {
    id: 2,
    title: "Elegant Tea & Lemon Sets",
    desc: "Premium ceramic tea sets with hand-painted motifs, bringing warmth and elegance to every tea ceremony.",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
    tag: "New Arrival",
  },
  {
    id: 3,
    title: "Crystal Flower Pots",
    desc: "Stunning crystal-clear glassware flower pots with intricate patterns, adding a luxurious touch to any space.",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
    tag: "Premium",
  },
  {
    id: 4,
    title: "Exclusive Gift Items",
    desc: "Curated luxury gift collections for weddings, corporate gifting, and festive celebrations – wrapped to perfection.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
    tag: "Gift Ready",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Anita Sharma",
    location: "Delhi",
    quote:
      "Absolutely stunning dinner sets! The quality is unmatched — I've ordered from Furqan Emporium three times and each piece is more beautiful than the last. Highly recommend for wedding gifts.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Agarwal",
    location: "Mumbai",
    quote:
      "We sourced wholesale crockery for our hotel chain from Furqan Emporium. The pricing, quality, and delivery were all impeccable. Truly a trusted name in Khurja ceramics.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Mehta",
    location: "Lucknow",
    quote:
      "The crystal flower pots I bought are a showstopper at every dinner party. Craftsmanship that speaks for itself. 30+ years of expertise really shows in every detail.",
    rating: 5,
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          // biome-ignore lint/suspicious/noArrayIndexKey: star rating dots have no stable id
          key={i}
          size={14}
          className={
            i < Math.floor(rating)
              ? "fill-gold text-gold"
              : "fill-gold/30 text-gold/30"
          }
          style={{
            color: "var(--gold)",
            fill:
              i < Math.floor(rating) ? "var(--gold)" : "rgba(212,175,55,0.3)",
          }}
        />
      ))}
    </div>
  );
}

function GoldDivider() {
  return <div className="gold-divider w-full my-0" />;
}

function GoldAccentLine() {
  return (
    <div className="flex justify-center mb-4">
      <div
        className="h-px w-16 bg-gold"
        style={{ backgroundColor: "var(--gold)" }}
      />
      <div
        className="w-2 h-2 rounded-full mx-2 -mt-[3px]"
        style={{ backgroundColor: "var(--gold)" }}
      />
      <div
        className="h-px w-16 bg-gold"
        style={{ backgroundColor: "var(--gold)" }}
      />
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo row */}
        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <a
            href="#home"
            className="flex flex-col leading-none"
            data-ocid="nav.link"
          >
            <span
              className="font-serif text-xl tracking-[0.15em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Furqan
            </span>
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-white/70">
              Emporium
            </span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            <span className="font-sans text-xs text-white/50 tracking-widest uppercase">
              Since 1995 &nbsp;·&nbsp; Wholesale & Retail
            </span>
          </div>
          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white/80 hover:text-gold transition-colors"
            style={{ "--tw-text-opacity": "1" } as React.CSSProperties}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center justify-center gap-8 py-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              data-ocid="nav.link"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "var(--charcoal-light, #3A3F42)" }}
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link text-sm"
                  onClick={() => setOpen(false)}
                  data-ocid="nav.link"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20,18,15,0.68)" }}
      />
      {/* Gold vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(20,18,10,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GoldAccentLine />
          <p
            className="font-sans text-xs tracking-[0.4em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Since 1995 &nbsp;·&nbsp; Khurja, India
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-5 gold-shimmer">
            Premium Dinner Sets,
            <br />
            Tea Sets &amp; Luxury Gifts
          </h1>
          <p className="font-sans text-base md:text-lg text-white/75 mb-8 max-w-2xl mx-auto tracking-wide">
            High Quality Ceramic &amp; Glassware from Khurja — Trusted by
            families and businesses across India for over 30 years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:brightness-110 hover:shadow-gold-lg"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--charcoal)",
                boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
              }}
              data-ocid="hero.primary_button"
            >
              Shop Collections <ChevronRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-sans text-sm font-semibold tracking-widest uppercase border transition-all duration-300 hover:bg-white/10"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
              data-ocid="hero.secondary_button"
            >
              Wholesale Enquiries
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Trust Badges ──────────────────────────────────────────────────────────────

function TrustBadges() {
  const badges = [
    { icon: "✦", label: "Since 1995", sub: "Established Heritage" },
    { icon: "🏆", label: "30+ Years", sub: "Excellence & Trust" },
    { icon: "⭐", label: "4.8 / 5 Stars", sub: "Customer Rating" },
    { icon: "🏪", label: "Wholesale & Retail", sub: "All Order Sizes" },
  ];

  return (
    <section className="bg-cream py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-3xl mb-2">{b.icon}</span>
            <span
              className="font-serif text-lg font-semibold"
              style={{ color: "var(--charcoal)" }}
            >
              {b.label}
            </span>
            <span
              className="font-sans text-xs tracking-wider uppercase mt-0.5"
              style={{ color: "var(--gold-dark)" }}
            >
              {b.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── Products ──────────────────────────────────────────────────────────────────

function Products() {
  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-sans text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              Our Collections
            </p>
            <h2
              className="font-serif text-3xl md:text-5xl font-semibold mb-4"
              style={{ color: "var(--charcoal)" }}
            >
              Product Collections
            </h2>
            <GoldAccentLine />
            <p className="font-sans text-sm text-gray-500 max-w-xl mx-auto mt-4">
              Every piece handpicked for quality, craftsmanship, and timeless
              elegance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              className="product-card bg-white rounded border overflow-hidden"
              style={{ borderColor: "rgba(212,175,55,0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              data-ocid={`products.item.${i + 1}`}
            >
              <div className="overflow-hidden h-52">
                <img
                  src={p.image}
                  alt={p.title}
                  className="card-image w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <span
                  className="font-sans text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full mb-3 inline-block"
                  style={{
                    backgroundColor: "rgba(212,175,55,0.12)",
                    color: "var(--gold-dark)",
                  }}
                >
                  {p.tag}
                </span>
                <h3
                  className="font-serif text-lg font-semibold mb-2"
                  style={{ color: "var(--charcoal)" }}
                >
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">
                  {p.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-sans text-xs font-semibold tracking-widest uppercase transition-colors hover:opacity-80"
                  style={{ color: "var(--gold)" }}
                  data-ocid={`products.item.${i + 1}`}
                >
                  Explore Now <ChevronRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
            alt="Khurja ceramic craftwork"
            className="w-full h-96 md:h-[480px] object-cover rounded shadow-xl"
          />
          <div
            className="absolute -bottom-4 -right-4 w-24 h-24 rounded flex flex-col items-center justify-center text-center shadow-lg"
            style={{ backgroundColor: "var(--gold)" }}
          >
            <span
              className="font-serif text-2xl font-bold"
              style={{ color: "var(--charcoal)" }}
            >
              30+
            </span>
            <span
              className="font-sans text-[10px] tracking-wider uppercase"
              style={{ color: "var(--charcoal)" }}
            >
              Years
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-sans text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Brand Story
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-6"
            style={{ color: "var(--charcoal)" }}
          >
            Crafted in Khurja.
            <br />
            Loved Across India.
          </h2>
          <GoldAccentLine />
          <div className="mt-5 space-y-4 font-sans text-sm text-gray-600 leading-relaxed">
            <p>
              Furqan Emporium was founded in 1995 in the heart of Khurja —
              India's ceramic capital, renowned for centuries for its exquisite
              pottery and glassware. Since day one, we've been committed to
              bringing the finest ceramic and glassware craftsmanship to homes
              and businesses across India.
            </p>
            <p>
              Our collection spans premium bone-china dinner sets, delicate tea
              sets, hand-painted lemon sets, sparkling crystal flower pots, and
              curated gift items. Every piece is sourced directly from master
              artisans in Khurja, ensuring uncompromising quality at both
              wholesale and retail scale.
            </p>
            <p>
              Over 30 years of serving thousands of families, hotels,
              restaurants, and corporate clients have made us a trusted name —
              rated 4.8/5 by our customers across India.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 font-sans text-xs font-semibold tracking-widest uppercase border transition-all duration-300 hover:bg-gold/10"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            data-ocid="about.secondary_button"
          >
            Enquire Now <ChevronRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="font-sans text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            What Our Customers Say
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-4">
            Client Reflections
          </h2>
          <GoldAccentLine />
          {/* Overall rating */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/5 rounded-full px-6 py-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={16}
                  style={{ fill: "var(--gold)", color: "var(--gold)" }}
                />
              ))}
            </div>
            <span
              className="font-serif text-2xl font-semibold"
              style={{ color: "var(--gold)" }}
            >
              4.8
            </span>
            <span className="font-sans text-xs text-white/60 tracking-wide">
              /5 Overall Rating
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className="p-7 rounded"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <StarRating rating={t.rating} />
              <p className="font-sans text-sm text-white/75 leading-relaxed mt-4 mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  className="font-serif text-base font-semibold"
                  style={{ color: "var(--gold)" }}
                >
                  {t.name}
                </p>
                <p className="font-sans text-xs text-white/50 tracking-wide">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", phone: "", message: "" });
  }

  return (
    <section id="contact" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="font-sans text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Find Us
          </p>
          <h2
            className="font-serif text-3xl md:text-5xl font-semibold mb-4"
            style={{ color: "var(--charcoal)" }}
          >
            Visit Us
          </h2>
          <GoldAccentLine />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map */}
          <div className="md:col-span-1">
            <iframe
              src="https://maps.google.com/maps?q=Refahe+Aam+Inter+College,+Khurja&output=embed"
              width="100%"
              height="360"
              style={{ border: "none", borderRadius: "8px" }}
              loading="lazy"
              title="Furqan Emporium Location"
              allowFullScreen
            />
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-6">
            <div>
              <h3
                className="font-serif text-xl font-semibold mb-4"
                style={{ color: "var(--charcoal)" }}
              >
                Contact Details
              </h3>
              <div className="space-y-4 font-sans text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <Phone
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--gold)" }}
                  />
                  <div>
                    <p
                      className="font-semibold text-charcoal"
                      style={{ color: "var(--charcoal)" }}
                    >
                      Mohammad Furqan
                    </p>
                    <a
                      href="tel:+919837205395"
                      className="hover:underline transition-colors"
                      style={{ color: "var(--gold-dark)" }}
                      data-ocid="contact.link"
                    >
                      +91-9837205395
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--gold)" }}
                  />
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: "var(--charcoal)" }}
                    >
                      Mohammad Faizan
                    </p>
                    <a
                      href="tel:+919997712287"
                      className="hover:underline transition-colors"
                      style={{ color: "var(--gold-dark)" }}
                      data-ocid="contact.link"
                    >
                      +91-9997712287
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--gold)" }}
                  />
                  <p>
                    Near Refahe Aam Inter College,
                    <br />
                    Khurja, Bulandshahr – 203131 (U.P.)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--gold)" }}
                  />
                  <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--gold)" }}
                  />
                  <p>Wholesale &amp; Retail Orders Welcome</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div>
            <h3
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "var(--charcoal)" }}
            >
              Send an Enquiry
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.panel"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-sans text-xs tracking-wider uppercase mb-1 text-gray-500"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, name: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 font-sans text-sm border bg-white focus:outline-none transition-colors"
                  style={{
                    borderColor: "rgba(212,175,55,0.4)",
                    borderRadius: "4px",
                  }}
                  placeholder="e.g. Rajesh Kumar"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block font-sans text-xs tracking-wider uppercase mb-1 text-gray-500"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 font-sans text-sm border bg-white focus:outline-none transition-colors"
                  style={{
                    borderColor: "rgba(212,175,55,0.4)",
                    borderRadius: "4px",
                  }}
                  placeholder="+91 XXXXX XXXXX"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-sans text-xs tracking-wider uppercase mb-1 text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, message: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 font-sans text-sm border bg-white focus:outline-none transition-colors resize-none"
                  style={{
                    borderColor: "rgba(212,175,55,0.4)",
                    borderRadius: "4px",
                  }}
                  placeholder="Tell us about your order requirements..."
                  data-ocid="contact.textarea"
                />
              </div>
              {submitted ? (
                <p
                  className="font-sans text-sm font-semibold tracking-wide text-center py-3"
                  style={{ color: "var(--gold)" }}
                  data-ocid="contact.success_state"
                >
                  ✓ Enquiry sent! We'll contact you shortly.
                </p>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 font-sans text-sm font-semibold tracking-widest uppercase transition-all hover:brightness-110"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "var(--charcoal)",
                    borderRadius: "4px",
                  }}
                  data-ocid="contact.submit_button"
                >
                  Send Enquiry
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ backgroundColor: "var(--charcoal)" }}
      className="pt-14 pb-6 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <p
              className="font-serif text-2xl tracking-[0.15em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Furqan Emporium
            </p>
            <p className="font-sans text-xs tracking-widest uppercase text-white/50 mt-1 mb-4">
              Wholesale & Retailer
            </p>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xs">
              Premium Ceramic & Glassware from Khurja, India. Trusted by
              thousands since 1995.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://wa.me/919837205395"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 font-sans text-xs font-semibold tracking-wider uppercase"
                style={{
                  backgroundColor: "#25D366",
                  color: "#fff",
                  borderRadius: "4px",
                }}
              >
                <WhatsAppIcon size={14} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Quick Links
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <p
              className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Contact
            </p>
            <div className="space-y-2 font-sans text-sm text-white/60">
              <a
                href="tel:+919837205395"
                className="flex items-center gap-2 hover:text-white transition-colors"
                data-ocid="footer.link"
              >
                <Phone size={13} style={{ color: "var(--gold)" }} />{" "}
                +91-9837205395
              </a>
              <a
                href="tel:+919997712287"
                className="flex items-center gap-2 hover:text-white transition-colors"
                data-ocid="footer.link"
              >
                <Phone size={13} style={{ color: "var(--gold)" }} />{" "}
                +91-9997712287
              </a>
              <p className="flex items-start gap-2">
                <MapPin
                  size={13}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--gold)" }}
                />
                Khurja, Bulandshahr – 203131 (U.P.)
              </p>
            </div>
          </div>
        </div>

        <GoldDivider />

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/40">
            © {year} Furqan Emporium. All Rights Reserved.
          </p>
          <p className="font-sans text-xs text-white/30">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── WhatsApp Button ────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WhatsAppFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div
          className="font-sans text-xs text-white px-3 py-1.5 rounded whitespace-nowrap shadow-lg"
          style={{ backgroundColor: "var(--charcoal)" }}
        >
          Chat on WhatsApp
        </div>
      </div>
      <a
        href="https://wa.me/919837205395"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366", color: "#fff" }}
        aria-label="Chat on WhatsApp"
        data-ocid="whatsapp.button"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <GoldDivider />
        <TrustBadges />
        <GoldDivider />
        <Products />
        <GoldDivider />
        <About />
        <GoldDivider />
        <Testimonials />
        <GoldDivider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
