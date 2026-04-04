import { motion } from "motion/react";
import { useFadeInUp } from "../hooks/useFadeInUp";

const WA_NUMBER = "918979369843";

function makeWhatsAppLink(itemName: string) {
  const msg = `नमस्ते शाहजी डेयरी, मुझे ${itemName} order karna hai. Please confirm availability and price.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const menuCategories = [
  {
    id: "dairy-beverages",
    title: "Signature Dairy & Beverages",
    icon: "🥛",
    bg: "var(--charcoal)",
    items: [
      {
        name: "Kheer",
        price: "₹50–₹66",
        unit: "per serving",
        badge: "⭐ Highly Recommended",
        badgeColor: "#d4af37",
      },
      {
        name: "Kesar Doodh (Milk Bottle)",
        price: "₹40–₹50",
        unit: "per bottle",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Kulhad Lassi",
        price: "₹35–₹40",
        unit: "",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Rabdi",
        price: "₹170",
        unit: "per serving (approx.)",
        badge: null,
        badgeColor: null,
      },
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Quick Bites",
    icon: "🍽️",
    bg: "#1e1e1e",
    items: [
      {
        name: "Kachori Sabji",
        price: "₹40",
        unit: "(4 pieces)",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Paneer Pakoda",
        price: "₹10",
        unit: "per piece",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Aloo Tikki",
        price: "₹25",
        unit: "",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Chola Bhatura",
        price: "₹40",
        unit: "",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Chowmein",
        price: "₹35",
        unit: "",
        badge: null,
        badgeColor: null,
      },
    ],
  },
  {
    id: "sweets-bulk",
    title: "Sweets & Bulk Items",
    icon: "🍬",
    bg: "var(--charcoal)",
    items: [
      {
        name: "Sada Bengali",
        price: "₹300",
        unit: "per kg",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Milk Cake",
        price: "₹350",
        unit: "per kg",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Fancy Bengali",
        price: "₹350",
        unit: "per kg",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Mawa Barfi",
        price: "₹330–₹400",
        unit: "per kg (approx.)",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Kaju Katli",
        price: "₹650",
        unit: "per kg (approx.)",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Habshi Halwa",
        price: "₹500",
        unit: "per kg",
        badge: "✦ Special Item",
        badgeColor: "#d4af37",
      },
    ],
  },
  {
    id: "raw-dairy-pantry",
    title: "Raw Dairy (Kachcha Doodh) & Pantry",
    icon: "🏺",
    bg: "#1e1e1e",
    items: [
      {
        name: "Raw Milk (Kachcha Doodh)",
        price: "₹60–₹70",
        unit: "per litre",
        badge: null,
        badgeColor: null,
        note: "Price may vary as per current market dairy rates",
      },
      {
        name: "Dahi (Curd)",
        price: "₹50",
        unit: "per kg (approx.)",
        badge: null,
        badgeColor: null,
      },
      {
        name: "Paneer",
        price: "₹300–₹400",
        unit: "per kg (approx.)",
        badge: null,
        badgeColor: null,
        note: "Fresh paneer based on local retail trends",
      },
      {
        name: "Ghee / Khoya",
        price: "Available In-Store",
        unit: "",
        badge: null,
        badgeColor: null,
        note: "Part of standard inventory",
      },
    ],
  },
];

type MenuItem = {
  name: string;
  price: string;
  unit: string;
  badge: string | null;
  badgeColor: string | null;
  note?: string;
};

function MenuCategory({
  category,
  index,
}: {
  category: (typeof menuCategories)[0];
  index: number;
}) {
  const ref = useFadeInUp<HTMLElement>();
  return (
    <section
      ref={ref}
      className="fade-in-up py-16 lg:py-20"
      style={{ backgroundColor: category.bg }}
      data-ocid={`menu.category.${category.id}`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Category header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{category.icon}</span>
              <span
                className="font-body text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--gold-start)" }}
              >
                Category {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h2
              className="font-display text-2xl lg:text-3xl mb-3"
              style={{ color: "var(--cream)" }}
            >
              {category.title}
            </h2>
            <div
              className="w-16 h-0.5"
              style={{
                background:
                  "linear-gradient(135deg, var(--gold-start), var(--gold-end))",
              }}
            />
          </motion.div>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {category.items.map((item: MenuItem, i: number) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-5 py-4 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: "rgba(245,245,220,0.04)",
                border: "1px solid rgba(212,175,55,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(212,175,55,0.35)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(212,175,55,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(212,175,55,0.1)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(245,245,220,0.04)";
              }}
            >
              {/* Left: name + badge + note */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <span
                    className="font-body font-medium text-sm"
                    style={{ color: "var(--cream)" }}
                  >
                    {item.name}
                  </span>
                  {item.badge && (
                    <span
                      className="font-body text-[10px] tracking-wide px-2 py-0.5 rounded-full font-semibold"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--gold-start), var(--gold-end))",
                        color: "var(--charcoal)",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                {item.note && (
                  <p
                    className="font-body text-[11px] mt-0.5"
                    style={{ color: "rgba(245,245,220,0.45)" }}
                  >
                    {item.note}
                  </p>
                )}
              </div>

              {/* Right: price + unit + WhatsApp button */}
              <div className="flex items-center gap-3 sm:flex-shrink-0">
                <div className="text-right">
                  <span
                    className="font-display text-base lg:text-lg"
                    style={{ color: "var(--gold-start)" }}
                  >
                    {item.price}
                  </span>
                  {item.unit && (
                    <p
                      className="font-body text-[11px] mt-0.5"
                      style={{ color: "rgba(245,245,220,0.5)" }}
                    >
                      {item.unit}
                    </p>
                  )}
                </div>

                {/* Per-item WhatsApp order button */}
                <a
                  href={makeWhatsAppLink(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    color: "#fff",
                    boxShadow: "0 2px 10px rgba(37,211,102,0.3)",
                  }}
                  data-ocid={`menu.item.whatsapp.${item.name.replace(/\s+/g, "_").toLowerCase()}`}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="WhatsApp"
                    role="img"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Menu() {
  const ref = useFadeInUp<HTMLElement>();
  const generalWhatsAppLink = makeWhatsAppLink("aapke products");
  return (
    <div data-ocid="menu.page">
      {/* Page hero */}
      <section
        className="relative py-20 text-center"
        style={{ backgroundColor: "var(--charcoal)", paddingTop: "110px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="font-body text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--gold-start)" }}
            >
              Shahji Dairy • Est. 1957
            </p>
            <h1
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: "var(--cream)",
              }}
            >
              Our <span className="text-gold-gradient">Complete Menu</span>
            </h1>
            <div className="gold-divider my-5" />
            <p
              className="font-body text-sm leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(245,245,220,0.7)" }}
            >
              Pure desi ghee se bani har cheez — doodh se leke mithai tak.
              Shahji Dairy ke saath ek authentic dairy experience.
            </p>
            <a
              href={generalWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block px-8 py-3.5 rounded-full text-sm tracking-widest uppercase"
              data-ocid="menu.hero.order_button"
            >
              WhatsApp pe Order Karein
            </a>
          </motion.div>
        </div>
      </section>

      {/* Category sections */}
      {menuCategories.map((cat, i) => (
        <MenuCategory key={cat.id} category={cat} index={i} />
      ))}

      {/* Footer note */}
      <section
        ref={ref}
        className="fade-in-up py-12"
        style={{ backgroundColor: "var(--charcoal)" }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div
            className="p-5 rounded-xl text-center"
            style={{
              border: "1px solid rgba(212,175,55,0.3)",
              background: "rgba(212,175,55,0.06)",
            }}
          >
            <p
              className="font-body text-xs leading-relaxed"
              style={{ color: "rgba(245,245,220,0.65)" }}
            >
              ⚠️ <strong style={{ color: "var(--gold-start)" }}>Note:</strong>{" "}
              Prices may vary as per current market rates. All items are
              prepared with pure desi ghee. Contact us for bulk orders or
              catering enquiries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
