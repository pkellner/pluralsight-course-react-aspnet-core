import React from 'react';

export default function HomeHeader() {
  return (
    <div className="jumbo-events">
      <div className="container-main">
        <div className="row">
          <div className="col-12 col-sm-4 jumbo-events__info">
            <div className="jumbo-events__participants">527</div>
            <div className="jumbo-events__participants-label">Participants</div>
            <div className="jumbo-events__when-label">When</div>
            <div className="jumbo-events__when">April 1st 2017</div>
            <div className="jumbo-events__where-label">Where</div>
            <div className="jumbo-events__where">
              Evergreen College, San Jose, CA
            </div>
            <div className="jumbo-events__directions">
              <a href="">See directions</a>
            </div>
          </div>
          <div className="col-12 col-sm-8">
            <div className="jumbo-events__title">SVCC 2017</div>
            <div className="jumbo-events__description">
                Silicon Valley Code Camp is a community event where
                developers learn from fellow developers. We also have
                developer related topics that include software
                branding, legal issues around software as well as
                other topics developers are interested in hearing
                about.
            </div>
            <div className="jumbo-events__buttons">
              <div className="dropdown">
                <button
                  className="btn btn-white dropdown-toggle"
                  type="button"
                  id="dropdownEventsJumbo"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="dropdown__label--registered">
                    <i className="fa fa-check" aria-hidden="true" /> Registered
                  </span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownEventsJumbo"
                >
                  <a className="dropdown-item" href="">
                    Interested?
                  </a>
                  <a className="dropdown-item" href="">
                    Register
                  </a>
                  <a className="dropdown-item" href="">
                    Interested
                  </a>
                </div>
              </div>
              <a href="" className="btn btn-primary">
                Update your details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
