import React from 'react';

export default function HomeSessionCount() {
  return (
    <div className="events__header d-flex align-items-center flex-column flex-md-row justify-content-between">
      <div className="events__header__title">120 Sessions</div>
      <div className="events__header__video-link">
        <a href="">
          <i className="fa fa-video-camera" aria-hidden="true" /> Video: How to
          schedule your session
        </a>
      </div>
    </div>
  );
}
