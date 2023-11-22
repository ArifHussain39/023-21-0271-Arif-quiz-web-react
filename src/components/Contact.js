import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export const Contact = () => {
    const [userinfo, setUserinfo] = useState({
        email: '',
        phone: '',
        message: ''
      });

      function submitInfo(){
        console.log(userinfo);
      }
    
    return (
        <div className="contact-form">
            <Form>
                <div className="container">
                    <h1>Feedback Form</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <Form.Group controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control value={userinfo.email} onChange={(e) => setUserinfo({...userinfo, email:e.target.value})} type="email" placeholder="Enter your email" required />
                            </Form.Group>
                        </div>
                        <div className="col-lg-6">
                            <Form.Group controlId="phone">
                                <Form.Label>Phone:</Form.Label>
                                <Form.Control value={userinfo.phone} onChange={(e) => setUserinfo({...userinfo, phone:e.target.value})} type="tel" placeholder="Enter your phone number" required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <Form.Group controlId="feedback">
                                <Form.Label>Feedback:</Form.Label>
                                <Form.Control value={userinfo.message} onChange={(e) => setUserinfo({...userinfo, message:e.target.value})} as="textarea" rows={4} placeholder="Enter your feedback" required />
                            </Form.Group>

                            <Button onClick={submitInfo} variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </div>

                </div>
            </Form>
        </div>
    );
};
