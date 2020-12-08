/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Human Resources Application
  Author: Hazem Ashraf
  Author URL: https://www.linkedin.com/in/hazem-ashraf-1242169b/
==========================================================================================*/

export default [
  {
    url: "/",
    name: "Dashboard",
    slug: "home",
    icon: "HomeIcon"
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
        slug: "main-report"
      },
      {
        url: "/hr-report/vacation-report",
        name: "Vacation Report",
        slug: "main-vacation-report"
      },
      {
        url: "/hr-report/mission-report",
        name: "Mission Report",
        slug: "mission-report"
      },
      {
        url: "/hr-report/excuse-report",
        name: "Excuse Report",
        slug: "excuse-report",
      },
    ]
  },
  {
    url: null,
    name: "ERP Reports",
    icon: "FileIcon",
    submenu: [
      {
        url: "",
        name: "HRWorkerPlanner(Importing Shifts)",
        slug: "HRWorkerPlanner"
      },
      {
        url: "",
        name: "Uploading HRTimeAttendance_IN&OUT",
        slug: "HRTimeAttendance_IN&OUT"
      }
    ]
  },
  {
    url: "/GetAll/Company",
    name: "Company",
    icon: "TrendingUpIcon",
    slug: "GetAll Companies"
  },
  {
    url: "/GetAll/Department",
    name: "Department",
    icon: "LayersIcon",
    slug: "GetAll Departments"
  },
  {
    url: "/GetAll/Job",
    name: "Job",
    icon: "BriefcaseIcon",
    slug: "GetAll jobs"
  },
  {
    url: "/GetAll/Employee",
    name: "Employee",
    icon: "UserIcon",
    slug: "GetAll Employees"
  },
  {
    url: null,
    name: "Location",
    icon: "GlobeIcon",
    submenu: [
      {
        url: "/location/getall/cities",
        name: "Cities",
        icon: "MapPinIcon",
        slug: "GetAll Cities"
      },
      {
        url: "/location/getall/areas",
        name: "Areas",
        icon: "MapIcon",
        slug: "GetAll Areas"
      }
    ]
  }
];
