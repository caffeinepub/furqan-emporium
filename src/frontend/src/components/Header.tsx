import { Menu, X } from "lucide-react";
import { useState } from "react";
import { type Page, useNavigation } from "../context/NavigationContext";

const WHATSAPP_LINK =
  "https://wa.me/918979369843?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B6%E0%A4%BE%E0%A4%B9%E0%A4%9C%E0%A5%80%20%E0%A4%A1%E0%A5%87%E0%A4%AF%E0%A4%B0%E0%A5%80%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A5%87%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%BF%E0%A4%AF%E0%A4%AE%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%A1%E0%A4%95%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B8%20(A2%20Ghee%20%26%20Sweets)%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%94%E0%A4%B0%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%20%E0%A4%94%E0%A4%B0%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%91%E0%A4%B0%E0%A5%8D%E0%A4%A1%E0%A4%B0%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4";

const navItems: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Menu", page: "menu" },
  { label: "Privacy", page: "privacy" },
];

export default function Header() {
  const { currentPage, navigate } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="glass-header fixed top-0 left-0 right-0 z-50"
      data-ocid="header"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Left: Nav links */}
          <nav className="hidden lg:flex items-center gap-8">
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
          </nav>

          {/* Center: Logo */}
          <button
            type="button"
            onClick={() => navigate("home")}
            className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
            data-ocid="header.home.link"
          >
            <img
              src="/assets/generated/shahji-dairy-logo-transparent.dim_400x400.png"
              alt="Shahji Dairy Logo"
              className="h-[60px] w-auto"
            />
          </button>

          {/* Right: WhatsApp button */}
          <div className="hidden lg:flex items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-5 py-2.5 rounded-full text-xs font-body tracking-widest uppercase"
              data-ocid="header.whatsapp.button"
            >
              WhatsApp Order
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded"
            style={{ color: "var(--gold-start)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="header.mobile_menu.toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden py-4 border-t"
          style={{
            backgroundColor: "rgba(26,26,26,0.97)",
            borderColor: "rgba(212,175,55,0.25)",
          }}
        >
          {navItems.map((item) => (
            <button
              type="button"
              key={item.page}
              onClick={() => {
                navigate(item.page);
                setMobileOpen(false);
              }}
              className="block w-full text-left px-6 py-3.5 text-sm font-body font-medium tracking-widest uppercase transition-colors"
              style={{
                color:
                  currentPage === item.page
                    ? "var(--gold-start)"
                    : "rgba(245,245,220,0.8)",
                borderBottom: "1px solid rgba(212,175,55,0.1)",
              }}
              data-ocid={`header.${item.page}.link`}
            >
              {item.label}
            </button>
          ))}
          <div className="px-6 pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold block text-center px-6 py-3 rounded-full text-sm tracking-widest uppercase"
              data-ocid="header.whatsapp.button"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
