import { useNavigation } from "../context/NavigationContext";
import { useFadeInUp } from "../hooks/useFadeInUp";

export default function Terms() {
  const ref = useFadeInUp<HTMLDivElement>();
  const { navigate } = useNavigation();

  return (
    <main
      style={{ paddingTop: "72px", backgroundColor: "var(--cream)" }}
      data-ocid="terms.page"
    >
      <div
        ref={ref}
        className="fade-in-up max-w-3xl mx-auto px-6 lg:px-8 py-20"
      >
        <h1
          className="font-display text-4xl lg:text-5xl mb-3"
          style={{ color: "var(--charcoal)" }}
        >
          Terms &amp; Conditions
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
              title: "1. Acceptance of Terms",
              content:
                "By accessing or using the Shahji Dairy website, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of the website.",
            },
            {
              title: "2. Products & Pricing",
              content:
                "All products offered by Shahji Dairy are subject to availability. Prices are indicative and may vary based on market rates, seasonal fluctuations, and order volume. Please contact us for bulk order pricing.",
            },
            {
              title: "3. Orders",
              content:
                "Orders may be placed via WhatsApp or in person at our store. We reserve the right to refuse or cancel orders at our discretion. Confirmation of an order via WhatsApp constitutes a binding agreement.",
            },
            {
              title: "4. Delivery",
              content:
                "Delivery availability and charges depend on your location. Fresh and perishable products must be consumed within the recommended timeframe provided at the time of order.",
            },
            {
              title: "5. Product Quality",
              content:
                "Shahji Dairy guarantees that all products are made using pure, natural ingredients without artificial additives. If you receive a product that does not meet our quality standards, please contact us within 24 hours of receipt.",
            },
            {
              title: "6. Returns & Refunds",
              content:
                "Due to the perishable nature of our products, we do not accept returns. Refunds or replacements may be offered at our discretion for quality complaints raised within 24 hours of delivery.",
            },
            {
              title: "7. Intellectual Property",
              content:
                "All content on this website — including images, text, the Shahji Dairy name, and logo — is the property of Shahji Dairy and may not be reproduced without written permission.",
            },
            {
              title: "8. Limitation of Liability",
              content:
                "Shahji Dairy is not liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the value of the order in question.",
            },
            {
              title: "9. Governing Law",
              content:
                "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Delhi.",
            },
            {
              title: "10. Contact",
              content:
                "For questions regarding these terms, contact us at: CPW4+Q2J, Shaji Road, Sikandrabad. Phone: 089793 69874.",
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
            data-ocid="terms.home.button"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}
