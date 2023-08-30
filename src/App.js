import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Product from "./components/products/Product";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import More from "./components/more-products/More";
import Navigation from "./components/navigation/Navigation";
import Showproducts from "./components/showproduct/Showproducts";
import Footer from './components/footer/Footer'
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/showproducts" element={<Showproducts />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
