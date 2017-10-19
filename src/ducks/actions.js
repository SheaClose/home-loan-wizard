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

export function updateLoanType(payload) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload
  };
}
export function updatePropertyType(payload) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload
  };
}
export function updateCity(payload) {
  return {
    type: UPDATE_CITY,
    payload
  };
}
export function propToBeUsedOn(payload) {
  return {
    type: PROP_TO_BE_USED_ON,
    payload
  };
}
export function handleFound(payload) {
  return {
    type: FOUND,
    payload
  };
}
export function handleRealEstateAgent(payload) {
  return {
    type: REAL_ESTATE_AGENT,
    payload
  };
}
export function updateCost(payload) {
  return {
    type: COST,
    payload
  };
}
export function updateDownPayment(payload) {
  return {
    type: DOWN_PAYMENT,
    payload
  };
}
export function updateCredit(payload) {
  return {
    type: CREDIT,
    payload
  };
}
export function updateHistory(payload) {
  return {
    type: HISTORY,
    payload
  };
}
export function updateAddLineOne(payload) {
  return {
    type: LINE_ONE,
    payload
  };
}
export function updateAddLineTwo(payload) {
  return {
    type: LINE_TWO,
    payload
  };
}
export function updateAddLineThree(payload) {
  return {
    type: LINE_THREE,
    payload
  };
}
export function updateFirst(payload) {
  return {
    type: FIRST,
    payload
  };
}
export function updateLast(payload) {
  return {
    type: LAST,
    payload
  };
}
export function updateEmail(payload) {
  return {
    type: EMAIL,
    payload
  };
}
