import React from 'react'
import { Box } from '@mui/material';

const ContentImage = ({ src, alt }) => {
    return (
        <Box sx={{px: 10, pb: 3, pt: 5}}>
            <Box
                component="img"
                sx={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover"
                }}
                src={src}
                alt={alt}>
            </Box>
        </Box>

    )
}

export default ContentImage