import styled from 'styled-components'

export const Container = styled.div`
    padding:4rem 0;
    height: 80vh;
    h1{
        margin: 3rem 0;
    }
    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
        @media(max-width: 820px){
            flex-direction: column;
            .details{
                margin: 0;
                max-width: 100%;
            }
        }
    }
    img{
        width: 300px;
        border-radius: 1rem;
    }
    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }
    button{
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: #fff;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
        margin-bottom: 1rem;
    }
    button:hover{
        background-color: #6654da;
    }
    span{
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 130%;
        color: #ddd;
        ::selection{
        background-color: #8a3eff;
        color: #fff;
        cursor: text;
        }
    }
    .release-date{
        opacity: 0.5;
    }
`

