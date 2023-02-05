import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./Reset.css";
import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <main>
        <h1>Solana Chess</h1>
      </main>
      <Footer />
    </div>
  );
}
