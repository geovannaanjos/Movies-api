import styled from 'styled-components'

export const Container = styled.div`
    h1{
        text-align: center;
        transition: .5s;
        color: #ccc;
        font-size: 4rem;
        font-family: 'Philosopher';
        font-weight: 100;
    }
    h1:hover{
        transform: translateY(-5px);
        color: #8a3eff;
        
    }
    
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    span{
        font-weight: bold;
        font-size: 120%;
        text-align: center;
        @media(min-width: 768px){
            font-size: 130%;
        }
    }
    a{
        transition: all 0.3s;
    }
    a:hover{
        transform: scale(1.1);
    }
`

export const Body = styled.body`
    margin-bottom: 2rem;
    border-radius:5px;
    padding: 10rem;
    opacity: 0.5;
    @media(min-width: 768px){
        padding: 4rem;
    }

`

export const Image = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;

`
export const ImageBanner = styled.img`
    width: 100%;
    height: 20vh;
    object-fit: cover;
    object-position: center;
    @media(min-width: 768px){
        height:35vh;
    }
    @media(min-width: 920px){
        height: 75vh;
    }
`

export const CardBody = styled.div`
    margin-bottom: 5rem;
`

export const MainCardTitle = styled.h3`
    color: #ccc;
    margin: 1rem 0;
    @media(min-width:768px){
        font-size: 30px;
    }
`

export const Paragraphy = styled.p`
    line-height: 1.2;
    font-weight:100;
    text-align: start;
    color: #ddd;
    ::selection{
        background-color: #8a3eff;
        color: #fff;
        cursor: text;
    }
    @media(min-width:768px){
        font-size: 20px;
        font-weight: 100;
        color: #ddd;
    }
    @media(min-width: 900px){
        font-size: 20px;
    }
    @media(min-width: 1280px){
        font-size: 20px;
        width: 100%;
        max-width: 100%;
    }
`


