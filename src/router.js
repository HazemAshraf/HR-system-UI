/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Traffic Management Application
  Author: Hazem Ashraf
  Author URL: https://www.linkedin.com/in/hossam-ali-7bb41810b/
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";
//import Store from "./store/store.js";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: "",
      component: () => import("./layouts/main/Main.vue"),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: "/",
          name: "home",
          component: () => import("./views/Home.vue")
        },
        {
          path: "/hr-report/attendance",
          name: "attendance",
          component: () => import("@/views/hr-report/attendance/Attendance.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "HR Report" },
              { title: "Attendance", active: true }
            ],
            pageTitle: "Attendance",
            rule: "editor"
          }
        },
        {
          path: "/hr-report/time-attendance",
          name: "time-attendance",
          component: () => import("@/views/hr-report/time-attendance/TimeAttendance.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "HR Report" },
              { title: "Time Attendance", active: true }
            ],
            pageTitle: "Time Attendance",
            rule: "editor"
          }
        },
        {
          path: "/hr-report/main-report",
          name: "main-report",
          component: () => import("@/views/hr-report/main-report/MainReport.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "HR Report" },
              { title: "Main Report", active: true }
            ],
            pageTitle: "Main Report",
            rule: "editor"
          }
        },
        {
          path: "/Add/Employee",
          name: "main-report",
          component: () => import("@/views/Employee/Add.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Employee" },
              { title: "Add Employee", active: true }
            ],
            pageTitle: "Add Employee",
            rule: "editor"
          }
        },

      ]
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: "/login",
          name: "login",
          component: () => import("@/views/pages/Login.vue")
        },
        {
          path: "/pages/error-404",
          name: "page-error-404",
          component: () => import("@/views/pages/Error404.vue")
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/pages/error-404"
    }
  ]
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

router.beforeEach((to, from, next) => {
  if (
    to.path === "/pages/error-404" ||
    to.path === "/pages/error-500"
    // to.path === "/pages/register" ||
    // to.path === "/callback" ||
  ) {
    return next();
  }

  // If auth required, check login. If login fails redirect to login page

  //if (
    //!Store.state.auth.isUserLoggedIn() &&
    //to.path !== "/login" &&
   // from.path !== "/login"
  //) {
    // router.push('/pages/login').catch(() => {})
    // return next("/pages/login");
   // router.push({ name: "login", query: {} });
  //}
  //if (Store.state.auth.isUserLoggedIn() && to.path === "/login") {
   // router.push({ name: "home", query: {} });
    // return next("/");
  //}

  return next();
});

export default router;
