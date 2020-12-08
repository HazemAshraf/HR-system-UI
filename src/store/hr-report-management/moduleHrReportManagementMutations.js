/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  IItem Name: Traffic Management Application
  Author: Hossam Ali
  Author URL: https://www.linkedin.com/in/hossam-ali-7bb41810b/
==========================================================================================*/

export default {
  SET_ITEMS(state, items) {
    state.items = items;
  },  
  SET_ITEMSV(state, items) {
    state.itemsVacation = items;
  },
  SET_ITEMSM(state, items) {
    state.itemsMission = items;
  },
  SET_ITEMSE(state, items) {
    state.itemsExcuse = items;
  },
};
