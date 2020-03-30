
import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";

import logo from "../assets/img/amanSalama.jpeg"
import logo1 from "../assets/img/reactNativeamansalama.jpeg"
import logo2 from "../assets/img/saned.jpeg"


import Button from "components/CustomButton/CustomButton.jsx";

class ProjectExperience extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
            <div className="lg:flex md:w-screen mb-20 mt-5" >
         <div   class="w3-animate-top max-w-lg max-h-lg rounded overflow-hidden shadow-lg px-2">
  <img class="w-full" src={logo} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-3xl mb-2">AMAN (WEB APP)
</div>
    <p class="text-gray-700 text-md">
    A Web application for Sharjah government in which building owners downloads the template and fills the template with list of his buildings (that has to be inspected) and uploads it in the application.    </p>
    <p class="text-gray-500 text-md">React JS</p>

      </div>
  
</div>
<div  class="w3-animate-bottom max-w-lg max-h-lg  rounded overflow-hidden shadow-lg px-2">
  <img class="w-full" src={logo1} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-3xl mb-2">AMAN (MOBILE APP)</div>
    <p class="text-gray-700 text-md">
    A Mobile application for Sharjah government in which building owners downloads the template and fills the template with list of his buildings (that has to be inspected) and uploads it in the application.    </p>
    <p class="text-gray-500 text-md">React Native</p>
  </div>
  
</div>
<div class="  w3-animate-top max-w-lg max-h-lg  rounded overflow-hidden shadow-lg px-2">
  <img class="w-full" src={logo2} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-3xl mb-2">SPSA
</div>
    <p class="text-gray-700 text-md">
    A web application for Sharjah government in which building owners make a registration for their building inspection.
    </p>
    <p class="text-gray-500 text-md">Angular JS</p>

      </div>
  
</div>
</div>
        </Grid>
      </div>
    );
  }
}

export default ProjectExperience;
