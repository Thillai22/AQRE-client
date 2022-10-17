import React from "react";
import Img1 from "../Images/Img1.jpg";
import Img2 from "../Images/Img2.jpg";
import Img3 from "../Images/Img3.jpg";
import Img4 from "../Images/Img4.jpg";
import Img5 from "../Images/Img5.jpg";
import Img6 from "../Images/Img6.jpg";
import Img7 from "../Images/Img7.jpg";
import Img8 from "../Images/Img8.jpg";
 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function slide() {
  return (
    <div
      id="carouselExampleIndicators"
      style={{ marginTop: "50px" }}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
        
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Img1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Img2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Img3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Img4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Img5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Img6} className="c-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Img7} className="c-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Img8} className="d-block w-100" alt="..." />
        </div>
       
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
