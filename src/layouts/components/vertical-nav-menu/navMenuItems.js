/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Traffic Management Application
  Author: Hazem Ashraf
  Author URL: https://www.linkedin.com/in/hossam-ali-7bb41810b/
==========================================================================================*/

export default [
  {
    url: "/",
    name: "Dashboard",
    slug: "home",
    icon: "HomeIcon",
  },
  {
    url: null,
    name: "HR Reports",
    icon: "FileTextIcon",
    submenu: [
     // {
      //  url: "/hr-report/attendance",
      //  name: "Attendance",
     //   slug: "attendance",
     // },
    //  {
      //  url: "/hr-report/time-attendance",
       // name: "Time-Attendance",
       // slug: "time-attendance",
     // },
      {
        url: "/hr-report/main-report",
        name: "Main Report",
        slug: "main-report",
      },
      {
        url: "",
        name: "Vacation Report",
        slug: "main-vacation-report",
      },
      {
        url: "",
        name: "Mission Report",
        slug: "mission-report",
      },

    ],
  },
  {
    url: null,
    name: "ERP Reports",
    icon: "FileIcon",
    submenu: [
      {
        url: "",
        name: "HRWorkerPlanner(Importing Shifts)",
        slug: "HRWorkerPlanner",
      },
      {
        url: "",
        name: "Uploading HRTimeAttendance_IN&OUT",
        slug: "HRTimeAttendance_IN&OUT",
      },
    ],
  },
  {
    url: null,
    name: "Employee",
    icon: "UserIcon",
    submenu: [
      {
        url: "/Add/Employee",
        name: "Add",
        icon: "UserIcon",
        slug: "Adding new Employee",
      },
    ],
  },

];
