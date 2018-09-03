import React from 'react';

export default function HomeSessionFilter() {
  return (
    <div className="filter-bar container-fluid">
      <div className="row filter-first-row">
        <div className="dropdown js-dictionarySessionTimes col-12 col-md-3">
          <button
            className="btn btn-white btn-white--bordered dropdown-toggle js-label"
            type="button"
            id="dropdownFilterTimes"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            All Dates
          </button>
          <div
            className="dropdown-menu js-items"
            aria-labelledby="dropdownFilterTimes"
          >
            <a
              className="dropdown-item js-dropdown-item"
              href=""
              data-value="reset"
            >
              All Dates
            </a>
          </div>
        </div>
        <div className="filter-bar__search input-group col-12 col-md-6">
          <input
            type="text"
            className="form-control js-events-text-search"
            placeholder="Search..."
          />
          <div className="input-group-addon filter-bar__search__button">
            <i className="fa fa-search" aria-hidden="true" />
          </div>
        </div>
        <div className="filter-bar__more-filters col-12 col-md-3 d-flex align-items-center">
          <span className="square-icon square-icon--primary ">
            <i className="fa fa-plus" aria-hidden="true" />
          </span>
          <span className="filter-bar__more-filters__label">More Filters</span>
        </div>
      </div>
      <div className="filter-second-row">
        <div className="dropdown js-dictionarySessionLevels">
          <button
            className="btn btn-white btn-white--bordered dropdown-toggle js-label"
            type="button"
            id="dropdownFilterLevels"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Session Level
          </button>
          <div
            className="dropdown-menu js-items"
            aria-labelledby="dropdownFilterLevels"
          >
            <a
              className="dropdown-item js-dropdown-item"
              href=""
              data-value="reset"
            >
              Session Level
            </a>
          </div>
        </div>
        <div className="dropdown js-dictionaryTracks">
          <button
            className="btn btn-white btn-white--bordered dropdown-toggle js-label"
            type="button"
            id="dropdownFilterTracks"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Track
          </button>
          <div
            className="dropdown-menu wide js-items"
            aria-labelledby="dropdownFilterTracks"
          >
            <a
              className="dropdown-item js-dropdown-item"
              href=""
              data-value="reset"
            >
              Track
            </a>
          </div>
        </div>
        <div className="dropdown js-dictionaryLectureRooms">
          <button
            className="btn btn-white btn-white--bordered dropdown-toggle js-label"
            type="button"
            id="dropdownFilterRooms"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Lecture Room
          </button>
          <div
            className="dropdown-menu js-items"
            aria-labelledby="dropdownFilterRooms"
          >
            <a
              className="dropdown-item js-dropdown-item"
              href=""
              data-value="reset"
            >
              Lecture Room
            </a>
          </div>
        </div>
        <div className="dropdown js-attendance">
          <button
            className="btn btn-white btn-white--bordered dropdown-toggle js-label"
            type="button"
            id="dropdownFilterDays"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            My attendance
          </button>
          <div
            className="dropdown-menu js-items"
            aria-labelledby="dropdownFilterDays"
          >
            <a
              className="dropdown-item js-dropdown-item"
              href=""
              data-value="reset"
            >
              My attendance
            </a>
            <a
              className="dropdown-item js-dropdown-item"
              href=""
              data-value="all"
            >
              All
            </a>
            <a
              className="dropdown-item js-dropdown-item"
              href=""
              data-value="interested"
            >
              Interested
            </a>
            <a
              className="dropdown-item js-dropdown-item"
              href=""
              data-value="attending"
            >
              Attending
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
