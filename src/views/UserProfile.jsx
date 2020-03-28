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

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                content={
               <div className="w-full ">
                 <div className="flex border-b border-gray-300">

                 <div className="w-full md:w-1/2 flex">
                   <h4 className="text-md">Full name</h4>
                 </div>
                 <div className="w-full md:w-1/2 flex">
                   <h4 className="text-md"> : Arjun Sankar</h4>
                 </div>
                 </div>
                 <div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md"> Age</h4>
</div>
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">: 25</h4>
</div>
</div>
<div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">Email ID</h4>
</div>
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">: arjunsankar24@gmail.com</h4>
</div>
</div>
<div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">Mobile Number</h4>
</div>
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">: +91 9043540543</h4>
</div>
</div> 

<div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">Experience</h4>
</div>
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">: 2</h4>
</div>
</div> 
<div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">Nationality</h4>
</div>
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">: Indian</h4>
</div>
</div>
 
 <div className="flex border-b border-gray-300">
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">Address</h4>
</div>
<div className="w-full md:w-1/2 flex">
  <h4 className="text-md">: 7/77,Bharath nagar 3rd street 
     ernavoor chennai-57</h4>
</div>
</div>

               </div>
              
              }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Arjun Sankar"
                userName="Software developer"
                description={

                  <span>
                                     <br/>

“You are a computer. <br />
If you become front-end you'll count the likes on social media
                    <br />
                    If you become back-end you'll be breathing deep on a 
                  mountain
                  <br/>
                  Listen! one life man. Become a Full-stack".
                  
                                    </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <a href="#">

                      <i className="fa fa-facebook-square" />
                      </a>
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
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
