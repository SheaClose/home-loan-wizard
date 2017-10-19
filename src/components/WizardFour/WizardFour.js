import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleFound } from '../../ducks/actions';

class WizardFour extends Component {
  render() {
    const { handleFound } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>Have you already found your new home?</p> <br />
          <div className="row">
            <Link to="/wFive">
              <button onClick={() => handleFound(true)}>Yes</button>
            </Link>
            <Link to="/wFive">
              <button onClick={() => handleFound(false)}>No </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { handleFound })(WizardFour);
