/* global AD_HOST */

import React from 'react';
import PropTypes from 'prop-types';

const Ad = ({ random }) => (
  <div key={random} className="column is-10 is-offset-1 has-text-centered">
    <img alt="Ad" className="ad" src={`${AD_HOST}/ad?r=${random}`} />
  </div>
);

Ad.propTypes = {
  random: PropTypes.number.isRequired,
};

export default Ad;
