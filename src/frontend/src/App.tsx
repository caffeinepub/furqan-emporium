import { Toaster } from "@/components/ui/sonner";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function PageRouter() {
  const { currentPage } = useNavigation();
  switch (currentPage) {
    case "about":
      return <About />;
    case "menu":
      return <Menu />;
    case "privacy":
      return <Privacy />;
    case "terms":
      return <Terms />;
    default:
      return <Home />;
  }
}

export default function App() {
  return (
    <NavigationProvider>
      <div
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: "var(--charcoal)", color: "var(--cream)" }}
      >
        <Header />
        <main className="flex-1">
          <PageRouter />
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster />
      </div>
    </NavigationProvider>
  );
}
