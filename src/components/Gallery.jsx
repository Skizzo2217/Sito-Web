import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const images = [img1, img2, img3];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      {images.map((src, i) => (
        <img key={i} src={src} alt="opera" />
      ))}
    </section>
  );
}
