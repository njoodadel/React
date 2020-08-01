import React, { PureComponent } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {
    Container, Col, Form, FormGroup, Label, Input, Button, Row, FormFeedback, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


const links = [
    { href: '#home', text: 'Home' },
    { href: '#card', text: 'Product' },
    { href: '#about', text: 'About' },
    { href: '#cata', text: 'Categories' },
    { href: '#test', text: 'Blogs' },
    { href: '#test2', text: 'News' },
    { href: '#busns', text: 'Adds', className: 'btnadd' },
    { href: '/login', text: 'LOGIN' },
];

const createNavItem = ({ href, text, className }) => (
    <NavItem>
        <NavLink href={href} className={className}>{text}</NavLink>
    </NavItem>
);

export default class DailyTraining extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            size: null,
            isOpen: false
        }
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">انتهى الوقت</div>;
        }

        return (
            <Col>
                <Col className="text-muted"><h6 >الوقت المتبقي</h6></Col>
                <Col><h4 >{remainingTime}</h4></Col>
                <Col className="text-muted"><h6 >ثانيه</h6></Col>
            </Col>
        );
    };

    componentDidMount = () => {
        if (window.innerWidth > 800)
            this.setState({ size: window.innerWidth / 10 })
        else this.setState({ size: window.innerWidth / 2.5 })

    }

    render() {
        return (
            <Container className="text-center">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
                <Row className="justify-content-center">
                    <CountdownCircleTimer
                        size={this.state.size}
                        isPlaying
                        duration={60}
                        colors={[["#004777", 0.45], ["#F7B801", 0.45], ["#A30000"]]}
                    // onComplete={() => [true, 1000]}
                    >
                        {this.renderTime}
                    </CountdownCircleTimer>
                </Row>
            </Container>

        )
    }
}
