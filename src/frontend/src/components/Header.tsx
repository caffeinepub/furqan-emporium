import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { type Page, useNavigation } from "../context/NavigationContext";

const navItems: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Humari Kahani", page: "about" },
  { label: "Mithaiyaan", page: "products" },
  { label: "Wedding Gifts", page: "wedding" },
  { label: "Gallery", page: "gallery" },
  { label: "Sampark", page: "contact" },
];

export default function Header() {
  const { currentPage, navigate } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" data-ocid="header">
      {/* Gold top border */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, var(--maroon-deep), var(--gold), var(--maroon-deep))",
        }}
      />

      {/* No Branch Notice */}
      <div
        style={{ backgroundColor: "var(--gold)", color: "var(--dark-brown)" }}
        className="text-center py-1.5 text-xs font-bold tracking-widest font-body"
      >
        ⚠️ WE HAVE NO BRANCH — ONLY AT BINDA WALA CHOWK, KHURJA ⚠️
      </div>

      {/* Main nav bar */}
      <nav
        style={{
          backgroundColor: "var(--maroon)",
          borderBottom: "2px solid var(--gold)",
        }}
        className="px-4 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("home")}
            className="flex items-center gap-3 group"
            data-ocid="header.link"
          >
            {/* Emblem circle */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2"
              style={{
                borderColor: "var(--gold)",
                background: "rgba(212,176,97,0.15)",
              }}
            >
              <span style={{ color: "var(--gold)", fontSize: "1.2rem" }}>
                🪔
              </span>
            </div>
            <div className="text-left">
              <div
                className="font-display text-xs tracking-widest uppercase"
                style={{ color: "var(--gold)", lineHeight: 1.2 }}
              >
                Pt. Shivlal Ustad
              </div>
              <div
                className="font-body text-xs tracking-wide"
                style={{ color: "rgba(243,230,209,0.75)", fontSize: "0.6rem" }}
              >
                Sweets & Bakery · Since 1908
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.page}
                onClick={() => navigate(item.page)}
                className={`nav-link${currentPage === item.page ? " active" : ""}`}
                data-ocid={`header.${item.page}.link`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/shivlalustad?igsh=MW8wNnNxeHUzd3Y0YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all"
              style={{
                background:
                  "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                color: "white",
              }}
              data-ocid="header.instagram.link"
            >
              <Instagram size={14} />
              <span className="hidden md:inline">Follow Us</span>
            </a>
            <button
              type="button"
              className="lg:hidden p-2 rounded"
              style={{ color: "var(--gold)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="header.mobile_menu.toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden py-4 border-t"
            style={{ borderColor: "rgba(212,176,97,0.3)" }}
          >
            {navItems.map((item) => (
              <button
                type="button"
                key={item.page}
                onClick={() => {
                  navigate(item.page);
                  setMobileOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-sm font-body font-medium tracking-widest uppercase transition-colors"
                style={{
                  color:
                    currentPage === item.page
                      ? "var(--gold)"
                      : "rgba(243,230,209,0.85)",
                  borderBottom: "1px solid rgba(212,176,97,0.15)",
                }}
                data-ocid={`header.${item.page}.link`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.instagram.com/shivlalustad?igsh=MW8wNnNxeHUzd3Y0YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm font-body"
              style={{ color: "var(--gold)" }}
            >
              <Instagram size={16} /> Instagram pe Follow Karein
            </a>
          </div>
        )}
      </nav>

      {/* Gold bottom border */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--gold), transparent)",
        }}
      />
    </header>
  );
}
