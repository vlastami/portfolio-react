import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects";
import "slick-carousel/slick/slick-theme.css";
function App() {
  useEffect(() => {
    document.title = "Vlasta Michalcová";
    AOS.init();
  }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <Skills />
        <Projects />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}
export default App;
