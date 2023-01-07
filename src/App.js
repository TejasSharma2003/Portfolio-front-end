import { useEffect } from "react";

import "./main.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./ui/Hero";
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
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 10,
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Dexter />
      <Project />
      <Contact />
      <Footer />
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
