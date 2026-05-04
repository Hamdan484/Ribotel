import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Context/Theme_context";
import CosmicBackground from "./Components/CosmicBackground";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/Scroll_to_top";
export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <CosmicBackground />
        <div className="relative flex min-h-screen flex-col text-slate-800 bg-blue-500/20">
          <Navbar />

          <main className="grow pt-16 md:pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>

    
  );
}
