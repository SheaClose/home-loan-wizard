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

function actionCreator(payload, type) {
  return {
    payload,
    type
  };
}

export function updateLoanType(payload) {
  return actionCreator(payload, UPDATE_LOAN_TYPE);
}

export function updatePropertyType(payload) {
  return actionCreator(payload, UPDATE_PROPERTY_TYPE);
}

export function updateCity(payload) {
  return actionCreator(payload, UPDATE_CITY);
}

export function propToBeUsedOn(payload) {
  return actionCreator(payload, PROP_TO_BE_USED_ON);
}

export function handleFound(payload) {
  return actionCreator(payload, FOUND);
}

export function handleRealEstateAgent(payload) {
  return actionCreator(payload, REAL_ESTATE_AGENT);
}

export function updateCost(payload) {
  return actionCreator(payload, COST);
}

export function updateDownPayment(payload) {
  return actionCreator(payload, DOWN_PAYMENT);
}

export function updateCredit(payload) {
  return actionCreator(payload, CREDIT);
}

export function updateHistory(payload) {
  return actionCreator(payload, HISTORY);
}

export function updateAddLineOne(payload) {
  return actionCreator(payload, LINE_ONE);
}

export function updateAddLineTwo(payload) {
  return actionCreator(payload, LINE_TWO);
}

export function updateAddLineThree(payload) {
  return actionCreator(payload, LINE_THREE);
}

export function updateFirst(payload) {
  return actionCreator(payload, FIRST);
}

export function updateLast(payload) {
  return actionCreator(payload, LAST);
}

export function updateEmail(payload) {
  return actionCreator(payload, EMAIL);
}
