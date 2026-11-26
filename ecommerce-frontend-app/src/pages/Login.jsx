import { Component } from "react";
import { Form, Row } from "react-bootstrap";
import "../style/formStylings.css"
import { toast, ToastContainer } from "react-toastify";

export default class Login extends Component {


    constructor() {
        super();
        this.state = {
            username: "ravi",
            password: ""
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        toast.warn("Login Successful")
        console.log(this.state.username);
        console.log(this.state.password);
        
    }




    render() {
        return (
            <div id="form-container">
                <Form onSubmit={this.handleSubmit}>

                    <fieldset>
                        <Row>
                            <h1>Login </h1>
                        </Row>
                        <Form.Group>
                            <Form.Label>Username :</Form.Label>
                            <Form.Control onChange={(e) => {
                                this.setState(() => { return { username: e.target.value } })
                            }} required placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password :</Form.Label>
                            <Form.Control onChange={
                                (e) => {
                                    this.setState(() => { return { password: e.target.value } })
                                }
                            } required type="password" placeholder="Enter password" />
                        </Form.Group>
                        <div className="row">
                            <button type="submit">Sign In</button>
                            <button type="reset">Cancel</button>
                        </div>
                    </fieldset>
                </Form>
                <ToastContainer />
            </div>
        )
    }
}