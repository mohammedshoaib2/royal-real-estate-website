import React from "react";
import "./About.css";
import aboutImage from "../../assets/houseNew.png";
function About() {
  return (
    <div id="about" className="about">
      <div className="about__heading">
        <h1>About</h1>
        <p>
          Learn more about our journey, vision, and commitment to transforming
          <br /> real estate with innovation and trust.
        </p>
      </div>

      <div className="about__main">
        <div className="about__left">
          <img className="about__img" src={aboutImage} alt="house" />
        </div>
        <div className="about__right">
          <h2>Know us</h2>
          <p>
            50 PROJECTS AND ABOVE 2.2 LAKHS SATISFIED CUSTOMERS. Royal Real
            Estate and Developer's Founder is a renowned real estate person with
            a proud history spanning over 35 years.Royal Real Estate Founded
            with a vision to make quality homes accessible to all, we have
            successfully completed 51 projects with our partnered company and
            earned the trust of more than 2.3 lakh satisfied customers. Our
            commitment to excellence and customer satisfaction has been the
            cornerstone of our success. The unique selling proposition (USP) of
            Royal Real Estate. is the 0% interest rate on EMI, a standout
            feature that distinguishes the company in the market. For 35 years,
            we have been the only company offering this benefit, alongside
            affordable prices and special offers designed to help the common man
            easily purchase a piece of land. This approach reflects our
            dedication to making quality real estate accessible to everyone,
            easing the financial burden and turning the dream of homeownership
            into a reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
