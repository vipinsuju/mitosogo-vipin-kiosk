import "./style.css"
export const Signup = () => {
  return (
    <section className="cta-section">
      <h2 className="mb-40">Sign up and try Hexnode free for 14 days!</h2>
      <div className="cta-container">
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
        />
        <button className="get-started-btn">Get Started</button>
      </div>
      <p className="demo-request">
        No credit cards required.{" "}
        <a
          href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/"
          className="demo-link"
        >
          Request a demo
        </a>
        <span className="arrow">&#10145;</span>
      </p>
    </section>
  );
};
