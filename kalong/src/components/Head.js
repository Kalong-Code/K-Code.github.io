import React from 'react'
import {Nav} from "react-bootstrap"
import styled from 'styled-components';

function Head({title,description,backgroundImg}) {
    return (
        <Wrap >
            <WhiteBg>
                <BgImage  bgImage={backgroundImg}>
                    <Column >
                        <TopDiv >
                            <LeftDiv >
                              <a className='Top-Nav-Item' href='/Home'><p>KALONG</p></a>
                            </LeftDiv>
                            <RightDiv className='right'>
                                <a className='Top-Nav-Item' href = "/">
                                    <Icon className='right-icon' src = "/images/icons/twitter.svg"  alt='twitter'/>
                                </a>
                                <a className='Top-Nav-Item' href = "/">
                                    <Icon src = "/images/icons/facebook.svg"  alt='facebook'/>
                                </a>
                                <a className='Top-Nav-Item' href = "/">
                                    <Icon className='right-icon' src = "/images/icons/rss.svg"  alt='rss'/>
                                </a>
                            </RightDiv>                   
                        </TopDiv>
                        <div className="Main">
                            <ItemText>
                                <h1>{title}</h1>
                                <p>{description}</p>
                            </ItemText>
                        </div>
                        <div className="Down">
                            <Nav className="justify-content-center" activeKey="/home">
                                <Nav.Item>
                                <Nav.Link href="/home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/home" eventKey="link-1">Tag</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/home" eventKey="link-2">Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link  href="/home" eventKey="link-2">Pubilcations</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link  href="./component/Resume" eventKey="Resume" disabled>
                                    Author
                                </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>    
                    </Column> 
                </BgImage>
            </WhiteBg>
        </Wrap>
    )
    
}

export default Head;
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    
`

const WhiteBg = styled.div`
    display: block;
    background-color: white;
    width: 1300px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
    padding-top: 10px; 
`
const BgImage = styled.div`
   height: 448px;
   width:1280px ;
   background-size: cover ;
   background-position: center;
   background-repeat: no-repeat;
   background-image: url('images/BG-Image.jpg');
   display: flex;
   flex-direction: column;
   align-items: center;
`
const Column = styled.div`

    margin: 0;
    max-width: 100%;
    padding: 0 ;
    

`
const TopDiv = styled.nav`
     margin: 0 auto;
     display: flex ;
     height: 40px;
     max-width: 1120px;
     flex-wrap: nowrap;
     align-items: center;
     justify-content: space-between;
     position: relative;
     background-color: ;
     border-radius: 5px;

& > a {
    width: 135px;
    heigth: 34px;
    @media (max-width: 768px) {
        padding: 0 5px;

    }
}

`
const LeftDiv = styled.div`
    flex: left;
    background-color: rgba(0,0,0,0.08);
    color: black;
    text-decoration: none;
`
const RightDiv = styled.div`
    flex: right ;
    font-size: 12px;
    justify-content: space-between; 
    text-decoration:none;
    border: 0;
    margin-right: 12px;
    cursor: pointer ;
    
`
const Icon = styled.img`
     height : 30px;
     padding: 10px ;

     &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.09);
        text-decoration: auto;
    }     
`
const ItemText = styled.div`
    padding: 15vh;
    text-align: center;
`
