import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".title", {
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: "power3.out"
    });

    tl.from(".choice", {
      opacity: 1,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.6");
  }, []);

  return (
    <div className="home">

      {/* LOGO DI SFONDO */}
      <div className="logo-bg"></div>
      
      <div className="center">
        <h1 className="nomeCognome">
          Arch. Vanessa Caredda
        </h1>

        <h1 className="title">
          Il confine tra spazio e colore è sottile: lei lo abita.
        </h1>
      </div>
      <div className="choices">
        <div className="choice" onClick={() => navigate("/architettura")}>
          <span>Architettura</span>
        </div>

        <div className="choice" onClick={() => navigate("/arte")}>
          <span>Arte</span>
        </div>
      </div>

    </div>
  );
}
