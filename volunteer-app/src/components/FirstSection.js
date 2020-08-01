import React from 'react'
import Logo from '../assets/images/logo.png'
import Download from '../assets/images/download2.png'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function FirstSection() {

    return (
        <Row style={{ textAlign: 'center', alignItems: 'center' }}>
            <Col style={{ textAlign: 'left' }}>
                <Image src={Logo} width={500} alt='' />
            </Col>
            <Col style={{ textAlign: 'right' }}>
                <Image src={Download} width={400} alt='' />
            </Col>
        </Row>

    )
}

export default FirstSection