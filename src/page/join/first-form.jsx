import React from "react";
import {Form} from "react-bootstrap";
import styled from "styled-components";


export default function FirstForm() {
    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <CustomFormControl type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nickname</Form.Label>
                <CustomFormControl type="username" placeholder="Enter Nickname"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <CustomFormControl type="password" placeholder="Password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password Check</Form.Label>
                <CustomFormControl type="password" placeholder="Password"/>
            </Form.Group>
        </>
    )
}

const CustomFormControl = styled(Form.Control)`
  height: 4.5rem;
  font-size: 1.4rem;
`