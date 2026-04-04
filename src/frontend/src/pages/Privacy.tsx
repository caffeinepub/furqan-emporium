import { useNavigation } from "../context/NavigationContext";
import { useFadeInUp } from "../hooks/useFadeInUp";

export default function Privacy() {
  const ref = useFadeInUp<HTMLDivElement>();
  const { navigate } = useNavigation();

  return (
    <main
      style={{ paddingTop: "72px", backgroundColor: "var(--cream)" }}
      data-ocid="privacy.page"
    >
      <div
        ref={ref}
        className="fade-in-up max-w-3xl mx-auto px-6 lg:px-8 py-20"
      >
        <h1
          className="font-display text-4xl lg:text-5xl mb-3"
          style={{ color: "var(--charcoal)" }}
        >
          Privacy Policy
        </h1>
        <div
          className="w-16 h-0.5 mb-8"
          style={{
            background:
              "linear-gradient(135deg, var(--gold-start), var(--gold-end))",
          }}
        />
        <p
          className="font-body text-xs mb-10"
          style={{ color: "rgba(26,26,26,0.5)" }}
        >
          Last updated: April 2026
        </p>

        <div
          className="font-body text-sm leading-[1.9] space-y-8"
          style={{ color: "rgba(26,26,26,0.8)" }}
        >
          {[
            {
              title: "1. Information We Collect",
              content:
                "We collect information you voluntarily provide when contacting us via our website form or WhatsApp — including your name, phone number, and message. We do not collect payment data through our website.",
            },
            {
              title: "2. How We Use Your Information",
              content:
                "Your information is used solely to respond to your enquiries, process orders, and improve our service. We do not use your data for automated marketing or profiling.",
            },
            {
              title: "3. Information Sharing",
              content:
                "Shahji Dairy does not sell, rent, or trade your personal information to third parties. We may share information with delivery partners strictly to fulfil your orders.",
            },
            {
              title: "4. Cookies",
              content:
                "Our website uses minimal cookies to ensure basic functionality and improve user experience. No tracking or advertising cookies are deployed.",
            },
            {
              title: "5. Data Security",
              content:
                "We implement reasonable technical and organisational measures to protect your personal data from unauthorised access, loss, or misuse.",
            },
            {
              title: "6. Data Retention",
              content:
                "Contact form submissions are retained for up to 12 months for the purpose of responding to your enquiries. You may request deletion at any time.",
            },
            {
              title: "7. Your Rights",
              content:
                "You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us via WhatsApp at 089793 69843 or phone at 089793 69874.",
            },
            {
              title: "8. Third-Party Links",
              content:
                "Our website may contain links to WhatsApp and Instagram. These platforms have their own privacy policies, and we encourage you to review them.",
            },
            {
              title: "9. Changes to This Policy",
              content:
                "We may update this Privacy Policy periodically. Continued use of our website following any changes constitutes your acceptance of the revised policy.",
            },
            {
              title: "10. Contact",
              content:
                "For any privacy-related queries, contact us at: CPW4+Q2J, Shaji Road, Sikandrabad. Phone: 089793 69874.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2
                className="font-display text-xl mb-3 pb-2 border-b"
                style={{
                  color: "var(--charcoal)",
                  borderImage:
                    "linear-gradient(135deg, var(--gold-start), var(--gold-end)) 1",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                }}
              >
                {section.title}
              </h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => navigate("home")}
            className="btn-gold px-8 py-3.5 rounded-full text-xs tracking-widest uppercase"
            data-ocid="privacy.home.button"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}
