import React from 'react'
import './App.css';
import Navigation from './components/Navigation';

import Hero from './components/Hero'
// import Products from './components/Products'
import Sidebar from './components/Sidebar'
// import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Sidebar />
      {/* <Products /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
