
import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="https://google.com" className="footer-link" target="_blank" >
          Terms of Use
        </a>{" "}
        -
        <a href="https://google.com" className="footer-link" target="_blank" >
          Privacy
        </a>{" "}
        -
        <a href="https://google.com" target="_blank" className="footer-link">
          Cookies
        </a>
      </div>
      <div className="footer-right">
        <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
