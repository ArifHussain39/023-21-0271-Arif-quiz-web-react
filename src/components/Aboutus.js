import img1 from '../assets/imgs/image 4.png';

import { Contact } from './Contact';

export default function Aboutus() {
    return (
        <>
            <div className="container text-center ">
                <h1>About Pinpoint</h1>
                <img src={img1} alt="" />
                <p>
                    Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes, <br />offices and companies with live tracking, history recording, estimated arrival time and usage <br /> report generation and much more features.
                    <br />
                    We ensure the best usage for vehicles tracking and reservation system security with advance encryption standards <br /> and capability of keeping your assets like car, points much more secure with the live tracking system
                </p>

                <Contact />
            </div>

        </>

    );
}