import { Instagram } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";

export default function Footer() {
  const { navigate } = useNavigation();
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer
      style={{ backgroundColor: "var(--charcoal-deep)" }}
      className="text-cream"
    >
      {/* Gold top border */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--gold-start), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Brand */}
          <div>
            <img
              src="/assets/generated/shahji-dairy-logo-transparent.dim_400x400.png"
              alt="Shahji Dairy"
              className="h-20 w-auto mb-4"
            />
            <p
              className="font-body text-sm italic leading-relaxed mb-5"
              style={{ color: "rgba(245,245,220,0.5)" }}
            >
              Purity. Heritage. Trust. Since 1957.
            </p>
            <a
              href="https://www.instagram.com/shahjidairyofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full transition-transform hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, var(--gold-start), var(--gold-end))",
              }}
              aria-label="Instagram"
              data-ocid="footer.instagram.link"
            >
              <Instagram size={20} color="#1A1A1A" strokeWidth={2} />
            </a>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h4
              className="font-display text-lg mb-5"
              style={{ color: "var(--gold-start)" }}
            >
              Visit Us
            </h4>
            <div
              className="space-y-3 font-body text-sm"
              style={{ color: "rgba(245,245,220,0.7)" }}
            >
              <p>CPW4+Q2J, Shaji Road, Sikandrabad</p>
              <p>
                <a
                  href="tel:+918979369874"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(245,245,220,0.7)" }}
                >
                  📞 089793 69874
                </a>
              </p>
              <p>⏰ 09:30 AM – 11:30 PM (Daily)</p>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4
              className="font-display text-lg mb-5"
              style={{ color: "var(--gold-start)" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", page: "home" as const },
                { label: "About Us", page: "about" as const },
                { label: "Privacy Policy", page: "privacy" as const },
                { label: "Terms & Conditions", page: "terms" as const },
              ].map((link) => (
                <button
                  key={link.page}
                  type="button"
                  onClick={() => navigate(link.page)}
                  className="text-left font-body text-sm transition-colors hover:text-gold"
                  style={{ color: "rgba(245,245,220,0.6)" }}
                  data-ocid={`footer.${link.page}.link`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="font-body text-xs"
            style={{ color: "rgba(245,245,220,0.45)" }}
          >
            © {year} Shahji Dairy. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate("privacy")}
              className="font-body text-xs transition-colors hover:text-gold"
              style={{ color: "var(--gold-start)" }}
              data-ocid="footer.privacy.link"
            >
              Privacy Policy
            </button>
            <span style={{ color: "rgba(212,175,55,0.4)" }}>·</span>
            <button
              type="button"
              onClick={() => navigate("terms")}
              className="font-body text-xs transition-colors hover:text-gold"
              style={{ color: "var(--gold-start)" }}
              data-ocid="footer.terms.link"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-4">
          <p
            className="font-body text-center"
            style={{ fontSize: "0.65rem", color: "rgba(245,245,220,0.3)" }}
          >
            Prices may vary. Please contact us for bulk orders. ·{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(212,175,55,0.35)" }}
            >
              Built with ♥ using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
