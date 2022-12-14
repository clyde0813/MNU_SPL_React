import React, {useState} from "react";
import {MdArrowBack} from "react-icons/md"
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";
import {motion} from "framer-motion";
import Button from "react-bootstrap/Button";
import FirstForm from "./first-form";
import SecondForm from "./second-form";


export default function Join() {
    const [formState, setState] = useState({page:0})
    const [formData, setData] = useState({
        email: "",
        username: "",
        password: "",
        password2: "",
    });

    function onClick() {
        setState(formState.page + 1);
    }

    let 

    return (
        <>
            <ArrowBackContainer>
                <Link style={{color: "black"}} to={"/"}><MdArrowBack size="25"/></Link>
            </ArrowBackContainer>
            <MainContainer>
                <TitleContainer>
                    <p>Create your account</p>
                </TitleContainer>
                <FormContainer>
                    <CustomForm>
                        {/*<FormInputContainer>*/}

                        {formState ? <SecondForm/> : <FirstForm/>}
                        {/*</FormInputContainer>*/}
                        <ButtonContainer>
                            <CustomButton variant="outline-dark" type="submit" onClick={onClick}>
                                Next
                            </CustomButton>
                        </ButtonContainer>
                    </CustomForm>
                </FormContainer>
            </MainContainer>
        </>
    )
}

const ArrowBackContainer = styled.div`
  margin: 2rem 0 0 2rem;
`

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: start;
  width: 80%;
  margin: 1rem 0 0.6rem 0;
  font-size: 2rem;
  font-weight: bold;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  font-size: 1.2rem;
  font-weight: normal;
`

const CustomFormControl = styled(Form.Control)`
  height: 4.5rem;
  font-size: 1.4rem;
`

const CustomForm = styled(Form)`
  width: 90%;
  height: 100%;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CustomButton = styled(Button)`
  margin: 1rem 0 0 0;
  width: 80%;
  height: 4rem;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
`