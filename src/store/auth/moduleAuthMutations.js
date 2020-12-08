/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Human Resources Application
  Author: Hazem Ashraf
  Author URL: https://www.linkedin.com/in/hazem-ashraf-1242169b/
==========================================================================================*/

// import axios from "../../http/axios/index.js"
import axios from "@/axios.js";
export default {
  SET_BEARER(state, accessToken) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
  }
}
