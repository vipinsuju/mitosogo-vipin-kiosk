import  { useEffect } from "react";
import "./style.css";
export const Accordian = () => {
  useEffect(() => {
    // accordian
    // Get the image element
    const image = document.getElementById("dynamicImage");

    // Define the image sources for each accordion item
    const imageSrcList = [
      "tab_image.webp", // Image for Accordion Item #1
      "hexnode-kiosk-firstfold image.webp", // Image for Accordion Item #2
      "tab_image3.webp", // Image for Accordion Item #3
    ];

    // Add event listeners for each accordion button
    document
      .querySelector("#flush-collapseOne")
      .addEventListener("show.bs.collapse", function () {
        image.src = imageSrcList[0]; // Change to image 1 when Accordion Item #1 is clicked
      });

    document
      .querySelector("#flush-collapseTwo")
      .addEventListener("show.bs.collapse", function () {
        image.src = imageSrcList[1]; // Change to image 2 when Accordion Item #2 is clicked
      });

    document
      .querySelector("#flush-collapseThree")
      .addEventListener("show.bs.collapse", function () {
        image.src = imageSrcList[2]; // Change to image 3 when Accordion Item #3 is clicked
      });

    // Get all accordion button elements
    const accordionButtons = document.querySelectorAll(".accordion-button");

    // Loop through each accordion button and add a click event listener
    accordionButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        console.log("===>Click");
        const targetId = this.getAttribute("data-bs-target");
        const collapseElement = document.querySelector(targetId);

        // Toggle the accordion collapse
        if (collapseElement.classList.contains("show")) {
          collapseElement.classList.remove("show");
          this.classList.add("collapsed");
        } else {
          // Close any other open accordion items if desired (optional)
          const openItems = document.querySelectorAll(
            ".accordion-collapse.show"
          );
          openItems.forEach(function (openItem) {
            openItem.classList.remove("show");
            openItem.previousElementSibling
              .querySelector(".accordion-button")
              .classList.add("collapsed");
          });

          collapseElement.classList.add("show");
          this.classList.remove("collapsed");
        }
      });
    });
  }, []);

  return (
    <section className="accord">
      <div className="accordian-card m-5">
        <h1 className="text-center accod-title">
          What additional possibilities does the Kiosk mode offer?
        </h1>
        <div className="row">
          <div className="col-md-4 col-12">
            <img
              className="image-accod"
              id="dynamicImage"
              src="mob.png"
              alt="default"
            />
          </div>
          <div className="col-md-7 col-12">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header fw-bold" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <span className="accord-header">
                      {" "}
                      Effortless kiosk deployment & management
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Deploy kiosk-enabled devices straight out of the box. Flash
                    a custom Android Enterprise, Samsung Knox or ROM with
                    Hexnode App on the devices by collaborating with OEM vendors
                    who provide specially configured ROMs.
                    <br />
                    <span>
                      <a className="try-link" href="https://google.com">
                        {" "}
                        Try for free
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header fw-bold" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <span className="accord-header">
                      {" "}
                      Customized interface for brand visibility
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  Create a locked-down environment with customized interface. Maximize brand visibility 
                  and leave a lasting impression by showcasing products,
                   services and key messages directly to users through the customized interface.
                    <br />
                    <span>
                      <a className=" try-link" href="https://google.com">
                        {" "}
                        Try for free
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header fw-bold" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <span className="accord-header">
                      {" "}
                      What more can you do with Hexnode kiosk?
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. 
                  Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.
                    <br />
                    <span>
                      <a className=" try-link" href="https://google.com">
                        {" "}
                        Try for free
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header fw-bold" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    <span className="accord-header">
                      {" "}
                      Secure and update your app ecosystem
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  Streamline the deployment and management on apps on your kiosk devices. Save your time and effort,
                   ensure security and improve your efficiency using Hexnode’s silent app installation and update features.
                    <br />
                    <span>
                      <a className=" try-link" href="https://google.com">
                        {" "}
                        Try for free
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header fw-bold" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    <span className="accord-header">
                      {" "}
                      Provide an easy-to-use interface for end-users
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  Give your end-users the power to control their devices without overwhelming them with options. 
                  An intuitive interface to let them access only the essential settings they need.
                   Make it easy for them to unlock the full potential of your devices hassle-free.
                    <br />
                    <span>
                      <a className=" try-link" href="https://google.com">
                        {" "}
                        Try for free
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
