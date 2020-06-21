import React  from "react";

export {GoogleMapLocation};

function GoogleMapLocation() {
    return (
      <div>
        <iframe
          title="Map of Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2296597832983!2d-75.80331488457449!3d45.35202621081294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce00ddfafe3125%3A0x3e12a200e776e05b!2sSouth%20Asian%20Supermarket!5e0!3m2!1sen!2sca!4v1592172714412!5m2!1sen!2sca"
          className="w-full xl:h-120"
          height="300"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    );
  }