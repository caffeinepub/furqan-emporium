import { motion } from "motion/react";
import OrnamentalDivider from "../components/OrnamentalDivider";
import ProductCard from "../components/ProductCard";

const products = [
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
  {
    name: "Motichoor Ladoo",
    price: "₹600/kg",
    image: "/assets/generated/product-ladoo.dim_600x500.jpg",
  },
  {
    name: "Mawa Gujiya",
    price: "₹550/kg",
    image: "/assets/generated/product-gujiya.dim_600x500.jpg",
  },
  {
    name: "Bakery Cookies",
    price: "₹200/500g",
    image: "/assets/generated/product-cookies.dim_600x500.jpg",
  },
];

export default function Products() {
  return (
    <div data-ocid="products.page">
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
              Pure Desi Ghee
            </div>
            <h1
              className="font-display text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--gold)" }}
            >
              Humari Mishthaan
            </h1>
            <OrnamentalDivider color="var(--gold)" />
            <p
              className="font-body text-base"
              style={{ color: "rgba(243,230,209,0.85)" }}
            >
              Made with 100% Pure Desi Ghee. Experience the Taste of Khurja's
              Finest Legacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products grid */}
      <section
        className="heritage-pattern py-16 lg:py-24"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <ProductCard {...p} index={i + 1} />
              </motion.div>
            ))}
          </div>

          {/* Price note */}
          <div
            className="p-4 rounded-lg text-center font-body text-sm"
            style={{
              backgroundColor: "rgba(102,19,39,0.08)",
              border: "1px solid rgba(102,19,39,0.2)",
              color: "var(--maroon)",
            }}
          >
            ⚠️ <strong>Note:</strong> Prices may vary as per market rates. Please
            contact us for bulk orders.
          </div>
        </div>
      </section>
    </div>
  );
}
