const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg"
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      {images.map((src, i) => (
        <img key={i} src={src} alt="opera" />
      ))}
    </section>
  );
}