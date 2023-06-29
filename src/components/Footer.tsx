import styled from "styled-components"

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #3f3e3e;
    width: 100%;
    height: 650px;
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:#44c0ea;
    padding-bottom: 50px;
    width:90%;
    height: 60%;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
`

const Left = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid black;
    border-top-left-radius: 14px;
    gap: 60px;
    span{
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        border-radius: 16px;
        padding: 2px 10px;
        text-transform:uppercase;
    }

    h1{
        display: flex;
        justify-content: flex-end;
        font-size: 5em;
    }
`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid black;
    border-top-left-radius: 14px;
    gap: 60px;
   span{
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        border-radius: 16px;
        padding: 2px 10px;
        text-transform:uppercase;
    }

    h1{
        display: flex;
        justify-content: flex-end;
        font-size: 5em;
    }
`

const CenterContainer = styled.div`
    display:grid;
    align-items: center;
    grid-template-columns: repeat(4, auto);
    gap: 12rem;
    height: 40%;

    p{
        color: white;
    }
`
const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    padding: 1rem 5rem;
`

const Selector = styled.div`    
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    border-radius: 32px;
    background-color: white;
    border: 1px solid black;
    width: 300px;
`

function Footer() {
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
            </CenterContainer>
            <BottomContainer>
                <div>
                    Made by Luka <br /> ©2023 Data Privacy Import
                </div>
                <Selector>
                    <div>
                        Profile
                    </div>
                    <div>
                        Contact
                    </div>
                </Selector>
            </BottomContainer>
        </FooterContainer>
    )
}

export default Footer
