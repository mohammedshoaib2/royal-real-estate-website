import React from "react";
import "./Ventures.css";
import Card from "./Card";
import vijaywadaHighway from "../../assets/vijaywadaHighway.png";
import sagarHighway from "../../assets/sagarHighway.png";
import warangalHighway from "../../assets/warangalHighway.png";

function Ventures() {
  const ventures_text = [
    {
      title: "Vijaywada Highway",
      description:
        "Our Vijaywada Highway Venture is a HMDA approved layout with gated community — open plots, independent houses, another landmark by Our partnered company",
      image: vijaywadaHighway,
      price: "23k",
      emi: "40",
    },
    {
      title: "Sagar Highway",
      description:
        "Our Sagar Highway Venture is another landmark by Our partnered company at Near Mall Town,Tirugalapally Village,Nagarjunasagar.",
      image: sagarHighway,
      price: "10k",
      emi: "50",
    },
    {
      title: "Warangal Highway",
      description:
        "Our Warangal Highway Venture is another landmark by Our partnered company ",
      image: warangalHighway,
      price: "12k",
      emi: "40",
    },
  ];
  return (
    <div id="ventures" className="ventures">
      <div className="ventures__heading">
        <h1>Ventures</h1>
        <p>
          Discover Our Ongoing Projects That Blend Innovation, Expertise, and
          Excellence Across Construction, <br /> Design, and Real Estate
          Development.
        </p>
      </div>

      <div className="ventures__main">
        {ventures_text.map((item) => {
          return (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              tenure={item.emi}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Ventures;
