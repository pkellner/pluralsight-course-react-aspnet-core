import React from 'react';

export default function HomeFilterView() {
  return (
    <div className="filter-view-type container-fluid">
      <div className="row">
        <div className="filter-view-type__results col-12 col-md-7 text-center text-md-left">
          <span className="results">2</span> sessions out of 120 match your
          criteria.
          <a href="" className="reset-link">
            Reset and show all sessions
          </a>
        </div>
        <div className="filter-view-type__buttons col-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-end">
          <a href="" className="js-list-view-button active">
            <i className="fa fa-th-list" aria-hidden="true" />
            List
          </a>
          <a href="" className="js-grouped-view-button">
            <i className="fa fa-columns" aria-hidden="true" />
            By time
          </a>
          <a href="" className="js-expanded-view-button">
            <i className="fa fa-th-large" aria-hidden="true" />
            Expanded
          </a>
        </div>
      </div>
    </div>
  );
}
