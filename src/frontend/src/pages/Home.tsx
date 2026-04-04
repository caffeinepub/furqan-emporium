import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useNavigation } from "../context/NavigationContext";
import { useFadeInUp } from "../hooks/useFadeInUp";

const WHATSAPP_ORDER =
  "https://wa.me/918979369843?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B6%E0%A4%BE%E0%A4%B9%E0%A4%9C%E0%A5%80%20%E0%A4%A1%E0%A5%87%E0%A4%AF%E0%A4%B0%E0%A5%80%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A5%87%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%BF%E0%A4%AF%E0%A4%AE%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%A1%E0%A4%95%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B8%20(A2%20Ghee%20%26%20Sweets)%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%94%E0%A4%B0%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%20%E0%A4%94%E0%A4%B0%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%91%E0%A4%B0%E0%A5%8D%E0%A4%A1%E0%A4%B0%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4";

const products = [
  {
    name: "Fresh Milk",
    desc: "Farm-fresh A2 milk, rich in nutrients and natural goodness. Delivered daily.",
    img: "/assets/generated/product-fresh-milk.dim_800x800.jpg",
  },
  {
    name: "Pure A2 Ghee",
    desc: "Handcrafted using the ancient Bilona method. Golden, aromatic, and pure.",
    img: "/assets/generated/product-a2-ghee.dim_800x800.jpg",
  },
  {
    name: "Mawa Sweets",
    desc: "Traditional khurchan, barfi, and peda — made with pure desi ghee.",
    img: "/assets/generated/product-mawa-sweets.dim_800x800.jpg",
  },
  {
    name: "Homestyle Meals",
    desc: "Wholesome dal makhani, fresh rotis, and hearty meals just like home.",
    img: "/assets/generated/product-homestyle-meals.dim_800x800.jpg",
  },
];

function TrustBar() {
  const ref = useFadeInUp<HTMLElement>();
  return (
    <section
      ref={ref}
      className="fade-in-up"
      style={{ backgroundColor: "var(--charcoal)" }}
      data-ocid="home.trust.section"
    >
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            {
              icon: "✦",
              title: "Pure A2 Quality",
              sub: "100% authentic A2 cow milk",
            },
            {
              icon: "✦",
              title: "Authentic Bilona Method",
              sub: "Ancient hand-churned process",
            },
            {
              icon: "✦",
              title: "FSSAI Certified",
              sub: "Food safety guaranteed",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center text-center px-8 py-6"
            >
              {i > 0 && (
                <div
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, var(--gold-start), transparent)",
                  }}
                />
              )}
              <div
                className="text-2xl mb-3"
                style={{ color: "var(--gold-start)" }}
              >
                {item.icon}
              </div>
              <h3
                className="font-body font-600 text-sm tracking-widest uppercase mb-1"
                style={{ color: "var(--cream)" }}
              >
                {item.title}
              </h3>
              <p
                className="font-body text-xs"
                style={{ color: "rgba(245,245,220,0.55)" }}
              >
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeritageSplitScreen() {
  const leftRef = useFadeInUp<HTMLDivElement>();
  const rightRef = useFadeInUp<HTMLDivElement>();
  return (
    <section
      className="flex flex-col lg:flex-row min-h-[480px]"
      data-ocid="home.heritage.section"
    >
      {/* Left: Dark */}
      <div
        ref={leftRef}
        className="fade-in-up flex-1 flex flex-col justify-center px-10 lg:px-16 py-16"
        style={{ backgroundColor: "var(--charcoal)" }}
      >
        <span
          className="font-body text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "var(--gold-start)" }}
        >
          The Origin
        </span>
        <h2
          className="font-display text-3xl lg:text-4xl mb-2 pb-3 border-b-2 border-gold inline-block"
          style={{
            color: "var(--cream)",
            borderImage:
              "linear-gradient(135deg, var(--gold-start), var(--gold-end)) 1",
          }}
        >
          A Legacy Born in 1957
        </h2>
        <div
          className="w-16 h-0.5 mb-6 mt-1"
          style={{
            background:
              "linear-gradient(135deg, var(--gold-start), var(--gold-end))",
          }}
        />
        <p
          className="font-body text-sm leading-relaxed max-w-md"
          style={{ color: "rgba(245,245,220,0.7)" }}
        >
          Late Shri Arjun Das Ahuja established Shahji Dairy in 1957 in Meerut.
          With a deep commitment to purity and the ancient Bilona method of
          churning A2 ghee, he built a legacy of trust that families across
          generations have cherished. Every drop of ghee carried the warmth of
          tradition and the promise of purity.
        </p>
      </div>

      {/* Right: Cream */}
      <div
        ref={rightRef}
        className="fade-in-up flex-1 flex flex-col justify-center px-10 lg:px-16 py-16"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <span
          className="font-body text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "var(--charcoal)" }}
        >
          The Evolution
        </span>
        <h2
          className="font-display text-3xl lg:text-4xl mb-2 pb-3 inline-block"
          style={{ color: "var(--charcoal)" }}
        >
          Salamat Shahji Dairy Today
        </h2>
        <div
          className="w-16 h-0.5 mb-6 mt-1"
          style={{ background: "var(--charcoal)" }}
        />
        <p
          className="font-body text-sm leading-relaxed max-w-md"
          style={{ color: "rgba(26,26,26,0.7)" }}
        >
          Continuing the legacy, Ibad Shah established Salamat Shahji Dairy —
          bringing authentic A2 ghee, fresh dairy products, mawa sweets, and
          wholesome homestyle meals to Delhi. Today, Shahji Dairy is more than a
          brand; it is a heritage that lives in every home it serves.
        </p>
      </div>
    </section>
  );
}

