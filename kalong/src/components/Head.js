import React from 'react'
import styled from 'styled-components';



function Head({title,description,backgroundImg}) {
    return (
        
        <Wrap >
            <WhiteBg>
                <BgImage  bgImage={backgroundImg}>
                    <Column >
                        <TopDiv >
                            <LeftDiv >
                              <a className='Top-Nav-Item' href='/Home'><h1>KALONG</h1><span>Let Learn Together</span></a>
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
                        <ItemText className="Main">
                            <ItemText>
                                <h1>{title}</h1>
                                <p>{description}</p>
                            </ItemText>
                        </ItemText>
                        <DownDiv className="Down">
                            <NavBar className="justify-content-center" activeKey="/home">
                                <NavItem>
                                <NavLink href="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/home" eventKey="link-1">Tag</NavLink>
                                </NavItem>
                                <NavItem>
                                   <NavLink href="/home" eventKey="link-2">Projects</NavLink>
                                </NavItem>
                                <NavItem>
                                   <NavLink  href="/home" eventKey="link-2">Pubilcations</NavLink>
                                </NavItem>
                                
                                    <Bottun>
                                     <NavLink  href="../PortfolioContainer/Home/Profile.js" eventKey="Resume" disabled>Author</NavLink>
                                    </Bottun>
                                
                            </NavBar>
                        </DownDiv>    
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
    max-width:100vw;
    
    
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
    max-width: 85%;
    padding: 0 ;
    

`
const TopDiv = styled.nav`
     padding: 20px 0;
     margin: 0 auto;
     display: flex ;
     height: 20px;
     
     align-items: center;
     justify-content: space-between;
     position: relative;
     background-color: rgb(41,32,99);
     opacity: 0.7;
     border-radius: 10px;

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
    color: black;
    & > a {
        padding-left: 5px;
        text-align: center;
        color: white;
        font-size: 28px;
        
    }
    & > p {
        font-family:'Roboto',sans-serif;

    }
    

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
     width: 30px;
     color: black;
     transition: 0.5s;
     border-radius: 10% ;
     text-align: cneter;
     line-height:40px
     background-color: rgba(255,255,255,0.03);
     &:hover{
        background-color: white;
        opacity: 0.2;
    }     
`
const ItemText = styled.div`
    padding: 15vh;
    text-align: center;

`


const DownDiv = styled.nav`
    display: flex;
    justify-content: space-between;



`

const NavBar = styled.nav``

const NavItem = styled.div``

const NavLink = styled.a``

const Bottun = styled.button`

`