import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { propToBeUsedOn } from '../../ducks/actions';

class WizardThree extends Component {
  render() {
    const { propToBeUsedOn } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p> What property are you looking to use the loan on? </p>
          <br />
          <div className="row">
            <Link to="/wFour">
              <button
                value="primaryHome"
                onClick={e => propToBeUsedOn('Primary Home')}
              >
                Primary Home
              </button>
            </Link>
            <Link to="/wFour">
              <button
                value="rentalProperty"
                onClick={e => propToBeUsedOn('Rental Property')}
              >
                Rental Property
              </button>
            </Link>
            <Link to="/wFour">
              <button
                value="secondaryHome"
                onClick={e => propToBeUsedOn('Secondary Home')}
              >
                Secondary Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { propToBeUsedOn })(WizardThree);
