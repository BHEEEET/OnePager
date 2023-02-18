import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./Reset.css";
import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    let interval = null;
    let delay = 3;

    if (count < 550) {
      delay = 3;
    } else if (count < 650) {
      delay = 10;
    } else {
      delay = 100;
    }

    if (count < 700) {
      interval = setInterval(() => {
        setCounter((count) => count + 1);
      }, delay);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count]);

  return (
    <React.StrictMode>
      <div className="wrapper">
        <Navbar />
        <main>
          <div className="front">
            <h1 className="mainTitle">Solana Chess</h1>
            <p className="mainText">Grizzlython</p>
            <button className="startButton">
              <img src="icons/play-fill.svg" />
              <span className="buttonText">Soon™</span>
            </button>
          </div>
          <div className="mostPlayed">
            <h2> One of the most played game.</h2>
            <div className="peopleNum">{count}M+</div>
            <div className="people">PEOPLE</div>
            <br />
            in the whole world
            <br /> that have played chess
          </div>
          <div className="articles">
            <article>
              <h2>Hackathon</h2>
              <img className="grizz" src="Logo_Light.svg" />
            </article>
            <article>
              <h2>What is Shess?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores repudiandae vitae nobis perferendis eum unde officia
                rem accusantium voluptas praesentium, reiciendis sunt, magni
                ipsam a provident optio ea omnis suscipit.
              </p>
            </article>

            <article className="contentBx">
              <h2>Modes</h2>
              <div className="PvP modes">
                <h3>Player vs Player</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla quod libero quae? Magnam, vero? Aliquid, ab? Corrupti
                  commodi vero, veniam dolores mollitia ratione impedit maxime,
                  minima ipsam autem magnam repellendus.
                </p>
              </div>
              <div className="DvD modes">
                <h3>DAO vs DAO</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla quod libero quae? Magnam, vero? Aliquid, ab? Corrupti
                  commodi vero, veniam dolores mollitia ratione impedit maxime,
                  minima ipsam autem magnam repellendus.
                </p>
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </React.StrictMode>
  );
}
