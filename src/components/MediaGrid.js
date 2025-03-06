import React from 'react'
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const MediaGrid = ({ medias }) => {
    const navigate = useNavigate();

    return (
        <Grid container columns={{ xs: 2, sm: 3, md: 6 }} columnSpacing={3} rowSpacing={2}>
            {medias.map((media) => (
                <Grid size={1}>
                    <Box component="img"
                        src={media.mainPoster}
                        alt={media.title}
                        onClick={() => navigate(`/${media.type}/${media.id}`)}
                        width="100%"
                        height="90%">
                    </Box>
                    <Typography textAlign="center">{media.title}</Typography>
                </Grid>
            ))}
        </Grid>
    )
}

export default MediaGrid