import { Info, MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  note?: string;
  index: number;
}

const WA_NUMBER = "919897905864";

export default function ProductCard({
  name,
  price,
  image,
  note,
  index,
}: ProductCardProps) {
  const message = encodeURIComponent(
    `Namaste, mujhe ${name} order karna hai. Kitna available hai?`,
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${message}`;

  return (
    <div
      className="product-card rounded-lg overflow-hidden flex flex-col"
      style={{
        backgroundColor: "var(--cream-light)",
        border: "1px solid rgba(212,176,97,0.35)",
        boxShadow: "0 2px 12px rgba(102,19,39,0.08)",
      }}
      data-ocid={`products.item.${index}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img
          src={image}
          alt={name}
          className="card-image w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(42,26,20,0.5) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3
          className="font-display text-base font-semibold mb-1 tracking-wide"
          style={{ color: "var(--maroon)" }}
        >
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <span
            className="font-body font-bold text-lg"
            style={{
              color: "var(--gold-dark)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {price}
          </span>
          <span
            className="text-xs font-body px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: "rgba(102,19,39,0.1)",
              color: "var(--maroon)",
            }}
          >
            Pure Desi Ghee
          </span>
        </div>

        {note && (
          <div
            className="flex items-start gap-1.5 mb-3 p-2 rounded text-xs font-body"
            style={{
              backgroundColor: "rgba(212,176,97,0.15)",
              color: "var(--dark-brown)",
              border: "1px solid rgba(212,176,97,0.4)",
            }}
          >
            <Info
              size={13}
              className="mt-0.5 flex-shrink-0"
              style={{ color: "var(--gold-dark)" }}
            />
            <span>{note}</span>
          </div>
        )}

        <div className="mt-auto">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-body font-semibold text-sm tracking-wide transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "#25D366", color: "white" }}
            data-ocid={`products.whatsapp.button.${index}`}
          >
            <MessageCircle size={17} />
            WhatsApp pe Order Karein
          </a>
        </div>
      </div>
    </div>
  );
}
