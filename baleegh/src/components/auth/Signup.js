import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button, Row, FormFeedback } from 'reactstrap';
import googleIcon from '../../images/google-icon.png'
// import { history } from 'react-router'
import { connect } from 'react-redux';
import { signup_user } from '../../Store/Actions/AuthActions'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            phoneNumber: '',
            level: '1',
            gender: '',
            isGoogle: false,
            googleAccount: null,
            agreeRules: false,
            iscompleted: false,
            nameState: false,
            emailState: false,
            passwordState: false,
            phoneNumberState: false,
            genderState: false,
            agreeRulesSrate: false,
            // history: useHistory()


        }
    }


    validat = (e) => {
        switch (e.target.name) {

            case 'name':
                const nameRegex = /^[a-zA-Z\u0621-\u064A]{2,10}$/;
                if (nameRegex.test(e.target.value)) {
                    this.state.nameState = true
                } else {
                    this.state.nameState = false
                }
                return;

            case 'email':
                const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                if (emailRegex.test(e.target.value)) {
                    this.state.emailState = true
                } else {
                    this.state.emailState = false
                }
                return;

            case 'password':
                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                if (passwordRegex.test(e.target.value)) {
                    this.state.passwordState = true
                } else {
                    this.state.passwordState = false
                }
                return;

            case 'phoneNumber':
                const phoneNumberRegex = /^\d{10}$/;
                if (phoneNumberRegex.test(e.target.value)) {
                    this.state.phoneNumberState = true
                } else {
                    this.state.phoneNumberState = false
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
        // const name = this.state.name
        // const email = this.state.email
        // const password = this.state.password
        // const phoneNumber = this.state.phoneNumber
        // const level = this.state.level
        // const gender = this.state.gender
        // this.props.store.dispatch({ type: 'SIGNUP_USER', name, email, password, phoneNumber, level, gender })
        // this.props.history.push("/welcoming")


        // }
        // this.props.signup();

    }

    responseGoogle = (response) => {
        console.log("in google");
        console.log(response);
        console.log(response.profileObj);
        this.setState({ googleAccount: response.profileObj })
        this.setState({ isGoogle: true })
        return;


    }

    handleLogoutFailure = (response) => {
        console.log("out google");
        console.log(response);
    }

    render() {
        return (
            <Container className="App" style={{ maxWidth: "800px" }}>
                {!this.state.isGoogle &&
                    <Col>
                        <h2 className="text-muted mt-4 mb-4">التسجيل</h2>
                        <Form id="google" onSubmit={this.handelSubmit} className="p-2" style={{ backgroundColor: "#f1f9ff" }}>
                            {/* <Button outline color="primary">
                        <img width="25" height="auto" className="mr-2" src={googleIcon} alt="google icon" />
                    Google
                    </Button> */}
                            {/* <GoogleLogout
                                clientId="513092314642-9gr5pcmqei5jn074fb7a82ch3ioqt302.apps.googleusercontent.com"
                                buttonText='Logout'
                                onLogoutSuccess={this.handleLogoutFailure}
                                onFailure={this.handleLogoutFailure}
                            ></GoogleLogout> */}
                            <GoogleLogin
                                clientId="513092314642-9gr5pcmqei5jn074fb7a82ch3ioqt302.apps.googleusercontent.com"
                                buttonText="Google"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}

                            />
                            <Label className="ml-4">التسجيل مع</Label>
                        </Form>


                        <Row className="mt-3 mb-3">
                            <Col ><hr /></Col>
                            <Col xs="auto" >او التسجيل بإستخدام البريد الإلكتروني</Col>
                            <Col><hr /></Col>
                        </Row>


                        <Form id="defult" onSubmit={this.handelSubmit} className="form" style={{ backgroundColor: "#f1f9ff" }}>
                            <Col>
                                <FormGroup>
                                    <Label for="name" className="float-right mt-4" >الاسم</Label>
                                    <Input
                                        style={{ textAlign: "right" }}
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="...."
                                        onChange={this.handelChange}
                                        valid={this.state.nameState}
                                        invalid={!this.state.nameState && this.state.name != ''}
                                    />
                                    <FormFeedback style={{ textAlign: "right" }}  > طول الاسم يجب ان يكون بين 10-2 لايمكن للاسم ان يحتوي على ارقام</FormFeedback>

                                </FormGroup>
                            </Col>

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
                                <FormGroup>
                                    <Label for="phoneNumber" className="float-right mt-2"> رقم الجوال</Label>
                                    <Input
                                        style={{ textAlign: "right" }}
                                        type="text"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        placeholder="05********"
                                        onChange={this.handelChange}
                                        valid={this.state.phoneNumberState}
                                        invalid={!this.state.phoneNumberState && this.state.phoneNumber != ''}
                                    />
                                    <FormFeedback style={{ textAlign: "right" }}  >  رقم الجوال غير صحيح  </FormFeedback>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label for="level" className="float-right mt-2">الصف الدراسي</Label>
                                    <Input
                                        style={{ direction: "rtl" }}
                                        type="select"
                                        name="level"
                                        id="level"
                                        onChange={this.handelChange}
                                    >
                                        <option value="1">اولى ثانوي</option>
                                        <option value="2">ثاني ثانوي</option>
                                        <option value="3">ثالث ثانوي</option>
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup inline className=" mt-2">
                                    <Label   >
                                        ذكر
                            <Input
                                            type="radio"
                                            name="gender"
                                            className=" ml-1"
                                            onChange={this.handelChange}
                                            value="male"
                                        />
                                    </Label>

                                    <Label className=" ml-4" >
                                        انثى
                            <Input
                                            type="radio"
                                            name="gender"
                                            className=" ml-1"
                                            onChange={this.handelChange}
                                            value="female"
                                        />
                                    </Label>

                                </FormGroup>
                            </Col>
                            {/* <Col>
                        <Label className="float-right text-danger" hidden={!this.state.agreeRulesSrate}>يجب عليك الموافقة على الشروط و الاحكام*</Label>
                    </Col> */}
                            <Col>
                                <FormGroup inline className=" mt-5 mb-4">
                                    <Button className=" mr-3" color="primary" size="sm" disabled={!(this.state.nameState && this.state.emailState && this.state.passwordState &&
                                        this.state.phoneNumberState && this.state.agreeRules && this.state.gender)}
                                        onClick={() => {
                                            // var filename = "/src/users"
                                            // var jsonData = {
                                            //     name: this.state.name,
                                            //     email: this.state.email,
                                            //     password: this.state.password,
                                            //     phoneNumber: this.state.phoneNumber,
                                            //     level: this.state.level,
                                            //     gender: this.state.gender
                                            // };
                                            // const fileData = JSON.stringify(jsonData);
                                            // const blob = new Blob([fileData], { type: "text/plain" });
                                            // const url = URL.createObjectURL(blob);
                                            // const link = document.createElement('a');
                                            // link.download = `${filename}.json`;
                                            // link.href = url;
                                            // link.click();
                                            // const name = this.state.name
                                            // const email = this.state.email
                                            // const password = this.state.password
                                            // const phoneNumber = this.state.phoneNumber
                                            // const level = this.state.level
                                            // const gender = this.state.gender
                                            // this.props.dispatch({ type: 'SIGNUP_USER', name, email, password, phoneNumber, level, gender })
                                            this.props.signup()
                                            this.props.history.push("/welcoming")
                                        }




                                        }
                                    >
                                        انضم إلينا
                                    </Button>
                                    <Label >
                                        أوافق على الشروط والأحكام
                                <Input
                                            type="checkbox"
                                            id="agreeRules"
                                            name="agreeRules"
                                            className=" ml-1"
                                            onChange={this.handelChange}

                                        />
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Form>
                    </Col>
                }
                {this.state.isGoogle &&
                    <Col>
                        <h2 className="text-muted mt-4 mb-4">مرحباً{this.state.googleAccount.givenName}</h2>
                        <Form id="defult" onSubmit={this.handelSubmit} className="form" style={{ backgroundColor: "#f1f9ff" }}>
                            <Col>
                                <FormGroup>
                                    <Label for="phoneNumber" className="float-right mt-2"> رقم الجوال</Label>
                                    <Input
                                        style={{ textAlign: "right" }}
                                        type="text"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        placeholder="05********"
                                        onChange={this.handelChange}
                                        valid={this.state.phoneNumberState}
                                        invalid={!this.state.phoneNumberState && this.state.phoneNumber != ''}
                                    />
                                    <FormFeedback style={{ textAlign: "right" }}  >  رقم الجوال غير صحيح  </FormFeedback>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label for="level" className="float-right mt-2">الصف الدراسي</Label>
                                    <Input
                                        style={{ direction: "rtl" }}
                                        type="select"
                                        name="level"
                                        id="level"
                                        onChange={this.handelChange}
                                    >
                                        <option value="1">اولى ثانوي</option>
                                        <option value="2">ثاني ثانوي</option>
                                        <option value="3">ثالث ثانوي</option>
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup inline className=" mt-2">
                                    <Label   >
                                        ذكر
                            <Input
                                            type="radio"
                                            name="gender"
                                            className=" ml-1"
                                            onChange={this.handelChange}
                                            value="male"
                                        />
                                    </Label>

                                    <Label className=" ml-4" >
                                        انثى
                            <Input
                                            type="radio"
                                            name="gender"
                                            className=" ml-1"
                                            onChange={this.handelChange}
                                            value="female"
                                        />
                                    </Label>

                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup inline className=" mt-5 mb-4">
                                    <Button className=" mr-3" color="primary" size="sm" disabled={!(this.state.phoneNumberState && this.state.agreeRules && this.state.gender)}
                                        onClick={() => {
                                            this.props.signup()
                                            this.props.history.push("/welcoming")
                                        }}>
                                        انضم إلينا
                                    </Button>
                                    <Label >
                                        أوافق على الشروط والأحكام
                                <Input
                                            type="checkbox"
                                            id="agreeRules"
                                            name="agreeRules"
                                            className=" ml-1"
                                            onChange={this.handelChange}

                                        />
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Form>
                    </Col>

                }
            </Container >);
    }
}
const mapStateToProps = state => {
    return {
        user: state
    }
};

function mapDispatchToProps(dispatch) {
    return {
        signup: () => dispatch(signup_user('njoodtest', 'njood@ff.com', '12345qwe', '0500651287', '1', 'female'))
    };
}

// const user = connect(mapStateToProps, mapDispatchToProps)(Signup)
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
