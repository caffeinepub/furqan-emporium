import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { type Page, useNavigation } from "../context/NavigationContext";

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Humari Kahani", page: "about" },
  { label: "Mithaiyaan", page: "products" },
  { label: "Wedding Gifts", page: "wedding" },
  { label: "Gallery", page: "gallery" },
  { label: "Sampark", page: "contact" },
];

export default function Footer() {
  const { navigate } = useNavigation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="maroon-pattern"
      style={{ backgroundColor: "var(--maroon-dark)", color: "var(--cream)" }}
      data-ocid="footer"
    >
      {/* Gold top border */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, var(--maroon-deep), var(--gold), var(--maroon-deep))",
        }}
      />

      {/* No Branch Banner */}
      <div
        className="text-center py-3 font-bold tracking-widest text-sm font-display"
        style={{
          backgroundColor: "rgba(212,176,97,0.15)",
          borderBottom: "1px solid rgba(212,176,97,0.3)",
          color: "var(--gold)",
        }}
      >
        🚫 WE HAVE NO BRANCH — SIRF BINDA WALA CHOWK, KHURJA MEIN MILTE HAIN 🚫
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                style={{
                  borderColor: "var(--gold)",
                  background: "rgba(212,176,97,0.15)",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>🪔</span>
              </div>
              <div>
                <div
                  className="font-display text-sm tracking-wider"
                  style={{ color: "var(--gold)" }}
                >
                  Pt. Shivlal Ustad
                </div>
                <div
                  className="font-body text-xs"
                  style={{ color: "rgba(243,230,209,0.7)" }}
                >
                  Sweets & Bakery
                </div>
              </div>
            </div>
            <p
              className="text-sm font-body leading-relaxed"
              style={{ color: "rgba(243,230,209,0.75)" }}
            >
              Pure Desi Ghee ki mishthaan. Khurja ki sabse purani aur
              bharosemand mithai ki dukaan. Since 1908.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="font-display text-sm tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    type="button"
                    onClick={() => navigate(link.page)}
                    className="text-sm font-body hover:text-gold transition-colors"
                    style={{ color: "rgba(243,230,209,0.75)" }}
                    data-ocid={`footer.${link.page}.link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-display text-sm tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Sampark Karein
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "var(--gold)" }}
                />
                <span
                  className="text-sm font-body"
                  style={{ color: "rgba(243,230,209,0.8)" }}
                >
                  Binda Wala Chowk,
                  <br />
                  Khurja-203131 (U.P.)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} style={{ color: "var(--gold)" }} />
                <a
                  href="tel:+919756605864"
                  className="text-sm font-body hover:text-gold transition-colors"
                  style={{ color: "rgba(243,230,209,0.8)" }}
                >
                  +91-9756605864
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <a
                  href="https://wa.me/919897905864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body hover:text-gold transition-colors"
                  style={{ color: "rgba(243,230,209,0.8)" }}
                >
                  +91-9897905864
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} style={{ color: "var(--gold)" }} />
                <a
                  href="mailto:shivlalustad@gmail.com"
                  className="text-sm font-body hover:text-gold transition-colors"
                  style={{ color: "rgba(243,230,209,0.8)" }}
                >
                  shivlalustad@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="font-display text-sm tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Social Media
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.instagram.com/shivlalustad?igsh=MW8wNnNxeHUzd3Y0YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                }}
                data-ocid="footer.instagram.link"
              >
                <Instagram size={18} color="white" />
              </a>
              <a
                href="https://wa.me/919897905864"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: "#25D366" }}
                data-ocid="footer.whatsapp.link"
              >
                <MessageCircle size={18} color="white" />
              </a>
            </div>
            <p
              className="text-xs font-body"
              style={{ color: "rgba(243,230,209,0.6)" }}
            >
              Instagram pe humse jude rahein aur naye offers paaein!
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer + copyright */}
      <div
        style={{ borderTop: "1px solid rgba(212,176,97,0.3)" }}
        className="max-w-7xl mx-auto px-4 py-4 text-center"
      >
        <p
          className="text-xs font-body mb-2"
          style={{ color: "rgba(243,230,209,0.7)" }}
        >
          ⚠️ Prices may vary as per market rates. Please contact us for bulk
          orders.
        </p>
        <p
          className="text-xs font-body"
          style={{ color: "rgba(243,230,209,0.5)" }}
        >
          © {year} Pt. Shivlal Ustad - Sweets & Bakery. All rights reserved. |
          Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
