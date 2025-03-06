import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import Summary from '../components/Summary';

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const response = await fetch(`http://localhost:8020/medias?id=${id}`);
        const movie = (await response.json())[0];
        setMovie(movie);
    };

    useEffect(() => {
        getMovie()
        console.log("here")
    }, []);

    return (
        <Box sx={{ p: 12 }}>
            {Object.keys(movie).length !== 0 ? <Summary media={movie} /> : <></>}
        </Box>
    )
}

export default Movie
