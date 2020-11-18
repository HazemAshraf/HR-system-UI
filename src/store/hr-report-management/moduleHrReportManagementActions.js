/*=========================================================================================
  Author: Hazem Ashraf
  Author URL: https://www.linkedin.com/in/hossam-ali-7bb41810b/
==========================================================================================*/

import axios from "@/axios.js";

export default {

  // fetchItems({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get(`${process.env.VUE_APP_BASE_URI}/users/getAllHRWorkerPlanner`)
  //       .then(response => {
  //         commit("SET_ITEMS", response.data.data);
  //         resolve(response);
  //       })
  //       .catch(error => {
  //         reject(error);
  //       });
  //   });
  // },
  fetchItemsMainReport({ commit },items) {
    
    return new Promise((resolve, reject) => {

      axios
        .get(`${process.env.VUE_APP_BASE_URI}/dashboard/main_report/`, {
          params: {
            start_date: items.start_date,
            end_date: items.end_date,
            category: items.category.name,
            company: items.company.name,
            job_title: items.job_title,
            employee_name: items.employee_name,
            employee_code: items.employee_code,
            reporting_to: items.reporting_to,
            city: items.city,
            area: items.area,
            area_name: items.area_name,
            Absenteeism_Days: items.Absenteeism_Days
          }
        })
        .then(response => {
          commit("SET_ITEMS", response.data.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchItemsAttendance({ commit },items) {

    items.start_date_ms = new Date(items.start_date_ms).getTime();
    items.end_date_ms = new Date(items.end_date_ms).getTime();

    // console.log( items)
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.VUE_APP_BASE_URI}/users/generate_hr_time_attendance`, {
          params: {
            start_date_ms: items.start_date_ms,
            end_date_ms: items.end_date_ms
          }
        })
        .then(response => {
          commit("SET_ITEMS", response.data.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchItemsTimeAttendance({ commit },items) {

    items.start_date_ms = new Date(items.start_date_ms).getTime();
    items.end_date_ms = new Date(items.end_date_ms).getTime();
    // items = JSON.stringify(items);
    // console.log(items)
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.VUE_APP_BASE_URI}/users/generate_erp_hr_time_attendance`, {
          params: {
            start_date_ms: items.start_date_ms,
            end_date_ms: items.end_date_ms
          }
        })
        .then(response => {
          commit("SET_ITEMS", response.data.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

};
