/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Item Name: Human Resources Application
  Author: Hazem Ashraf
  Author URL: https://www.linkedin.com/in/hazem-ashraf-1242169b/
==========================================================================================*/

export default {
    isUserLoggedIn: () => {
        return localStorage.getItem('accessToken') ? true : false
    },
}
