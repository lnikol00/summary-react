import { useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

type Props = {
    openNavbar?: boolean;
}

const HeaderContainer = styled.div`
    box-shadow: 5px 0px 10px #ccc;
`

const Wraper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    width: 100%;
    position: relative;
    z-index: 6;

    @media screen and (max-width: 600px) {
        padding: 0 10px;
    }
`

const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;

    @media screen and (max-width: 600px){
        gap: 2rem;
    }
    @media screen and (max-width: 400px){
        gap: 0.5rem;
    }
`

const LeftWrapper = styled.div<Props>`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    width: 3rem;
    height: 2.5rem;
    border-radius: 8px;

    &:hover{
        background-color: #e2e1e1;
    }

    div{
        width: 1.7rem;
        height:0.1rem;
        background-color: black;
        transition: cubic-bezier(0.275, 0.885, 0.32, 1) 0.5s;

        &:nth-child(1){
            transform:rotate(${(props) => (props.openNavbar ? "45deg" : "0")}) translate(${(props) => (props.openNavbar ? "0.35em, 0.35em" : "0")});
        }
        &:nth-child(2){
            transform:scale(${(props) => (props.openNavbar ? "0.1" : "1")});
        }
        &:nth-child(3){
            transform:rotate(${(props) => (props.openNavbar ? "-45deg" : "0")}) translate(${(props) => (props.openNavbar ? "0.25rem, -0.25rem" : "0")});
        }
    }
`

const Heading = styled.h3`
    padding-top: 3px;
    
    a{
        text-decoration: none;
        color: black;

        &:hover{
            color: #44c0ea;
        }
    }
`

const Right = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 20px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
    padding-top: 13px;
    font-size: 18px;

    @media screen and (max-width: 1200px){
         grid-template-columns: repeat(1, auto);
        margin-right: 0;
        width: 0;
    }
`

const MenuLink = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        text-decoration: none;
        color: black;

        
        &:hover{
            color: #44c0ea;
        }
    }

    @media screen and (max-width: 1200px){
        display: none;
    }
`

const SpecialLink = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: #44c0ea;
    width:125px;
    height: 50px;

    a{
        text-decoration: none;
           color: white;
    }
`

const Navbar = styled.nav<Props>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 2rem 12rem;
    position: absolute;
    width: 100%;
    height: 450px;
    background-color: white;
    top: ${(props) => (props.openNavbar ? "72px" : "-100%")};
    transition: all 500ms ease;
    z-index:5;
    border-bottom: 1px solid black;

    a{
        text-decoration: none;
        color: black;
        font-size: 3rem;
        padding: 20px 0;

         &:hover{
            color: #44c0ea;
        }

        @media screen and (max-width: 700px){
            font-size: 2rem;
        }
        @media screen and (max-width: 500px){
            font-size: 1.5rem;
        }
    }

    
    @media screen and (max-width: 960px){
           padding: 2rem 8rem;
    }
    @media screen and (max-width: 500px){
           padding: 2rem 5rem;
    }
`

function Header() {

    const [open, setOpen] = useState<boolean>(false)

    const openNav = () => {
        setOpen(!open)
    }

    return (
        <HeaderContainer>
            <Wraper>
                <Left >
                    <LeftWrapper onClick={openNav} openNavbar={open}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </LeftWrapper>
                    <Heading><Link to="/">Summmary.co</Link></Heading>
                </Left>
                <Right>
                    <MenuLink><Link to="">Home</Link></MenuLink>
                    <MenuLink><Link to="">Frontend developer</Link></MenuLink>
                    <MenuLink><Link to="">Backend developer</Link></MenuLink>
                    <SpecialLink><Link to="">Get in touch</Link></SpecialLink>
                </Right>
            </Wraper>
            <Navbar openNavbar={open}>
                <Link to="">Home</Link>
                <Link to="">Frontend developer</Link>
                <Link to="">Backend developer</Link>
            </Navbar>
        </HeaderContainer>
    )
}

export default Header
