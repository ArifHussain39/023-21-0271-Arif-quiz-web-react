import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/imgs/image1.png';
import img2 from '../assets/imgs/image2.png';
import prevIconImage from '../assets/imgs/prevIcon.png'; // Add your custom previous icon image path here
import nextIconImage from '../assets/imgs/nextIcon.png'; // Add your custom next icon image path here
import { Statistics } from './Statistics';

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

            <div className='container' style={{ margin: '40px' }}>
                <h1 style={{ color: 'black' }} >The Fast Pinpoint</h1>
                <h1 className="text-danger">Get Started -></h1>
                <h1 style={{ color: 'black' }}> Tracking & Reservation.</h1>
                <p>
                    Pinpoint is the fastest tracking and reservation software <br /> solution for personal and enterprise vehicles for institutes,  <br />offices and companies with live tracking, history recording, <br />estimated arrival time and usage report generation and much more features
                </p>
            </div>

            <Statistics />

            <div className='container' style={{ margin: '40px' }}>
                <h1 style={{ color: 'black' }} >Pinpoint Security,</h1>
                <h1 style={{ color: 'black' }}>ensure the best </h1>
                <h1 style={{ color: 'black' }}>usage for the institutes</h1>
                <p>
                    We ensure the best usage for vehicles tracking and reservation system <br /> security with advance encryption standards <br /> and capability of keeping your assets like car, points much more <br />secure with the live tracking system
                </p>
            </div>

            <div className="d-flex align-items-center justify-content-center ">
                <button className="btn btn-secondary">Get Started</button>
            </div>

        </>
    );
}

export default CustomCarousel;
