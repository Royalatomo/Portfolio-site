import React from "react";

import { About, Footer, Header } from "./container";
import { Skills, Testimonial, Work } from "./container";
import { Info } from "./components";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/info/:id" render={(props) => <Info {...props} />} /> */}
          <Route path="/info/:id" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
