import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import Summary from '../components/Summary';

const TVShow = () => {
    const { id } = useParams();
    const [tvshow, setTVShow] = useState({});

    const getTVShow = async () => {
        const response = await fetch(`http://localhost:8020/medias?id=${id}`);
        const tvshow = (await response.json())[0];
        setTVShow(tvshow);
    };

    useEffect(() => {
        getTVShow()
    }, []);

    return (
        <Box sx={{ p: 12 }}>
            {Object.keys(tvshow).length !== 0 ? <Summary media={tvshow} /> : <></>}
        </Box>
    )
}

export default TVShow
