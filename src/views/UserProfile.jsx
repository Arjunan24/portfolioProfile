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
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/profilepic.jpeg";
import logo from "assets/img/darktheme1.jpg";


class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                content={
               <div className="w3-animate-left w-full py-2">
                 <div className="flex border-b border-gray-300 py-2">

                 <div className="w-full md:w-1/2 flex ">
                   <h5 className="text-3xl">Full name</h5>
                 </div>
                 <div className="w-full md:w-1/2 flex">
                   <h5 className="text-3xl"> : Arjun Sankar</h5>
                 </div>
                 </div>
                 <div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex py-2">
  <h5 className="text-3xl"> Age</h5>
</div>
<div className="w-full md:w-1/2 flex">
  <h5 className="text-3xl">: 25</h5>
</div>
</div>
<div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex py-2">
  <h5 className="text-3xl">Email ID</h5>
</div>
<div className="w-full md:w-1/2 flex">
  <h5 className="text-3xl">: arjunsankar24@gmail.com</h5>
</div>
</div>
<div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex py-2">
  <h5 className="text-3xl">Mobile Number</h5>
</div>
<div className="w-full md:w-1/2 flex">
  <h5 className="text-3xl">: +91 9043540543</h5>
</div>
</div> 

<div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex py-2">
  <h5 className="text-3xl">Experience</h5>
</div>
<div className="w-full md:w-1/2 flex">
  <h5 className="text-3xl">: 2</h5>
</div>
</div> 
<div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex py-2">
  <h5 className="text-3xl">Nationality</h5>
</div>
<div className="w-full md:w-1/2 flex">
  <h5 className="text-3xl">: Indian</h5>
</div>
</div>
 
 <div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex py-2">
  <h5 className="text-3xl">Address</h5>
</div>
<div className="w-full md:w-1/2 flex">
  <h5 className="text-3xl">: 7/77,Bharath nagar 3rd street 
     ernavoor chennai-57</h5>
</div>
</div>

               </div>
              
              }
              />
            </Col>
            <Col md={4} className="w3-animate-right ">
              <UserCard
                bgImage={logo}
                avatar={avatar}
                name="Arjun Sankar"
                userName="SOFTWARE DEVELOPER"
                description={

                  <span>
                  <br/>
I am a front end developer  
                    <br />
I can  give responsive webiste and clear code.
I provide more web animations  in our sites.               
                                    </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <a href="https://www.facebook.com/" target="_blank">

                      <i className="fa fa-facebook-square" />
                      </a>
                    </Button>
                    
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    
    
    );
  }
}

export default UserProfile;
