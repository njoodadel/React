import React, { PureComponent } from 'react'

export default class GoogleSignuo extends PureComponent {
    render() {
        return (
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
                            <Button className=" mr-3" color="primary" size="sm" disabled={!(this.state.nameState && this.state.emailState && this.state.passwordState &&
                                this.state.phoneNumberState && this.state.agreeRules && this.state.gender)}
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

        )
    }
}
