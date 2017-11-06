/* global AD_HOST */

import React, { Component } from 'react';
import uniqueRandomNumber from '../../utils/uniqueRandomNumber';

class Ad extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({ random: uniqueRandomNumber() });
  }

  render() {
    const { random } = this.state;

    if (!random) {
      return null;
    }

    return (
      <div key={random} className="column is-10 is-offset-1 has-text-centered">
        <img alt="Ad" className="ad" src={`${AD_HOST}/ad?r=${random}`} />
      </div>
    );
  }
}

export default Ad;
