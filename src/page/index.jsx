import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import styled from "styled-components";

export default function Index() {
    const navigate = useNavigate();

    function loginNavigate() {
        navigate('/login')
    }

    function signupNavigate() {
        navigate('/join')
    }


    return (
        <>
            <IndexContainer>
                <TitleContainer>
                    <Title>MNU</Title>
                    <Title>Side Project Lounge</Title>
                    <SubTitle>목포대학교 사이드 프로젝트 라운지</SubTitle>
                </TitleContainer>
                <ButtonContainer>
                    <CustomButton variant="outline-dark" onClick={loginNavigate}>Login</CustomButton>
                    <CustomButton variant="outline-dark" onClick={signupNavigate}>Join us!</CustomButton>
                </ButtonContainer>
            </IndexContainer>
        </>
    );
}

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

`

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`

const Title = styled.h1`
  font-weight: bolder;
  font-size: 3.2rem;
`

const SubTitle = styled.p`
  font-size: 1.5rem;
`

const ButtonContainer = styled.div`
  display: flex;
`

const CustomButton = styled(Button)`
  margin: 2rem 1rem 0 1rem;
  width: 10rem;
  height: 4rem;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
`