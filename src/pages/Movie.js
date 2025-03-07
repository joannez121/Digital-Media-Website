import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import Summary from '../components/Summary';

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            const response = await fetch(`https://digital-media-db.vercel.app/medias?id=${id}`);
            const movie = (await response.json())[0];
            setMovie(movie);
        };
        getMovie();
    }, [id]);

    return (
        <Box sx={{ p: 12 }}>
            {movie && <Summary media={movie} />}
        </Box>
    )
}

export default Movie
