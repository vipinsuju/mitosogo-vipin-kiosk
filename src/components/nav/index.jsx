import  { useEffect } from "react";
import "./style.css";

export const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 0) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <div className="container">
        <div className="logo-nav">
          <div className="logo">
            <img src="logo2.png" alt="Logo" />
          </div>
          <nav>
            <ul className="nav-links mb-md-0 fw-bold">
              <li>
                <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/"  target="_blank">Solutions</a>
              </li>
              <li>
                <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/"  target="_blank">Partners</a>
              </li>
              <li>
                <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/"  target="_blank">Blogs</a>
              </li>
              <li>
                <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/"  target="_blank">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-button">
          <button>14 Day Free Trial</button>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="mobile-menu">
        <ul>
          <li>
            <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/"  target="_blank">Solutions</a>
          </li>
          <li>
            <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/"  target="_blank">Partners</a>
          </li>
          <li>
            <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/"  target="_blank">Blogs</a>
          </li>
          <li>
            <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/"  target="_blank">Contact Us</a>
          </li>
          <li>
            <button>14 Day Free Trial</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
