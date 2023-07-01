import styled from "styled-components"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as GoIcons from "react-icons/go"
import { useState } from "react";

type Props = {
    changeColor?: boolean;
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #3f3e3e;
    width: 100%;
    height: 650px;

    @media screen and (max-width: 1200px){
        height:100%;
    }
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:#44c0ea;
    color: white;
    padding-bottom: 50px;
    width:90%;
    height: 60%;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;

    @media screen and (max-width: 1200px){
        height:350px;
        flex-direction: column;
        gap: 20px;
        padding-top: 20px;
    }
`

const Left = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid white;
    border-top-left-radius: 14px;
    gap: 60px;
    span{
        border-bottom: 1px solid white;
        border-left: 1px solid white;
        border-right: 1px solid white;
        border-radius: 16px;
        padding: 2px 10px;
        text-transform:uppercase;
    }

    h1{
        display: flex;
        justify-content: flex-end;
        font-size: 5em;

        @media screen and (max-width: 800px) {
            font-size: 4em;
        }
        @media screen and (max-width: 400px) {
            font-size: 1.5em;
        }
    }
`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid white;
    border-top-left-radius: 14px;
    gap: 60px;
   span{
        border-bottom: 1px solid white;
        border-left: 1px solid white;
        border-right: 1px solid white;
        border-radius: 16px;
        padding: 2px 10px;
        text-transform:uppercase;
    }

    h1{
        display: flex;
        justify-content: flex-end;
        font-size: 5em;

        @media screen and (max-width: 800px) {
            font-size: 4em;
        }
        @media screen and (max-width: 400px) {
            font-size: 1.5em;
        }
    }
`

const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
`
const Profile = styled.div`
    display:grid;
    align-items: center;
    grid-template-columns: repeat(4, auto);
    gap: 12rem;

    h5{
        color: white;
    }

    p{
        color: white;
    }

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(2, auto); 
        gap: 8rem;

    }
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, auto); 
        gap: 5rem;

    }
`

const Contact = styled.div`
    width:700px;

    h2{
        color: white;
    }

    @media screen and (max-width: 800px) {
        width: 370px;
    }
`

const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    padding: 1rem 6rem;

    div{
        color: white;
    }

    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`

const Selector = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 32px;
    background-color: white;
    border: 1px solid black;
    width: 350px;

    @media screen and (max-width:800px) {
        height: 45px;
    }
`

const FirstButton = styled.button<Props>`
    width: 150px;
    height: 35px;
    border-radius: 32px;
    outline: none;
    border: none;
    background-color: ${(props) => (props.changeColor ? "black" : "white")};
    color: ${(props) => (props.changeColor ? "white" : "black")};
`

const SecondButton = styled.button<Props>`
    width: 150px;
    height: 35px;
    border-radius: 32px;
    outline: none;
    border: none;
    background-color: ${(props) => (props.changeColor ? "white" : "black")};
    color: ${(props) => (props.changeColor ? "black" : "white")};
`

const Button = styled.button`
    border-radius: 8px;
    outline:none;
    border:none;
    width: 100px;
    height: 35px;
    margin-top: 10px;
`

function Footer() {

    const [change, setChange] = useState<boolean>(true);

    const handleChangeOne = () => {
        setChange(true)
    }

    const handleChangeTwo = () => {
        setChange(false)
    }

    return (
        <FooterContainer>
            <TopContainer>
                <Left>
                    <div><span>Year founded</span></div>
                    <h1>2012</h1>
                </Left>
                <Right>
                    <div><span>Location</span></div>
                    <h1>Ploče, Croatia</h1>
                </Right>
            </TopContainer>
            <CenterContainer>
                {
                    change ? <Profile>
                        <div>
                            <h5>Get in touch</h5>
                            <p>summary@summary.com <br />summary-help@summary.com</p>
                        </div>
                        <div>
                            <h5>Connect</h5>
                            <p>Facebook <br />Instagram</p>
                        </div>
                        <div>
                            <h5>Design Services</h5>
                            <p>Summary Design Services GmbH <br />Vukovarska 9 <br />20343 Ploče</p>
                        </div>
                        <div>
                            <h5>Ventures</h5>
                            <p>Summary Ventures GmbH <br />Vukovarska 9 <br />20343 Ploče</p>
                        </div>
                    </Profile>
                        :
                        <Contact>
                            <Form className="d-flex justify-content-center align-items-center flex-column w-100" data-bs-theme="dark">
                                <h2>Contact us:</h2>
                                <InputGroup className="py-3">
                                    <InputGroup.Text id="basic-addon1"><GoIcons.GoMail /></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <Button>Send!</Button>
                            </Form>
                        </Contact>
                }
            </CenterContainer>
            <BottomContainer>
                <div>
                    Made by Luka <br /> ©2023 Data Privacy Import
                </div>
                <Selector>
                    <FirstButton onClick={handleChangeOne} changeColor={change}>
                        Profile
                    </FirstButton>
                    <SecondButton onClick={handleChangeTwo} changeColor={change}>
                        Contact
                    </SecondButton>
                </Selector>
            </BottomContainer>
        </FooterContainer>
    )
}

export default Footer
