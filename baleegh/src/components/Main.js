import React, { PureComponent } from 'react'
import { Container, Col, Button } from 'reactstrap';
import { useHistory } from 'react-router'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "../components/auth/Signup";
import Welcoming from "../components/auth/Welcoming";
import Signin from "../components/auth/Signin";
import Home from "../components/Home/Home";
import DailyTraining from "../components/DailyTraining/DailyTraining";

export default class Main extends PureComponent {

    // let history = useHistory();

    // function handleClick() {
    //     history.push("/home");
    // }

    render() {
        return (
            <Container className="App" style={{ maxWidth: "800px", marginTop: "10%" }}>

                <Col>
                    {/* < h2 className="text-muted mb-4" style={{ marginTop: "30%" }}>ابدأ الان بإعداد تدريبك اليومي</h2> */}
                    <Col style={{ backgroundColor: "#f1f9ff" }}>
                        <Col>
                            <Button className="mb-2 mt-4" color="primary" onClick={() => this.props.history.push("/training")}>
                                ابداء تدريبك اليومي
                            </Button>
                        </Col>

                    </Col>
                </Col>
            </Container>
        )
    }


};

