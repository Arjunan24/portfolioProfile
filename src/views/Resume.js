
import React, { Component } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ArjResume from "../Resume/arjun-resume.pdf"

class Resume extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 1000
    })
  }
  downloadCertificate=()=>{
    fetch(ArjResume).then(
      response => {
        //let filename =  response.headers.get('Content-Disposition').split('filename=')[1];
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "Arjun Resume.pdf";
          a.click();
        });
      }
    );
  }

  render() {
    const rpercentage = 75;
    const rnpercentage = 70;
    const jpercentage = 80
    const angpercentage = 65
    const botapercentage = 90

    const jtext = "Java Script :"
    const rtext = "React JS :"
    const rntext = "React Native JS :"
    const angtext = "Angular JS :"
    const botailtext = "Bootstrap/ Tailwind css :"
    return (
      <div className="content">
        <div className="card">
          <div className="py-5 px-5 text-right">
            <p className="text-end">Download Resume
            </p>
            <a href={ArjResume} target="_blank" onClick={this.downloadCertificate}>
            <i class="fa fa-download" aria-hidden="true"></i>
            </a>
            
          
          </div>
          <div className="py-5 justify-center">
            <p className="text-center text-5xl">MY SKILLS</p>
            <p className="py-5 text-center px-10 justify-center text-md">Talent wins game,but teamwork and intelligence win championships.</p>
          </div>

          <div class="flex content-start flex-wrap h-48 py-3">
            <div class=" flex items-center w-1/4 p-2">
              <div class="text-gray-700 text-center  p-2 text-3xl">{rtext}</div>
            </div>
            <div class="w-1/3 p-2">
              <div class="text-gray-700 text-center  p-2">
                <CircularProgressbar value={rpercentage} text={`${rpercentage}%`} className="h-32 w-32" />
              </div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-delay="100" class="flex content-start flex-wrap h-48 py-3">
            <div class=" flex items-center w-1/4 p-2">
              <div class="text-gray-700 text-center  p-2 text-3xl">{rntext}</div>
            </div>
            <div class="w-1/3 p-2">
              <div class="text-gray-700 text-center  p-2">
                <CircularProgressbar value={rnpercentage} text={`${rnpercentage}%`} className="h-32 w-32" />
              </div>
            </div>
          </div>

          <div data-aos="flip-left" data-aos-delay="100" class="flex content-start flex-wrap h-48">
            <div class=" flex items-center w-1/4 p-2">
              <div class="text-gray-700 text-center  p-2 text-3xl">{jtext}</div>
            </div>
            <div class="w-1/3 p-2">
              <div class="text-gray-700 text-center  p-2">
                <CircularProgressbar value={jpercentage} text={`${jpercentage}%`} className="h-32 w-32" />
              </div>
            </div>
          </div>

          <div data-aos="flip-left" data-aos-delay="100" class="flex content-start flex-wrap h-48">
            <div class=" flex items-center w-1/4 p-2">
              <div class="text-gray-700 text-center  p-2 text-3xl">{angtext}</div>
            </div>
            <div class="w-1/3 p-2">
              <div class="text-gray-700 text-center  p-2">
                <CircularProgressbar value={angpercentage} text={`${angpercentage}%`} className="h-32 w-32" />
              </div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-delay="100" class="flex content-start flex-wrap h-48">
            <div class="flex items-center w-1/4 p-2">
              <div class="text-gray-700 text-center  p-2 text-3xl">{botailtext}</div>
            </div>
            <div class="w-1/3 p-2">
              <div class="text-gray-700 text-center  p-2">
                <CircularProgressbar value={botapercentage} text={`${botapercentage}%`} className="h-32 w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
