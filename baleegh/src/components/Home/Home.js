import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import { useHistory } from 'react-router'



function Home() {

    let history = useHistory();

    // function handleClick() {
    //     history.push("/home");
    // }

    return (
        <Container className="App" style={{ maxWidth: "800px", marginTop: "10%" }}>
            <Col>
                {/* < h2 className="text-muted mb-4" style={{ marginTop: "30%" }}>ابدأ الان بإعداد تدريبك اليومي</h2> */}
                <Col style={{ backgroundColor: "#f1f9ff" }}>
                    <Col>
                        <Button className="mb-2 mt-4" color="primary" onClick={() => history.push("/signup")}>
                            تسجيل
                        </Button>
                    </Col>
                    <Col>
                        <Button className="mb-4 mt-2" color="primary" onClick={() => history.push("/signin")}>
                            تسجيل الدخول
                        </Button>
                    </Col>
                </Col>
            </Col>
        </Container>
    )
};

export default Home;
