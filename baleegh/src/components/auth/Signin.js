import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import googleIcon from '../../images/google-icon.png'

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            phoneNumber: '',
            level: '1',
            gender: '',
            // nameState: false,
            emailState: false,
            passwordState: false,
            // phoneNumberState: false,
            // genderState: false,

        }
    }

    validat = (e) => {
        switch (e.target.name) {

            case 'name':
                const nameRegex = /^[a-zA-Z\u0621-\u064A]{2,10}$/;
                if (nameRegex.test(e.target.value)) {
                    this.setState({ nameState: true })
                } else {
                    this.setState({ nameState: false })
                }
                return;

            case 'email':
                const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                if (emailRegex.test(e.target.value)) {
                    this.setState({ emailState: true })

                } else {
                    this.setState({ emailState: false })

                }
                return;

            case 'password':
                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                if (passwordRegex.test(e.target.value)) {
                    this.setState({ passwordState: true })

                } else {
                    this.setState({ passwordState: false })
                }
                return;

            case 'phoneNumber':
                const phoneNumberRegex = /^\d{10}$/;
                if (phoneNumberRegex.test(e.target.value)) {
                    this.setState({ phoneNumberState: true })
                } else {
                    this.setState({ phoneNumberState: false })
                }
                return;
            default: return;



        }
    }
    handelChange = (e) => {

        this.validat(e)

        // if (this.state.nameState && this.state.emailState && this.state.passwordState &&
        //     this.state.phoneNumberState && this.state.agreeRules && this.state.gender) {
        //     this.setState({ iscompleted: true })
        // }

        if (e.target.type == "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }

    iscompleted = () => {
        return this.state.nameState && this.state.emailState && this.state.passwordState &&
            this.state.phoneNumberState && this.state.agreeRules && this.state.gender
    }

    handelSubmit = (e) => {
        e.preventDefault();
        // if (e.target.id == "defult") {
        //     if (!this.state.agreeRules) {
        //         this.setState({ agreeRulesSrate: true })
        //         return
        //     }
        //     else { this.setState({ agreeRulesSrate: false }) }



        // }
    }


    render() {
        return (
            <Container className="App" style={{ maxWidth: "800px" }}>
                <h2 className="text-muted mt-4 mb-4">تسجيل الدخول كطالب</h2>

                <Form id="google" onSubmit={this.handelSubmit} className="p-2" style={{ backgroundColor: "#f1f9ff" }}>
                    <Button outline color="primary">
                        <img width="25" height="auto" className="mr-2" src={googleIcon} />
                    Google
                    </Button>
                    <Label className="ml-4">التسجيل مع</Label>
                </Form>
                <br />

                <Form id="defult" onSubmit={this.handelSubmit} className="form" style={{ backgroundColor: "#f1f9ff" }}>


                    <Col>
                        <FormGroup>
                            <Label for="email" className="float-right mt-2">البريد الإلكتروني</Label>
                            <Input
                                style={{ textAlign: "right" }}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="myemail@email.com"
                                onChange={this.handelChange}
                                valid={this.state.emailState}
                                invalid={!this.state.emailState && this.state.email != ''}
                            // onBlur={this.validat}      
                            />
                            <FormFeedback style={{ textAlign: "right" }}  >   صيغة الايميل غير صحيحة </FormFeedback>
                            {/* <FormFeedback style={{ textAlign: "right" }}  >    </FormFeedback> */}
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label for="password" className="float-right mt-2">كلمة المرور</Label>
                            <Input
                                style={{ textAlign: "right" }}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                onChange={this.handelChange}
                                valid={this.state.passwordState}
                                invalid={!this.state.passwordState && this.state.password != ''}
                            />
                            <FormFeedback style={{ textAlign: "right" }}  >   كلمةالمرور يجب ان يكون كولها على الاقل 8 و تحتوي على الاقل رقم و حرف </FormFeedback>
                        </FormGroup>

                    </Col>
                    <Col>
                        <Button color="link" size="sm">نسيت كلمة المرور؟</Button>

                        <Button size="lg" className=" mt-2 mb-4" color="primary" disabled={!(this.state.emailState && this.state.passwordState)}  >
                            تسجيل الدخول</Button>
                    </Col>





                </Form>
            </Container >);
    }
}


export default Signin;
