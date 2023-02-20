import React from "react";
import About from "./sections/about/About.jsx";
import Navbar from "./sections/navbar/Navbar.jsx";
import Header from "./sections/header/Header.jsx";
import Services from "./sections/services/Services.jsx";
import Portfolio from "./sections/portfolio/Portfolio.jsx";
import Faqs from "./sections/faqs/Faqs.jsx";
import Testimonials from "./sections/testimonials/Testimonials.jsx";
import Contact from "./sections/contact/Contact.jsx";
import Footer from "./sections/footer/Footer.jsx";
import Floating from "./sections/floating/Floating.jsx";


import "./App.css";
const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
      
    </main>
  );
};

export default App;
