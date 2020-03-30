/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";
import projectExperience from "views/projectExperience.js";
import Resume from "views/Resume.js";


const dashboardRoutes = [
  
  {
    path: "/myprofile",
    name: "About Me",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "pe-7s-next-2",
    component: projectExperience,
    layout: "/admin"
  },
  {
    path: "/resume",
    name: "Resume",
    icon: "pe-7s-diskette",
    component: Resume,
    layout: "/admin"
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "icons",
  //   icon: "pe-7s-map-marker",
  //   component: Icons,
  //   layout: "/admin"
  // },
  
  
];

export default dashboardRoutes;
