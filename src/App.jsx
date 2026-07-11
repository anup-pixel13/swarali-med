import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import ScrollRestoration from "./components/ScrollRestoration";
import WhatsAppButton from "./components/WhatsAppButton";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Equipment from "./Pages/Equipment";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RentalPolicy from "./Pages/RentalPolicy";
import Services from "./Pages/Services";

function PageShell({ children }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="page-shell"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollRestoration />
      <ScrollProgress />
      <Navbar />
      <WhatsAppButton />
      <BackToTopButton />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageShell><Home /></PageShell>} />
          <Route path="/about" element={<PageShell><About /></PageShell>} />
          <Route path="/services" element={<PageShell><Services /></PageShell>} />
          <Route path="/equipment" element={<PageShell><Equipment /></PageShell>} />
          <Route path="/rental-policy" element={<PageShell><RentalPolicy /></PageShell>} />
          <Route path="/privacy-policy" element={<PageShell><PrivacyPolicy /></PageShell>} />
          <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
          <Route path="*" element={<PageShell><NotFound /></PageShell>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
