import React from "react";

function Footer() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: "rgb(10, 66, 117, 0.9)", width: "100%" }}>
      {/* <div className="container p-4 pb-0" style={{ backgroundColor: "#0a4275", width: "100%" }}>
        <section className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#0a4275", width: "100%" }}>
          <p>
            <span className="me-3">Register Now</span>
          </p>
        </section>
      </div> */}
      <div></div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 <a href="/" className="navbar-brand">
        Trave<span>Light</span>
      </a>
      </div>
    </footer>
  );
}

export default Footer;
