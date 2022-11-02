import { Container, MovieList, Movie, ImageBanner, CardBody, MainCardTitle, Paragraphy } from './styles';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


function Home(){

    const image_path = "https://image.tmdb.org/t/p/w500/"
    const[movies, setMovies] = useState([])

    useEffect(()=>{
        //consumir a api
        
        const options = {
            method: "GET",
        }

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=915b815e9c409fd816f628e3d7f0a3c1&language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => setMovies(data.results))
        
    }, [])

    return(
        <Container>
            <Header/>
            <div class="card mb-3">
            <ImageBanner src="lanterna-cinema.jpg" class="card-img-top" alt="..."/>
                <CardBody class="card-body">
                    <MainCardTitle class="card-title">Você sabia?</MainCardTitle >
                    <Paragraphy class="card-text"> Inventada no século XVII, a lanterna mágica tratava-se de uma câmara escura que projetava, através de lentes e luz, desenhos pintados à mão em vidros. Um narrador se encarregava de contar a história e algumas vezes havia acompanhamento musical.
                    A lanterna mágica se tornou uma grande atração em feiras urbanas, mas também foi usada no ambiente acadêmico.</Paragraphy>
                </CardBody>
            </div>
            <MovieList>
                {movies.map(movie => {
                    return(
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${image_path}${movie.poster_path}`} alt={movie.title}/>
                            </Link>
                            
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

            </MovieList>
        </Container>
    )
}
export default Home;