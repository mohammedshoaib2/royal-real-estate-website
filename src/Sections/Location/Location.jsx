import React from "react";
import "./Location.css";

function Location() {
  return (
    <div id="location" className="location">
      <div className="location__heading">
        <h1>Visit our office</h1>
      </div>
      <div className="location__frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d952.024379654695!2d78.50467826605161!3d17.359039896638954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997ff8f90793%3A0x443ca7c8f40f156c!2sCAFE%20TENSION%20FREE!5e0!3m2!1sen!2sin!4v1736094060725!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
