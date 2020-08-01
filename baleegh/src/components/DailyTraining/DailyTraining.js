import React, { PureComponent } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {
    Container, Col, Form, FormGroup, Label, Progress, Button, Row, FormFeedback, Collapse, Card,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Timer from './Timer'
import json from './dailytraining.json'
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
            isOpen: false,
            showVerbal: false,
            ShowQuantitative: false,
            start: false,
            section: null,
            category: null,
            categoryID: null,
            nextQ: false,
            topMargin: "10%",
            Qindex: 0,
            data: null,
            verbal: null,
            Quantitative: null,
            currentSection: null,
            answered: 0,
            //for question
            question: null,
            optionA: null,
            optionB: null,
            optionC: null,
            optionD: null,
            valueA: null,
            valueB: null,
            valueC: null,
            valueD: null,
            selectedAnswer: null,
            isRight: null,
            showResult: false,
            f: null
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

    componentWillMount = () => {
        this.setState({ data: json })

        // Check which section or category to start with
        if (json.verbal.length > 0) {
            this.setState({ section: "الجزء اللفظي" })
            this.setState({ category: json.verbal[this.state.Qindex].category })
            this.setState({ verbal: json.verbal })
            this.setState({ currentSection: 'verbal' })

            console.log("verbal!!")
        }
        else if (json.Quantitative.length > 0) {
            this.setState({ section: "الجزء الكمي" })
            this.setState({ category: json.Quantitative[this.state.Qindex].category })
            this.setState({ Quantitative: json.Quantitative })
            this.setState({ currentSection: 'Quantitative' })

            console.log('Quantitative!!')

        }
        this.setState({ start: true })
    }

    componentDidMount = () => {
        this.setState({ answered: this.state.data.status.remaining })

        // set the size of the timer
        if (window.innerWidth <= 1100 && window.innerWidth >= 800)
            this.setState({ size: window.innerWidth / 6 })
        else if (window.innerWidth > 1000)
            this.setState({ size: window.innerWidth / 10 })
        else
            this.setState({ size: window.innerWidth / 2.5 })

        window.addEventListener('orientationchange', this.setTopMargin);
        window.addEventListener('resize', this.setTopMargin);



    }


    updateData = () => {
        this.setState({ start: !this.state.start })
        this.setState({ nextQ: !this.state.nextQ })
        // if (this.state.nextQ) {
        //     this.next()
        // }
        this.next()

    }

    next = () => {

        // this.setState({ optionA: this.data.verbal[0].A })
        let keys = null
        if (this.state.currentSection == "verbal") {
            keys = Object.keys(this.state.data.verbal[this.state.Qindex].A)
            this.setState({ question: this.state.data.verbal[this.state.Qindex].Q })
            this.setState({ valueA: this.state.data.verbal[this.state.Qindex].A[keys[0]] })
            this.setState({ valueB: this.state.data.verbal[this.state.Qindex].A[keys[1]] })
            this.setState({ valueC: this.state.data.verbal[this.state.Qindex].A[keys[2]] })
            this.setState({ valueD: this.state.data.verbal[this.state.Qindex].A[keys[3]] })
            this.setState({ f: this.state.data.verbal[this.state.Qindex].f })
        } else {
            keys = Object.keys(this.state.data.Quantitative[this.state.Qindex].A)
            this.setState({ question: this.state.data.Quantitative[this.state.Qindex].Q })

            this.setState({ valueA: this.state.data.Quantitative[this.state.Qindex].A[keys[0]] })
            this.setState({ valueB: this.state.data.Quantitative[this.state.Qindex].A[keys[1]] })
            this.setState({ valueC: this.state.data.Quantitative[this.state.Qindex].A[keys[2]] })
            this.setState({ valueD: this.state.data.Quantitative[this.state.Qindex].A[keys[3]] })
            this.setState({ f: this.state.data.Quantitative[this.state.Qindex].f })

        }

        // console.log(this.state.data.verbal[this.state.Qindex].A[keys[0]])

        this.setState({ optionA: keys[0] })
        this.setState({ optionB: keys[1] })
        this.setState({ optionC: keys[2] })
        this.setState({ optionD: keys[3] })


        console.log('in next')

        // console.log(this.state.optionA)
        // const values = (this.state.data.verbal[0].A)
        // console.log(values[keys[0]])

    }

    setTopMargin = () => {
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.setState({ topMargin: "10%" })
        }
        else this.setState({ topMargin: "0%" })
    }

    check = () => {
        // if (this.state.selectedAnswer) {
        //     this.setState({ isRight: true })
        //     console.log("in if")
        // }
        console.log(this.state.selectedAnswer)
        this.setState({ answered: this.state.answered + 1 })
        this.setState({ Qindex: this.state.Qindex++ })
        this.setState({ showResult: true })
        console.log(this.state.answered)
    }


    render() {
        return (
            <Container className="App text-center " style={{ maxWidth: "800px" }}>
                {/* test navbar */}
                <Navbar color="light" light expand="md" >
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
                <Col>
                    <Progress value={this.state.answered} max={this.state.data.status.total_qustions} style={{ marginTop: this.state.topMargin }} />
                    <Label className="float-left">{this.state.data.status.total_qustions}<Label className="ml-1 mr-1">  من </Label>{this.state.answered}</Label>
                </Col>
                {/* start of new section or category */}
                {this.state.start &&
                    <Col className="mt-5" sm="12" md={{ size: 6, offset: 3 }} >
                        <Card style={{ backgroundColor: '#0000', borderColor: '#0000', }} >
                            <h3 className="text-muted">{this.state.section}</h3>
                            <h2 className="p-4" style={{ backgroundColor: '#f1f9ff' }}>{this.state.category}</h2>
                            <Button color="primary" onClick={this.updateData}>أكمل تدريبك اليومي الآن</Button>
                        </Card>
                    </Col>
                }

                {!this.state.start && this.state.nextQ &&
                    <Col>
                        {/* Timer */}
                        <Row className="justify-content-center mt-4">
                            <CountdownCircleTimer
                                size={this.state.size}
                                isPlaying={!this.state.showResult}
                                duration={60}
                                colors={[["#004777", 0.45], ["#F7B801", 0.45], ["#A30000"]]}
                            // onComplete={() => [true, 1000]}
                            >
                                {this.renderTime}
                            </CountdownCircleTimer>
                        </Row>
                        <Col >
                            <Label className=" mt-4 "><h4>{this.state.question}</h4></Label>
                            <Row xs={2} sm={4} className="justify-content-center mt-2 ">
                                <Button id="A" className="ml-1 mr-1  mt-3" size="lg" color="info" onClick={() => this.setState({ selectedAnswer: this.state.valueA })} value={this.state.valueA} >{this.state.optionA}</Button>
                                <Button id="B" className="ml-1 mr-1  mt-3" size="lg" color="info" onClick={() => this.setState({ selectedAnswer: this.state.valueB })} value={this.state.valueB}>{this.state.optionB}</Button>

                            </Row>
                            <Row xs={2} sm={4} className="justify-content-center  "  >
                                <Button id="C" className="ml-1 mr-1 mt-3" size="lg" color="info" onClick={() => this.setState({ selectedAnswer: this.state.valueC })} value={this.state.valueC}>{this.state.optionC}</Button>
                                <Button id="D" className=" ml-1 mr-1  mt-3" size="lg" color="info" onClick={() => this.setState({ selectedAnswer: this.state.valueD })} value={this.state.valueD}>{this.state.optionD}</Button>

                            </Row>
                        </Col>
                        <Button className="float-center mt-4 mb-4" size="lg" color="primary" onClick={this.check}>تحقق</Button>

                        <Row className="mb-2" style={{ backgroundColor: "#98FB98" }} hidden={!(this.state.selectedAnswer && this.state.showResult)}>
                            <Button color="success" >التالي</Button>
                            <Col  >
                                <Label className="float-right" > <h6 style={{ color: "white" }}>إجابة صحيحة</h6></Label>
                                <br />
                                <Label className="float-right">{this.state.f}</Label>
                            </Col>
                        </Row>
                        <Row className="mb-2" style={{ backgroundColor: "#FF6347" }} hidden={!(!this.state.selectedAnswer && this.state.showResult)}>
                            <Button color="danger" >التالي</Button>
                            <Col  >
                                <Label className="float-right" > <h6 style={{ color: "white" }}>الإجابة الصحيحه</h6></Label>
                                <br />
                                <Label className="float-right">{this.state.f}</Label>
                            </Col>
                        </Row>
                    </Col>
                }




            </Container>

        )
    }
}