function ParallaxSection() {
  const ref = useFadeInUp<HTMLDivElement>();
  const { navigate } = useNavigation();
  return (
    <section
      className="parallax-bg relative"
      style={{
        backgroundImage:
          "url('/assets/generated/heritage-bilona-parallax.dim_1600x900.jpg')",
        minHeight: "480px",
      }}
      data-ocid="home.parallax.section"
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(26,26,26,0.75)" }}
      />
      <div className="relative z-10 flex items-center justify-center min-h-[480px] px-6">
        <div ref={ref} className="fade-in-up text-center max-w-2xl">
          <span
            className="font-body text-xs tracking-[0.25em] uppercase mb-4 block"
            style={{ color: "var(--gold-start)" }}
          >
            Our Process
          </span>
          <h2
            className="font-display text-3xl lg:text-4xl mb-6"
            style={{ color: "var(--cream)" }}
          >
            The Ancient Bilona Method
          </h2>
          <p
            className="font-body text-sm leading-relaxed mb-8"
            style={{ color: "rgba(245,245,220,0.8)" }}
          >
            We follow the traditional Bilona method — curd is churned by hand
            using a wooden churner, separating butter which is then slow-cooked
            to produce the purest A2 ghee. No shortcuts. No compromises. Just
            purity as nature intended.
          </p>
          <button
            type="button"
            onClick={() => navigate("about")}
            className="btn-gold-outline px-8 py-3.5 rounded-full text-sm"
            data-ocid="home.discover_story.button"
          >
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
}

function SignatureMenu() {
  const ref = useFadeInUp<HTMLElement>();
  return (
    <section
      ref={ref}
      className="fade-in-up py-20 lg:py-28"
      style={{ backgroundColor: "var(--charcoal)" }}
      data-ocid="home.menu.section"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl lg:text-4xl mb-2 text-gold-gradient">
            Signature Dishes
          </h2>
          <div className="gold-divider my-4" />
          <p
            className="font-body text-sm tracking-widest uppercase"
            style={{ color: "var(--gold-start)" }}
          >
            Crafted with Pure Desi Ghee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              img: "/assets/generated/dish-butter-paneer.dim_800x600.jpg",
              title: "Special Butter Paneer Masala",
              desc: "Rich, creamy tomato gravy with fresh paneer cubes, finished with pure A2 ghee for an unmatched depth of flavor.",
              tag: "Chef's Special",
              ocid: "home.menu.item.1",
            },
            {
              img: "/assets/generated/dish-matar-paneer.dim_800x600.jpg",
              title: "Creamy Matar Paneer",
              desc: "Fresh green peas and paneer in a golden, aromatic gravy slow-cooked with authentic spices and pure desi ghee.",
              tag: "House Favourite",
              ocid: "home.menu.item.2",
            },
          ].map((dish) => (
            <motion.div
              key={dish.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="menu-card rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#242424" }}
              data-ocid={dish.ocid}
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={dish.img}
                  alt={dish.title}
                  className="menu-card-img w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span
                  className="font-body text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-3 inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--gold-start), var(--gold-end))",
                    color: "var(--charcoal)",
                    fontWeight: 600,
                  }}
                >
                  {dish.tag}
                </span>
                <h3
                  className="font-display text-xl mt-2 mb-2"
                  style={{ color: "var(--cream)" }}
                >
                  {dish.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(245,245,220,0.65)" }}
                >
                  {dish.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCategories() {
  const ref = useFadeInUp<HTMLElement>();
  return (
    <section
      ref={ref}
      className="fade-in-up py-20 lg:py-28"
      style={{ backgroundColor: "var(--cream)" }}
      data-ocid="home.products.section"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="font-display text-3xl lg:text-4xl mb-3"
            style={{ color: "var(--charcoal)" }}
          >
            Our Premium Products
          </h2>
          <div
            className="w-20 h-0.5 mx-auto"
            style={{
              background:
                "linear-gradient(135deg, var(--gold-start), var(--gold-end))",
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="floating-card bg-white rounded-2xl shadow-xl overflow-hidden"
              data-ocid={`home.products.item.${i + 1}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3
                  className="font-display text-lg mb-1"
                  style={{ color: "var(--charcoal)" }}
                >
                  {p.name}
                </h3>
                <p
                  className="font-body text-xs leading-relaxed mb-4"
                  style={{ color: "rgba(26,26,26,0.6)" }}
                >
                  {p.desc}
                </p>
                <a
                  href={WHATSAPP_ORDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold block text-center py-2.5 rounded-full text-xs tracking-widest uppercase"
                  data-ocid={`home.products.order.button.${i + 1}`}
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutTeaser() {
  const ref = useFadeInUp<HTMLElement>();
  const { navigate } = useNavigation();
  return (
    <section
      ref={ref}
      className="fade-in-up py-20 lg:py-28"
      style={{ backgroundColor: "var(--charcoal)" }}
      data-ocid="home.about_teaser.section"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-gold-gradient">
              67 Years of Pure Tradition
            </h2>
          </div>
          <div className="flex-1">
            <p
              className="font-body text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,245,220,0.7)" }}
            >
              In 1957, a dream was born in Meerut. Shri Arjun Das Ahuja's vision
              of pure, unadulterated dairy has transcended generations — from
              the ancient Bilona churning of A2 ghee to the warm, home-cooked
              meals of Ibad Shah's Salamat Shahji Dairy. Every product carries
              67 years of family trust and an unwavering promise of quality.
            </p>
            <button
              type="button"
              onClick={() => navigate("about")}
              className="btn-gold px-8 py-3.5 rounded-full text-xs tracking-widest uppercase"
              data-ocid="home.about_teaser.button"
            >
              Read Our Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <main data-ocid="home.page">
      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center"
        style={{ paddingTop: "72px" }}
      >
        <img
          src="/assets/generated/hero-ghee-pour.dim_1600x900.jpg"
          alt="Pure A2 Ghee"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(26,26,26,0.6)" }}
        />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p
              className="font-body text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--gold-start)" }}
            >
              Pure A2 Dairy • Est. 1957
            </p>

            <div
              className="w-20 h-px mx-auto mb-6"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--gold-start), transparent)",
              }}
            />

            <h1
              className="font-display font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                color: "var(--cream)",
              }}
            >
              Shahji Dairy: A Legacy of
              <br />
              <span className="gold-shimmer">Purity Since 1957</span>
            </h1>

            <p
              className="font-body text-base lg:text-lg leading-relaxed mb-10"
              style={{ color: "rgba(245,245,220,0.8)" }}
            >
              Founded by Late Shri Arjun Das Ahuja. From the roots of Meerut to
              the heart of Delhi.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate("about")}
                className="btn-gold px-9 py-4 rounded-full text-sm tracking-widest uppercase"
                data-ocid="home.hero.primary_button"
              >
                Explore Our Heritage
              </button>
              <a
                href="https://wa.me/918979369843"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline px-9 py-4 rounded-full text-sm tracking-widest uppercase"
                data-ocid="home.hero.whatsapp_button"
              >
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-bounce">
          <ChevronDown size={28} style={{ color: "var(--gold-start)" }} />
        </div>
      </section>

      <TrustBar />
      <HeritageSplitScreen />
      <ParallaxSection />
      <SignatureMenu />
      <ProductCategories />
      <AboutTeaser />
    </main>
  );
}
