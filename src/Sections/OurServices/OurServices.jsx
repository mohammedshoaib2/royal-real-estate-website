import React from "react";
import "./OurServices.css";
import construction from "../../assets/construction.png";
import openPlots from "../../assets/openPlots.png";
import interior from "../../assets/interior.png";
import farmhouse from "../../assets/farmhouse.png";
import sale from "../../assets/sale.png";
import purchase from "../../assets/purchase.png";
import Card from "./Card";

function OurServices() {
  const card_text = [
    {
      title: "Open Plots",
      description:
        "Own premium open plots on 0% interest EMIs—perfect for your dream home or investment!",
      image: openPlots,
    },
    {
      title: "Construction",
      description:
        "Building the foundation for a better future with precision, quality, and innovation in every structure we create.",
      image: construction,
    },
    {
      title: "Interior",
      description:
        "Transform your space with creative and functional interior design that reflects your style and needs.",
      image: interior,
    },
    {
      title: "Farm House",
      description:
        "Build your perfect retreat with custom farm house construction, combining comfort and nature in one unique space.",
      image: farmhouse,
    },
    {
      title: "Sale",
      description:
        "Discover great deals on resold properties, offering you the best value for your investment.",
      image: sale,
    },
    {
      title: "Purchase",
      description:
        "Acquire properties with ease, as we also purchase and offer the best deals in the market.",
      image: purchase,
    },
  ];
  return (
    <div id="services" className="ourservices">
      <div className="ourservices__heading">
        <h1>Our Services</h1>
        <p>
          It captures the essence of your services, showcasing construction,
          design, <br /> and property transactions.
        </p>
      </div>
      <div className="ourservices__main">
        {card_text.map((item, index) => {
          return (
            <Card
              key={item.title}
              index={`0${index + 1}`}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OurServices;
