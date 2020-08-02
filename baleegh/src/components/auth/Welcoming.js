import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button, Row } from 'reactstrap';

class Welcoming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: '1',
            difficulty: '',
            section: '',
            reminder: ''

        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    handelSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <Container className="App" style={{ maxWidth: "800px" }}>

                {/* screen 1  */}
                {this.state.screen == '1' &&
                    <Col>
                        < h2 className="text-muted mb-4" style={{ marginTop: "30%" }}>ابدأ الان بإعداد تدريبك اليومي</h2>
                        <Col style={{ backgroundColor: "#f1f9ff" }}>
                            <Col>
                                <Button className="mb-2 mt-4" color="primary" onClick={() => this.setState({ screen: "2" })}>
                                    حدد مستواك في اللفظي،الكمي او كليهما
                                </Button>
                            </Col>
                            <Col>
                                <Button className="mb-4 mt-2" color="link" style={{ fontWeight: "bold" }}>
                                    لاحقاً
                                </Button>
                            </Col>
                        </Col>
                    </Col>
                }

                {/* screen 2  */}
                {this.state.screen == '2' &&
                    <Col>
                        < h2 className="text-muted mb-4" style={{ marginTop: "30%" }}>ابدأ الان بإعداد تدريبك اليومي</h2>
                        <Col style={{ backgroundColor: "#f1f9ff" }}>
                            <Col>
                                <Button className="mb-2 mt-4" color="primary" onClick={() => this.setState({ screen: "3" })}>
                                    هل تود القيام بإختبار لتحديد متسواك ثم نقترح لك برنامج تدريب يومي مناسب
                                </Button>
                            </Col>

                            <Col>
                                <Button className="mb-2 mt-2" color="primary" onClick={() => this.setState({ screen: "4" })} >
                                    هل تود انشاء تدريبك بنفسك؟
                                </Button>
                            </Col>

                            <Col>
                                <Button className="mb-4 mt-2" color="link" style={{ fontWeight: "bold" }}>
                                    لاحقاً
                                </Button>
                            </Col>
                        </Col>
                    </Col>
                }


                {/* screen 3 */}
                {this.state.screen == '3' &&
                    <Form id="google" onSubmit={this.handelSubmit} className="p-2" style={{ backgroundColor: "#f1f9ff", marginTop: '30%' }}>

                        <FormGroup inline className=" mt-2">
                            <h4 className="mt-4 text-primary" >حدد مستوى الصعوبة</h4>
                            <Label   >
                                صعب
                            <Input
                                    type="radio"
                                    name="difficulty"
                                    className=" ml-1"
                                    onChange={this.handelChange}
                                    value="3"
                                />
                            </Label>

                            <Label className=" ml-4" >
                                متوسط
                            <Input
                                    type="radio"
                                    name="difficulty"
                                    className=" ml-1"
                                    onChange={this.handelChange}
                                    value="2"
                                />
                            </Label>

                            <Label className=" ml-4" >
                                سهل
                            <Input
                                    type="radio"
                                    name="difficulty"
                                    className=" ml-1"
                                    onChange={this.handelChange}
                                    value="1"

                                />
                            </Label>
                        </FormGroup>

                        <FormGroup inline className=" mt-2">
                            <h4 className="mt-4 text-primary" >  اختر القسم</h4>

                            <Label   >
                                كلاهما
                            <Input
                                    type="radio"
                                    name="section"
                                    className=" ml-1"
                                    onChange={this.handelChange}
                                    value="3"
                                />
                            </Label>

                            <Label className=" ml-4" >
                                كمي
                            <Input
                                    type="radio"
                                    name="section"
                                    className=" ml-1"
                                    onChange={this.handelChange}
                                    value="2"
                                />
                            </Label>

                            <Label className=" ml-4" >
                                لفظي
                            <Input
                                    type="radio"
                                    name="section"
                                    className=" ml-1"
                                    onChange={this.handelChange}
                                    value="1"

                                />
                            </Label>
                        </FormGroup>

                        <FormGroup inline className=" mt-2">
                            <h4 className="mt-4  text-primary" >متى تريد منا تذكيرك بتدربيك اليومي</h4>

                            {/* <Label   >
                                الساعة
                            <Input
                                    type="select"
                                    name="difficulty"
                                    className=" ml-1"
                                    onChange={this.handelChange}
                                    value="3"
                                />
                            </Label>

                            <Label className=" ml-4" >
                                الدقيقة
                            <Input
                                    type="time"
                                    name="time"
                                    className=" ml-1"
                                    onChange={this.handelChange}
                                    value="2"
                                />
                            </Label> */}
                            <Row>
                                <Col>
                                    <Input
                                        type="time"
                                        name="reminder"
                                        className=" ml-1"
                                        placeholder="--:-- --"
                                        onChange={this.handelChange}
                                    />
                                </Col>
                                <Label xs="auto" >
                                    :الوقت
                                </Label>

                            </Row>

                        </FormGroup>

                        <Button className=" mt-4 mb-4" color="primary" onClick={() => { this.setState({ screen: "5" }); console.log(this.state) }} disabled={!(this.state.section != '' && this.state.difficulty != '' && this.state.reminder != "")}>
                            التالي
                        </Button>
                    </Form>
                }


                {/* screen 4  */}
                {this.state.screen == '4' &&
                    <Col>
                        < h2 className="text-muted mb-4" style={{ marginTop: "30%" }}>اختر الإختبار المناسب لتحديد مستواك<br />(لفظي او كمي او كلاهما)</h2>
                        <Col style={{ backgroundColor: "#f1f9ff" }}>
                            <Col>
                                <Col>
                                    <Button className="mb-2 mt-4" color="primary" >
                                        اختبار لفظي مصغر في اجزاءه الستة
                                </Button>
                                </Col>


                                <Col>
                                    <Button className="mb-2 mt-4" color="primary" >
                                        اختبار كمي مصغر في اجزاءه الستة
                                </Button>
                                </Col>

                                <Col>
                                    <Button className="mb-2 mt-4" color="primary" >
                                        اختبار مصغر كمي ثم لفظي
                                </Button>
                                </Col>
                            </Col>
                            <Col>
                                <Button className="mb-4 mt-2" color="link" style={{ fontWeight: "bold" }}>
                                    لاحقاً
                                </Button>
                            </Col>
                        </Col>
                    </Col>
                }


                {/* screen 5  */}
                {this.state.screen == '5' &&
                    <Col>
                        < h2 className="text-muted mb-4" style={{ marginTop: "30%" }}>لقد تم إنشاء تدريبك اليومي بنجاح</h2>

                        <Col style={{ backgroundColor: "#f1f9ff" }}>

                            <Col>
                                <Col>
                                    <Button className="mb-2 mt-5" color="primary" >
                                        ابدأ تدريبك الان
                                </Button>
                                </Col>

                                <Col>
                                    <Button className="mb-4 mt-2" color="link" style={{ fontWeight: "bold" }}>
                                        لاحقاً
                                </Button>
                                </Col>

                            </Col>




                        </Col>
                    </Col>
                }



            </Container >);
    }
}


export default Welcoming;
