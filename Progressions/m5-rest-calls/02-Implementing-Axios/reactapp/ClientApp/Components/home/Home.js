import React from 'react';
import PropTypes from 'prop-types';
import HomeHeader from './HomeHeader';
import HomeContainer from './HomeContainer';

export default function Home(props) {
  return (
    <div>
      <HomeHeader />
      <HomeContainer />
    </div>
  );
}

Home.propTypes = {
  notify: PropTypes.func,
};
