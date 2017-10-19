import {
  UPDATE_LOAN_TYPE,
  UPDATE_PROPERTY_TYPE,
  UPDATE_CITY,
  PROP_TO_BE_USED_ON,
  FOUND,
  REAL_ESTATE_AGENT,
  COST,
  DOWN_PAYMENT,
  CREDIT,
  HISTORY,
  LINE_ONE,
  LINE_TWO,
  LINE_THREE,
  FIRST,
  LAST,
  EMAIL
} from './action_types';

import initialState from './initialState';

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOAN_TYPE:
      return Object.assign({}, state, { loanType: action.payload });
    case UPDATE_PROPERTY_TYPE:
      return Object.assign({}, state, { propertyType: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case PROP_TO_BE_USED_ON:
      return Object.assign({}, state, { propToBeUsedOn: action.payload });
    case FOUND:
      return Object.assign({}, state, { found: action.payload });
    case REAL_ESTATE_AGENT:
      return Object.assign({}, state, { realEstateAgent: action.payload });
    case COST:
      return Object.assign({}, state, { cost: action.payload });
    case DOWN_PAYMENT:
      return Object.assign({}, state, { downPayment: action.payload });
    case CREDIT:
      return Object.assign({}, state, { credit: action.payload });
    case HISTORY:
      return Object.assign({}, state, { history: action.payload });
    case LINE_ONE:
      return Object.assign({}, state, { addressOne: action.payload });
    case LINE_TWO:
      return Object.assign({}, state, { addressTwo: action.payload });
    case LINE_THREE:
      return Object.assign({}, state, { addressThree: action.payload });
    case FIRST:
      return Object.assign({}, state, { firstName: action.payload });
    case LAST:
      return Object.assign({}, state, { lastName: action.payload });
    case EMAIL:
      return Object.assign({}, state, { email: action.payload });
    default:
      return state;
  }
}

export default reducer;
