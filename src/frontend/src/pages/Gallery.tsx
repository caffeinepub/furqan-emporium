import { X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import OrnamentalDivider from "../components/OrnamentalDivider";

const galleryImages = [
  {
    src: "/assets/generated/hero-khurchan.dim_1400x600.jpg",
    alt: "Khurja Special Khurchan - Hero",
    caption: "Khurja ki Mashoor Khurchan",
  },
  {
    src: "/assets/generated/product-khurchan.dim_600x500.jpg",
    alt: "Khurchan",
    caption: "Khurja Special Khurchan",
  },
  {
    src: "/assets/generated/product-ghewar.dim_600x500.jpg",
    alt: "Mawa Ghewar",
    caption: "Mawa Ghewar",
  },
  {
    src: "/assets/generated/product-kaju-katli.dim_600x500.jpg",
    alt: "Kaju Katli",
    caption: "Kaju Katli",
  },
  {
    src: "/assets/generated/product-ladoo.dim_600x500.jpg",
    alt: "Motichoor Ladoo",
    caption: "Motichoor Ladoo",
  },
  {
    src: "/assets/generated/product-gujiya.dim_600x500.jpg",
    alt: "Mawa Gujiya",
    caption: "Mawa Gujiya",
  },
  {
    src: "/assets/generated/product-cookies.dim_600x500.jpg",
    alt: "Bakery Cookies",
    caption: "Bakery Cookies",
  },
  {
    src: "/assets/generated/wedding-bhaji-box.dim_800x600.jpg",
    alt: "Wedding Bhaji Box",
    caption: "Premium Wedding Bhaji Box",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div data-ocid="gallery.page">
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
              Hamaari Gallery
            </h1>
            <OrnamentalDivider color="var(--gold)" />
            <p
              className="font-body text-base"
              style={{ color: "rgba(243,230,209,0.85)" }}
            >
              Hamare mashhoor products ki ek jhaanki
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery grid */}
      <section
        className="heritage-pattern py-16 lg:py-24"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.button
                key={img.src}
                type="button"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="relative group cursor-pointer rounded-lg overflow-hidden text-left w-full"
                style={{ border: "1px solid rgba(212,176,97,0.3)" }}
                onClick={() => setLightbox(i)}
                aria-label={`View ${img.caption}`}
                data-ocid={`gallery.item.${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(42,26,20,0.85), transparent)",
                  }}
                >
                  <span
                    className="font-body text-xs font-semibold"
                    style={{ color: "var(--gold)" }}
                  >
                    {img.caption}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
          data-ocid="gallery.lightbox.modal"
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-2 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={() => setLightbox(null)}
            onKeyUp={(e) => e.key === "Escape" && setLightbox(null)}
            data-ocid="gallery.lightbox.close_button"
          >
            <X size={24} color="white" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
