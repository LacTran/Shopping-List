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

const Text = styled.h5`
    color: #fff;
    text-align: right;
`

const Link = styled.a`
    text-decoration: none;
    &:hover{
        color: #F0EEEE;
    }
`


const Login = (props) => {
    const handleSignIn = () => {
        props.history.push('/')
    }
    return (
        <Wrapper>
            <Form>
                <FormHeading>Sign in to your account</FormHeading>
                <FormInput
                    type="text"
                    placeholder="Email"
                />
                <FormInput
                    type="text"
                    placeholder="Password"
                />
                <Text>Haven't got an account yet? <span><Link href="/register">Register here!</Link></span></Text>
                <FormSubmitInput type="submit" value="Sign in" onClick={handleSignIn} />
            </Form>
        </Wrapper>
    )
}

export default Login;