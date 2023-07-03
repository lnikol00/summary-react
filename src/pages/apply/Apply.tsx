import styled from "styled-components"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from "react";

const MainContainer = styled.div`
    margin: 5% 10%;

    @media screen and (max-width: 700px) {
        margin: 5% 0;
    }

`

const FormContainer = styled.div`
    padding: 3em;
    background-color: #a7a6a6;
    border-radius: 16px;
    box-shadow: 5px 0px 10px #ccc;

    @media screen and (max-width: 700px) {
        padding: 3em 1.5em;
        border-radius:0;
    }

`

function Apply() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <MainContainer>
            <FormContainer>
                <h1>Job Application</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} md="6" controlId="validationCustomFirstName">
                            <FloatingLabel
                                controlId="floatinFirstName"
                                label="First Name"
                                className="my-3"
                            >
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please write down your first name.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustomLastName">
                            <FloatingLabel
                                controlId="floatinSecondName"
                                label="Last Name"
                                className="my-3"
                            >
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please write down you last name.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </FloatingLabel>

                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustomEmail">
                            <FloatingLabel
                                controlId="floatingEmail"
                                label="Email Address"
                                className="my-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please write down your email address.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} controlId="validationCustomFile">
                            <InputGroup hasValidation className="py-3">
                                <Form.Control className="py-3"
                                    type="file"
                                    placeholder="Input file"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a file.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustomFile">
                            <Form.Select aria-label="Default select example" className="mb-3 py-3" required>
                                <option>Choose a job your are applying to</option>
                                <option value="Junior Frontend Developer (React)">Junior Frontend Developer (React)</option>
                                <option value="Junior Backend Developer (Node.js)">Junior Backend Developer (Node.js)</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please select a job.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Form.Group as={Col} controlId="TextArea">
                            <FloatingLabel controlId="floatingTextarea" label="Tell us something about yourself">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">
                                Tell us something about your self.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            </FormContainer>
        </MainContainer>
    )
}

export default Apply
