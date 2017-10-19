import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateFirst, updateLast, updateEmail } from '../../ducks/actions';

class WizardTen extends Component {
  render() {
    const { updateFirst, updateLast, updateEmail } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>What is your name?</p> <br />
          <input
            type="text"
            placeholder="First Name"
            onChange={e => updateFirst(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={e => updateLast(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            onChange={e => updateEmail(e.target.value)}
          />
          <Link to="/wEleven">
            <button className="margin-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateFirst, updateLast, updateEmail })(
  WizardTen
);
