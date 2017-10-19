import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleRealEstateAgent } from '../../ducks/actions';

class WizardFive extends Component {
  render() {
    const { handleRealEstateAgent } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>Are you currently working with a real estate agent?</p> <br />
          <div className="row">
            <Link to="/wSix">
              <button onClick={() => handleRealEstateAgent(true)}>Yes</button>
            </Link>
            <Link to="/wSix">
              <button onClick={() => handleRealEstateAgent(false)}>No </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { handleRealEstateAgent })(WizardFive);
