import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import Summary from '../components/Summary';

const TVShow = () => {
    const { id } = useParams();
    const [tvshow, setTVShow] = useState(null);

    useEffect(() => {
        const getTVShow = async () => {
            const response = await fetch(`https://digital-media-db.vercel.app/medias?id=${id}`);
            const tvshow = (await response.json())[0];
            setTVShow(tvshow);
        };
        getTVShow();
    }, [id]);

    return (
        <Box sx={{ p: 12 }}>
            {tvshow && <Summary media={tvshow} />}
        </Box>
    )
}

export default TVShow
