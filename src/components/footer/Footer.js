import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
    <section
        className="Main_footer fixed-bottom"
        style={{  marginLeft: "200px", backgroundColor:"#eaf9f9" }}
      >
        <div
          className="text-center"
          style={{ backgroundColor: "#2f353a", color: "#fff" }}
        >
          Serene Tax &copy; 2022
        </div>
      </section>
    </>
  );
}

export default Footer;
