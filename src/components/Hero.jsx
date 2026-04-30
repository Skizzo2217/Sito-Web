import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from("h1", { y: 50, opacity: 0, duration: 1 });
  }, []);

  return (
    <section className="hero">
      <h1>Architettura & Arte</h1>
      <p>Spazi che raccontano emozioni</p>
    </section>
  );
}