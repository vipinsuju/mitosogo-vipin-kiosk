import  { useEffect } from "react";

import "./style.css";

export const Hero = () => {
  useEffect(() => {
    // Sticky header background change on scroll
    window.addEventListener("scroll", function () {
      const header = document.getElementById("header");
      if (window.scrollY > 50) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    });
  }, []);

  return (
    <section className="hero py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start  mb-md-0">
            <h1 className="text-white mb-40 ">
              Turn your devices into kiosks in a few minutes with Hexnode UEM
            </h1>

            <form className="d-flex flex-column flex-md-row gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="hexnode-kiosk-firstfold image.webp"
              alt="Hero"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ColumnContent = () => {
  return (
    <section className="column-content">
      <div className="col-content container">
        <div className="column">
          <h2 className="text-white">IDC</h2>
          <p>
            Hexnode is listed as a leader and a major player in IDC MarketScape
            UEM Vendors Assessment Reports 2024.
          </p>
        </div>
        <div className="separator"></div>
        <div className="column">
          <h2 className="text-white">Gartner</h2>
          <p>
            Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic
            Quadrant for Unified Endpoint Management tools 2022.
          </p>
        </div>
        <div className="separator"></div>
        <div className="column">
          <h2 className="text-white">Forrester</h2>
          <p>
            Forrester includes Hexnode as a Notable vendor in The Unified
            Endpoint Management Landscape, Q3 2023.
          </p>
        </div>
      </div>
    </section>
  );
};
