import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  updateAddLineOne,
  updateAddLineTwo,
  updateAddLineThree
} from '../../ducks/actions';

class WizardNine extends Component {
  render() {
    const {
      updateAddLineOne,
      updateAddLineTwo,
      updateAddLineThree
    } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>What is your address?</p> <br />
          <input
            type="text"
            placeholder="Line One"
            onChange={e => updateAddLineOne(e.target.value)}
          />
          <input
            type="text"
            placeholder="Line Two"
            onChange={e => updateAddLineTwo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Line Three"
            onChange={e => updateAddLineThree(e.target.value)}
          />
          <Link to="/wTen">
            <button className="margin-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  updateAddLineOne,
  updateAddLineTwo,
  updateAddLineThree
})(WizardNine);
