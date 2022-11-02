import React from "react"
import styled from "styled-components"


const Container = styled.div`
    padding: 5px;
    margin-bottom: 3rem;
    -webkit-transition: all 1s;
    transition: all 1s;
`

function Header(){
    return(
        <Container>
            <h1>Movies</h1>
        </Container>
    )
}

export default Header