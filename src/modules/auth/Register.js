import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 20px
`
const Form = styled.form`
    padding: 20px;
`;

const FormInput = styled.input`
    display: block;
    padding: 10px   ;
    box-sizing: border-box;
    margin: 20px auto;
    background: #5f5f5f;
    color: #fff;
    border: 0;
    width: 100%;
    &::placeholder{
        color: #fff;
    }
    &:focus{
        outline: none;
        border-bottom: 1px solid black;
    }
`;

const FormSubmitInput = styled.input`
    display: block;
    padding: 10px 20px;
    box-sizing: border-box;
    margin: 10px auto;
    width: 30%;
    background: #eee;
    border: 0;
    cursor: pointer;
    &:focus{
        outline: none;
        border-bottom: 1px solid black;
    }
`;

const FormHeading = styled.h1`
    color: #eee;
    text-align: center;
`;


const Register = (props) => {
    const handleSignUp = () => {
        props.history.push('/login')
    }
    return (
        <Wrapper>
            <Form>
                <FormHeading>Register your account</FormHeading>
                <FormInput
                    type="text"
                    placeholder="Email"
                />
                <FormInput
                    type="text"
                    placeholder="Password"
                />
                <FormSubmitInput type="submit" value="Sign Up" onClick={handleSignUp} />
            </Form>
        </Wrapper>
    )
}

export default Register;