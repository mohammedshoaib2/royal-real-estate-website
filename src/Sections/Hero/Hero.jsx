import React from "react";
import "./Hero.css";
import InfoElement from "./InfoElement";
import heroImage from "../../assets/hero.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1>
          Discover Most Affordable and Excellent{" "}
          <span style={{ color: "#567ae5" }}>Property</span>
        </h1>
        <p>
          We at{" "}
          <span style={{ color: "#576ae7", fontWeight: "600" }}>
            Royal Real Estates and Developers
          </span>{" "}
          Committed to exceeding industry standards by creating exceptional
          living and commercial spaces. We redefine real estate experiences with
          innovation, quality, and unmatched customer satisfaction with{" "}
          <span style={{ color: "#171ass", fontWeight: "600" }}>
            Open plots on EMI's upto 50 Months
          </span>
        </p>
        <div>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="tel:7013618629"
          >
            <button>Book a site visit</button>
          </a>
        </div>
        <div className="hero__info-container">
          <InfoElement
            head={
              <p>
                230<span style={{ color: "#567ae5" }}>+</span>
              </p>
            }
            sub_head={
              <p>
                Happy <br /> Client
              </p>
            }
          />
          <InfoElement
            head={
              <p>
                51<span style={{ color: "#567ae5" }}>+</span>
              </p>
            }
            sub_head={
              <p>
                Ventures
                <br /> Completed
              </p>
            }
          />
          <InfoElement
            head={
              <p>
                43<span style={{ color: "#567ae5" }}>+</span>
              </p>
            }
            sub_head={
              <p>
                Years <br /> of Service
              </p>
            }
          />
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__img-container">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
