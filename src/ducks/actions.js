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

const action = (payload, type) => ({ payload, type });
const updateLoanType = payload => action(payload, UPDATE_LOAN_TYPE);
const updatePropertyType = payload => action(payload, UPDATE_PROPERTY_TYPE);
const updateCity = payload => action(payload, UPDATE_CITY);
const propToBeUsedOn = payload => action(payload, PROP_TO_BE_USED_ON);
const handleFound = payload => action(payload, FOUND);
const handleRealEstateAgent = payload => action(payload, REAL_ESTATE_AGENT);
const updateCost = payload => action(payload, COST);
const updateDownPayment = payload => action(payload, DOWN_PAYMENT);
const updateCredit = payload => action(payload, CREDIT);
const updateHistory = payload => action(payload, HISTORY);
const updateAddLineOne = payload => action(payload, LINE_ONE);
const updateAddLineTwo = payload => action(payload, LINE_TWO);
const updateAddLineThree = payload => action(payload, LINE_THREE);
const updateFirst = payload => action(payload, FIRST);
const updateLast = payload => action(payload, LAST);
const updateEmail = payload => action(payload, EMAIL);

export {
  updateLoanType,
  updatePropertyType,
  updateCity,
  propToBeUsedOn,
  handleFound,
  handleRealEstateAgent,
  updateCost,
  updateDownPayment,
  updateCredit,
  updateHistory,
  updateAddLineOne,
  updateAddLineTwo,
  updateAddLineThree,
  updateFirst,
  updateLast,
  updateEmail
};
