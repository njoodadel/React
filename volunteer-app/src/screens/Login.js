import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdPersonOutline, MdMailOutline, MdSmartphone, MdLockOutline } from "react-icons/md";



function Signin() {
    const [windowWidth, setWidth] = useState(window.innerWidth);
    const [windowHeight, setHeight] = useState(window.innerHeight - 56);
    const [contSize, setContSize] = useState(0);

    useEffect(() => {
        if (window.innerWidth <= 1100 && window.innerWidth >= 800) {
            setContSize(window.innerWidth / 1)
        }
        else if (window.innerWidth > 1000) {
            setContSize(window.innerWidth / 3)
        }
        else {
            setContSize(window.innerWidth / 1)
        }
    });


    const changeSize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight - 56);
    }

    window.addEventListener("resize", changeSize)

    return (
        <div style={{ backgroundColor: '#17223B', height: windowHeight, width: windowWidth }}>
            <Container style={{ width: contSize }} >
                <Col style={{ top: 50, borderColor: 'green', borderWidth: 3, textAlign: 'center' }}>
                    <h1 style={{ color: '#FE346E', marginBottom: 30 }}>LOGIN</h1>
                    <Form style={{ borderWidth: 2, borderColor: 'white', borderStyle: 'solid', padding: 20 }}>

                        <Form.Group controlId="email">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <MdMailOutline />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="email" placeholder="Email" />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <MdLockOutline />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="password" placeholder="Password" />
                            </InputGroup>
                        </Form.Group>
                        {/* <Form.Group controlId="phoneNumber">
                            <Form.Control type="email" placeholder='Phone number' />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group> */}

                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                    </Form >
                </Col>
            </Container >
        </div >
    );
}

export default Signin;
