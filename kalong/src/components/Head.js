import React from 'react'
import {Nav} from "react-bootstrap"
import styled from 'styled-components';

function Head({backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <div className="Top">
                                   
            </div>
            <div className="Main"></div>
            <div className="Down">
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1">Tag</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

        </Wrap>
    )
    
}

export default Head;

const Wrap = styled.div`
   heigt: 50%;
`