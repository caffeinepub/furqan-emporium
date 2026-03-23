import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919897905864"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl whatsapp-pulse transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
      title="WhatsApp pe Order Karein"
      data-ocid="floating.whatsapp.button"
    >
      <MessageCircle size={28} color="white" />
    </a>
  );
}
