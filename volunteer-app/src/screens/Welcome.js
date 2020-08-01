import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Navbar, } from 'react-bootstrap';
import ReactFullpage from '@fullpage/react-fullpage';
import Background from '../assets/images/Background.png'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import FirstSection from '../components/FirstSection';

function Welcome() {
    const [windowWidth, setWidth] = useState('100%');
    const [windowHeight, setHeight] = useState('100%');
    // const [color, setColor] = useState('blue');

    const changeSize = () => {
        setWidth('100%');
        setHeight('100%');
        // setColor('red')
    }

    window.addEventListener("orientationchange", changeSize)


    return (
        <React.Fragment>
            {/* <Navigation /> */}
            <ReactFullpage
                licenseKey={''}
                navigation
                render={comp => (
                    <ReactFullpage.Wrapper>
                        <div className='section' style={{
                            backgroundImage: `url(${Background})`,
                            backgroundSize: 'cover', width: windowWidth,
                            height: windowHeight,
                        }} >
                            <FirstSection></FirstSection>
                        </div>

                        <div style={{ backgroundColor: '#17223B' }} className='section' >
                            Section 2
                    </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </React.Fragment>

    )

}
export default Welcome