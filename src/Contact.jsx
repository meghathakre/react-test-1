
import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    const [input, setInput] = useState({})

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }))
        console.log(input);
    }
    const handleSubmit = () => {
        let api = "http://localhost:3000/student"
        axios.post(api, input).then((res) => {
            console.log(res);
            alert("data save !!")
        })
    }
    return (
        <>
            <Form style={{width:"45%"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter id.</Form.Label>
                    <Form.Control  type="text" vlaue={input.id} name="id" onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control  type="text" vlaue={input.name} name="name" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter designatione</Form.Label>
                    <Form.Control type="text" vlaue={input.designation} name="designation" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter department</Form.Label>
                    <Form.Control  type="text" vlaue={input.department} name="department" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter sallery</Form.Label>
                    <Form.Control  type="text" vlaue={input.sallery} name="sallery" onChange={handleInput} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default Contact;






