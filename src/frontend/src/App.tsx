import { Toaster } from "@/components/ui/sonner";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Wedding from "./pages/Wedding";

function PageRouter() {
  const { currentPage } = useNavigation();
  switch (currentPage) {
    case "about":
      return <About />;
    case "products":
      return <Products />;
    case "wedding":
      return <Wedding />;
    case "gallery":
      return <Gallery />;
    case "contact":
      return <Contact />;
    default:
      return <Home />;
  }
}

export default function App() {
  return (
    <NavigationProvider>
      <div
        className="min-h-screen flex flex-col"
        style={{
          backgroundColor: "var(--cream-light)",
          color: "var(--dark-brown)",
        }}
      >
        <Header />
        <main className="flex-1">
          <PageRouter />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </div>
    </NavigationProvider>
  );
}
