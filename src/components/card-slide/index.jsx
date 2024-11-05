
export const CardSlide = () => {
  return (
    <section className="card-slide">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row card-move">
              <div className="col-md-4 col-12">
                <img src="justin-modrak.webp" alt="author" />
              </div>
              <div className="col-md-7 col-12 content-card">
                <h3 className="text-align">
                  "Most complete MDM solution I found, and I tested many of
                  them, including major names"
                </h3>
                <p className="author-name">Dalibor Kruljac</p>
                <p className="author-company">KAMELEYA LTD</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row card-move">
              <div className="col-md-4 col-12">
                <img src="justin-modrak.webp" alt="author" />
              </div>
              <div className="col-md-7 col-12 content-card">
                <h3 className="text-align">
                  "It seemed to be in-line with everything we were looking at."
                </h3>
                <p className="author-name">Chris Robins</p>
                <p className="author-company">Executive Account Manager, NCS</p>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
            <div className="row card-move">
              <div className="col-md-4 col-12">
                <img src="justin-modrak.webp" alt="author" />
              </div>
              <div className="col-md-7 col-12 content-card">
                <h3 className="text-align">
                  "Most complete MDM solution I found, and I tested many of
                  them, including major names"
                </h3>
                <p className="author-name">Dalibor Kruljac</p>
                <p className="author-company">KAMELEYA LTD</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
