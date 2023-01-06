import { useEffect, useState, useContext } from "react";

import "./main.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

import Hero from "./ui/Home";
import About from "./ui/About";
import Dexter from "./ui/Dexter";
import Project from "./ui/Project";
import Contact from "./ui/Contact";

import AOS from "aos";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  const [showSrollTop, setShowScrollTop] = useState(false);

  const visibility = (value) => {
    setShowScrollTop(value);
  };

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 10,
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero visibility={visibility} />
      <About />
      <Dexter />
      <Project />
      <Contact />
      <Footer />
      <ScrollTop showSrollTop={showSrollTop} />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
