import React from "react";
import "./Gallery.css";
import Card from "./Card";
import gallery_1 from "../../assets/gallery/gallery1.jpg";
import gallery_2 from "../../assets/gallery/gallery2.jpg";
import gallery_3 from "../../assets/gallery/gallery3.jpg";
import gallery_4 from "../../assets/gallery/gallery4.jpg";
import gallery_5 from "../../assets/gallery/gallery5.jpg";
import gallery_6 from "../../assets/gallery/gallery6.jpg";
import gallery_7 from "../../assets/gallery/gallery7.jpg";
import gallery_8 from "../../assets/gallery/gallery8.jpg";
import gallery_9 from "../../assets/gallery/gallery9.jpg";
import gallery_10 from "../../assets/gallery/gallery10.jpg";
import gallery_11 from "../../assets/gallery/gallery11.jpg";
import gallery_12 from "../../assets/gallery/gallery12.jpg";
import gallery_13 from "../../assets/gallery/gallery13.jpg";
import gallery_14 from "../../assets/gallery/gallery14.jpg";
import gallery_15 from "../../assets/gallery/gallery15.jpg";
import gallery_16 from "../../assets/gallery/gallery16.jpg";
import gallery_17 from "../../assets/gallery/gallery17.jpg";
import gallery_18 from "../../assets/gallery/gallery18.jpg";
import gallery_19 from "../../assets/gallery/gallery19.jpg";
import gallery_20 from "../../assets/gallery/gallery20.jpg";

function Gallery() {
  const gallery_images = [
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9,
    gallery_2,
    gallery_10,
    gallery_11,
    gallery_3,
    gallery_12,
    gallery_13,
    gallery_14,
    gallery_15,
    gallery_16,
    gallery_17,
    gallery_18,
    gallery_1,
    gallery_19,
    gallery_20,
    gallery_2,
  ];
  return (
    <div id="gallery" className="gallery">
      <div className="gallery__heading">
        <h1>Gallery</h1>
        <p>
          A Glimpse of Our Modern Workspaces and Iconic Ventures. Where
          <br />
          innovation and craftsmanship come to life.
        </p>
      </div>

      <div className="gallery__main">
        {gallery_images.map((item, index) => {
          return <Card key={`gallery${index}`} image={item} />;
        })}
      </div>
    </div>
  );
}

export default Gallery;
