import React from "react";
import img1 from "../../assets/record.png";
import img2 from "../../assets/Dashboard-1.png";
import img3 from "../../assets/diacom-record.png";
import img4 from "../../assets/Dicom-view.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const Gallery = () => {
  return (
    <div className="my-6">
      <h1 className="text-2xl font-bold underline text-center"><span className="text-primary">Frot </span>Features Gallery</h1>
      <ImageGallery />
    </div>
  );
};

export default Gallery;

function ImageGallery() {
  return (
    <Carousel width="60%" autoPlay={true} showThumbs={false} interval={1500}>
      <div>
        <Image src={img2} alt="gallery" />
        <p className="legend">Dashboard</p>
      </div>

      <div>
        <Image src={img4} alt="gallery" />
        <p className="legend">Dicom Viewer</p>
      </div>

      <div>
        <Image src={img3} alt="gallery" />
        <p className="legend">Expanded Viewer</p>
      </div>

      <div>
        <Image src={img1} alt="gallery" />
        <p className="legend">Records</p>
      </div>
    </Carousel>
  );
}
