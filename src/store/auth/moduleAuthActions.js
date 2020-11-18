/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Traffic Management Application
  Author: Hazem Ashraf
  Author URL: https://www.linkedin.com/in/hossam-ali-7bb41810b/
==========================================================================================*/

import jwt from "../../http/requests/auth/jwt/index.js"

import router from '@/router'

export default {
 
    // JWT
    loginJWT({ commit }, payload) {
      return new Promise((resolve,reject) => {
        jwt.login(payload.userDetails.username, payload.userDetails.password)
          .then(response => {



            // If there's user data in response
            //if(response.status  === 200 ) {
              // Navigate User to homepage
              router.push(router.currentRoute.query.to || '/')


              // Set accessToken
              localStorage.setItem("accessToken", response.data.token)

              // Update user details
              // commit('UPDATE_USER_INFO', response.data.username, {root: true})

              // Set bearer token in axios
              commit("SET_BEARER", response.data.token);
              resolve(response)
            //}else {
              //reject({message: "Wrong username or Password"})
             // return
           // }

          })
          .catch(error => { reject(error) })
      })
    },
    fetchAccessToken() {
      return new Promise((resolve) => {
        jwt.refreshToken().then(response => { resolve(response) })
      })
    }
}
