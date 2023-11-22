import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/imgs/image1.png';
import img2 from '../assets/imgs/image2.png';
import prevIconImage from '../assets/imgs/prevIcon.png'; // Add your custom previous icon image path here
import nextIconImage from '../assets/imgs/nextIcon.png'; // Add your custom next icon image path here
import { Statistics } from './Statistics';
import img3 from '../assets/imgs/getstartbtn.png';
import { Security } from './securityupdate';
import { Link } from 'react-router-dom';

function CustomCarousel() {
    return (
        <>
            <Carousel
                fade
                prevIcon={<img src={prevIconImage} alt="prevIcon" />}
                nextIcon={<img src={nextIconImage} alt="nextIcon" />}
            >
                <Carousel.Item className="container d-flex justify-content-center">
                    <img src={img1} alt="img1" />
                </Carousel.Item>
                <Carousel.Item className="container d-flex justify-content-center">
                    <img src={img2} alt="img2" />
                </Carousel.Item>
                {/* Add more Carousel.Items as needed */}
            </Carousel>

            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className='col-lg-6 col-md-6 col-sm-6'>

                        <h1 style={{ color: 'black' }} >The Fast Pinpoint</h1>
                        <h1 className="text-danger">Get Started -></h1>
                        <h1 style={{ color: 'black' }}> Tracking & Reservation.</h1>
                        <p>
                            Pinpoint is the fastest tracking and reservation software <br /> solution for personal and enterprise vehicles for institutes,  <br />offices and companies with live tracking, history recording, <br />estimated arrival time and usage report generation and much more features
                        </p>

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 ' >
                        <Link to='/about'>
                        <img src={img3} alt="img3" style={{ height: '100px' }} />
                        </Link>
                    </div>
                </div>
            </div>


            <Statistics />

            <Security />

            
          

        </>
    );
}

export default CustomCarousel;
