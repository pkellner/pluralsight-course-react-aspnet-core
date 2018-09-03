import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EventSessionRec extends Component {
  revealDetails = () => {
    this.setState({ isDetailsVisible: true });
  };

  hideDetails = () => {
    this.setState({ isDetailsVisible: false });
  };

  state = {
    isDetailsVisible: false,
  };


  render() {
    return (
      <div
        className="events-sessions-list__item row"
        onMouseLeave={this.hideDetails}
      >
        <div className="item col-12 col-sm-6 col-md-5 ">
          <div className="session-title">{this.props.title}</div>
          <div className="session-details">
              by <strong>{this.props.speakersNamesCsv}  <i>&nbsp;&nbsp;debug-sessionId: {this.props.id}</i> </strong>
          </div>
        </div>
        <div className="item col-12 col-sm-6 col-md-2">
          {/*<div className="session-date">{this.props.date}</div>*/}
        </div>

        {this.props.children}

        <div className="item col-12 col-sm-6 col-md-2 session-details-dropdown">
          <div
            className={`dropdown ${this.state.isDetailsVisible ? 'show' : ''}`}
            onMouseEnter={this.revealDetails}
            onMouseLeave={this.hideDetails}
          >
            <Link
              to={`/session-detail/${this.props.id}`}
              className="btn btn-link dropdown-toggle"
              id={`dropdownMenuDetailsList${this.props.id}`}
              aria-haspopup="true"
              aria-expanded={this.state.isDetailsVisible ? 'true' : 'false'}
            >
              Details
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right session-details-dropdown-content"
              aria-labelledby={`dropdownMenuDetailsList${this.props.id}`}
            >
              <div className="details-title">{this.props.title}</div>
              <div className="details-attendance">
                Attending: <strong>{this.props.attending}</strong> | Interested:{' '}
                <strong>{this.props.interested}</strong>
              </div>
              <div className="details-speakers clearfix">
                <div className="events-speaker d-flex align-items-center">
                  <div className="events-speaker-photo">
                    <img src={this.props.avatar} alt="Ron Lichty" />
                  </div>
                  <div className="events-speaker-description">
                    <div className="name">
                      {this.props.author}
                      {this.props.twitter && (
                        <a href={this.props.twitter}>
                          <span className="square-icon square-icon--twitter">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </span>
                        </a>
                      )}
                      {this.props.facebook && (
                        <a href={this.props.facebook}>
                          <span className="square-icon square-icon--facebook">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </span>
                        </a>
                      )}
                      {this.props.linkedin && (
                        <a href={this.props.linkedin}>
                          <span className="square-icon square-icon--linkedin">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </span>
                        </a>
                      )}
                      {this.props.googleplus && (
                        <a href={this.props.googleplus}>
                          <span className="square-icon square-icon--googleplus">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      )}
                    </div>
                    <div className="profession"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EventSessionRec.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

EventSessionRec.defaultProps = {
  attending: 0,
  interested: 0,
};
