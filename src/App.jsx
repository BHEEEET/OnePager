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
        <div className="front">
          <h1 className="mainTitle">
            Solana <br />
            Web3 Chess
          </h1>
          <p className="mainText">Grizzlython</p>
          <button className="startButton">
            <img src="play-fill.svg" />
            Play now
          </button>
        </div>
        <div className="articles">
          <article>
            There are
            <br />
            <span> ±700.000.000 people </span>
            <br />
            in the whole world
            <br /> that have played chess
          </article>
          <article>
            <h2>Hackathon</h2>
            <img className="grizz" src="Logo_Light.svg" />
          </article>
          <article>
            <h2>What is Shess?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores repudiandae vitae nobis perferendis eum unde officia
              rem accusantium voluptas praesentium, reiciendis sunt, magni ipsam
              a provident optio ea omnis suscipit.
            </p>
          </article>
          <article>
            <h2>Modes</h2>
            <div className="PvP modes">
              <h3>Player vs Player</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                quod libero quae? Magnam, vero? Aliquid, ab? Corrupti commodi
                vero, veniam dolores mollitia ratione impedit maxime, minima
                ipsam autem magnam repellendus.
              </p>
            </div>
            <div className="DvD modes">
              <h3>DAO vs DAO</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                quod libero quae? Magnam, vero? Aliquid, ab? Corrupti commodi
                vero, veniam dolores mollitia ratione impedit maxime, minima
                ipsam autem magnam repellendus.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
