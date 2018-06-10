import React from 'react';

export default function HomeSpeakersCarousel() {
  return (
    <div className="speakers-carousel">
      <div className="speakers-carousel__title">Meet the speakers</div>
      <div
        id="speakersCarouselIndicators"
        className="carousel slide d-flex align-items-center"
        data-interval="false"
      >
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item  active ">
            <div className="row">
              <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
                <div className="speaker-photo">
                  <img
                    src="assets/images/speakers/speaker0.png"
                    alt="Diane Green"
                  />
                </div>
                <div>
                  <div className="speaker-name">Diane Green</div>
                  <div className="speaker-position">Senior Vice President</div>
                  <div className="speaker-company">Google Cloud</div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
                <div className="speaker-photo">
                  <img
                    src="assets/images/speakers/speaker1.png"
                    alt="Marc Andreessen"
                  />
                </div>
                <div>
                  <div className="speaker-name">Marc Andreessen</div>
                  <div className="speaker-position">
                    Cofounder and General Partner
                  </div>
                  <div className="speaker-company">Andreessen Horowitz</div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
                <div className="speaker-photo">
                  <img
                    src="assets/images/speakers/speaker2.png"
                    alt="Llewellyn Falco"
                  />
                  <div>
                    <div className="speaker-name">Llewellyn Falco</div>
                    <div className="speaker-position">
                      Inventor of Approval testing
                    </div>
                    <div className="speaker-company" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
                <div className="speaker-photo">
                  <img
                    src="assets/images/speakers/speaker3.png"
                    alt="Stefania Kaczmarczyk"
                  />
                  <div>
                    <div className="speaker-name">Stefania Kaczmarczyk</div>
                    <div className="speaker-position">Developer advocate</div>
                    <div className="speaker-company">IBM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="row">
              <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
                <div className="speaker-photo">
                  <img
                    src="assets/images/speakers/speaker0.png"
                    alt="Diane Green"
                  />
                  <div>
                    <div className="speaker-name">Diane Green</div>
                    <div className="speaker-position">
                      Senior Vice President
                    </div>
                    <div className="speaker-company">Google Cloud</div>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
                  <div className="speaker-photo">
                    <img
                      src="assets/images/speakers/speaker1.png"
                      alt="Marc Andreessen"
                    />
                  </div>
                  <div className="speaker-name">Marc Andreessen</div>
                  <div className="speaker-position">
                    Cofounder and General Partner
                  </div>
                  <div className="speaker-company">Andreessen Horowitz</div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
                <div className="speaker-photo">
                  <img
                    src="assets/images/speakers/speaker2.png"
                    alt="Llewellyn Falco"
                  />
                </div>
                <div>
                  <div className="speaker-name">Llewellyn Falco</div>
                  <div className="speaker-position">
                    Inventor of Approval testing
                  </div>
                </div>
                <div className="speaker-company" />
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
              <div className="speaker-photo">
                <img
                  src="assets/images/speakers/speaker3.png"
                  alt="Stefania Kaczmarczyk"
                />
              </div>
              <div>
                <div className="speaker-name">Stefania Kaczmarczyk</div>
                <div className="speaker-position">Developer advocate</div>
                <div className="speaker-company">IBM</div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row">
              <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
                <div className="speaker-photo">
                  <img
                    src="assets/images/speakers/speaker0.png"
                    alt="Diane Green"
                  />
                </div>
                <div>
                  <div className="speaker-name">Diane Green</div>
                  <div className="speaker-position">
                    Senior Vice President
                  </div>
                  <div className="speaker-company">Google Cloud</div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
                <div className="speaker-photo">
                  <img
                    src="assets/images/speakers/speaker1.png"
                    alt="Marc Andreessen"
                  />
                </div>
                <div className="speaker-name">Marc Andreessen</div>
                <div className="speaker-position">
                  Cofounder and General Partner
                </div>
                <div className="speaker-company">Andreessen Horowitz</div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
              <div className="speaker-photo">
                <img
                  src="assets/images/speakers/speaker2.png"
                  alt="Llewellyn Falco"
                />
              </div>
              <div>
                <div className="speaker-name">Llewellyn Falco</div>
                <div className="speaker-position">
                  Inventor of Approval testing
                </div>
                <div className="speaker-company" />
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block">
              <div className="speaker-photo">
                <img
                  src="assets/images/speakers/speaker3.png"
                  alt="Stefania Kaczmarczyk"
                />
              </div>
              <div>
                <div className="speaker-name">Stefania Kaczmarczyk</div>
                <div className="speaker-position">Developer advocate</div>
                <div className="speaker-company">IBM</div>
              </div>
            </div>
          </div>

          <ol className="carousel-indicators">
            <li
              data-target="#speakersCarouselIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#speakersCarouselIndicators" data-slide-to="1" />
            <li data-target="#speakersCarouselIndicators" data-slide-to="2" />
          </ol>
        </div>
        <a
          className="carousel-control-prev"
          href="#speakersCarouselIndicators"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-angle-left" aria-hidden="true" />
        </a>
        <a
          className="carousel-control-next"
          href="#speakersCarouselIndicators"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-angle-right" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
