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
        <h1 className="mainTitle">
          Solana <br />
          Competitive
          <br />
          Chess
        </h1>
        <h2>What is Shess?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          repudiandae vitae nobis perferendis eum unde officia rem accusantium
          voluptas praesentium, reiciendis sunt, magni ipsam a provident optio
          ea omnis suscipit.
        </p>

        <h2>Modes</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quod
          libero quae? Magnam, vero? Aliquid, ab? Corrupti commodi vero, veniam
          dolores mollitia ratione impedit maxime, minima ipsam autem magnam
          repellendus.
        </p>
      </main>
      <Footer />
    </div>
  );
}
