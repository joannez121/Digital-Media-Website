import React from 'react'
import { Box } from '@mui/material';

const ContentImage = ({ src, alt }) => {
    return (
        <Box sx={{px: 10, pb: 3, pt: 5}}>
            <Box
                component="img"
                height="300px"
                width="100%"
                objectFit="cover"
                boxShadow="3"
                src={src}
                alt={alt}>
            </Box>
        </Box>

    )
}

export default ContentImage