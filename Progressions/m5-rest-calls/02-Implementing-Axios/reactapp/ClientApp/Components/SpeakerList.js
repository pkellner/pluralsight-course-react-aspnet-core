import PropTypes from 'prop-types';
import React from 'react';
import SpeakerListItem from './SpeakerListItem';

export default function SpeakerList({ speakers }) {
  return (
    <div className="container-main speakers">
      <div className="row">
        <div className="col-12">
          <div>
            <div className="speakers-title">
              Speakers
              <span className="speakers-filters">
                {/*<div className="filter-bar__search input-group col-12 col-md-6">*/}
                  {/*<input*/}
                    {/*type="text"*/}
                    {/*className="form-control"*/}
                    {/*placeholder="Search for a name or company"*/}
                  {/*/>*/}
                  {/*<div className="input-group-addon filter-bar__search__button">*/}
                    {/*<i className="fa fa-search" aria-hidden="true" />*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="dropdown col-12 col-md-3">*/}
                  {/*<button*/}
                    {/*className="btn btn-white btn-white--bordered dropdown-toggle"*/}
                    {/*id="dropdownFilter"*/}
                    {/*data-toggle="dropdown"*/}
                    {/*aria-haspopup="true"*/}
                    {/*aria-expanded="false"*/}
                  {/*>*/}
                    {/*Select a day*/}
                  {/*</button>*/}
                  {/*<div*/}
                    {/*className="dropdown-menu"*/}
                    {/*aria-labelledby="dropdownFilter"*/}
                  {/*>*/}
                    {/*<a className="dropdown-item" href="" data-value="reset">*/}
                      {/*Select a day*/}
                    {/*</a>*/}
                  {/*</div>*/}
                {/*</div>*/}
              </span>
            </div>

            <div className="speakers-list">
              <div className="row speakers-list-row">
                {speakers.map(item => (
                  <SpeakerListItem
                    key={item.id}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    company={item.company}
                    imageUrl={item.imageUrl}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SpeakerList.propTypes = {
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      company: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  ),
};
