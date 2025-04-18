import { Box, Typography, Card, CardContent, CardActions, Button, CardHeader, Divider, Stack, useMediaQuery } from '@mui/material'
import React from 'react'

const Summary = ({ media }) => {
    const matches = useMediaQuery('(min-width:900px)');

    const handleBuyClick = () => {
        alert("bought");
    }
    const handleRentClick = () => {
        alert("rented");
    }

    return (
        <Card sx={{ boxShadow: 3, p: 2 }}>
            <Stack direction={matches ? "row" : "column"} spacing={2} sx={{ alignItems: "center" }}>
                <Box component="img"
                    src={media.mainPoster}
                    alt={media.title}
                    width={matches ? "20%" : "50%"}
                    boxShadow="3"
                >
                </Box>
                <Box >
                    <CardHeader title={media.title} />
                    <Divider />
                    <CardContent>
                        <Typography color="textSecondary">Type: {media.type === "movie" ? "Movie" : "TV Show"}</Typography>
                        <Stack direction="row" spacing={2}>
                            <Typography color="textSecondary">Country: {media.country}</Typography>
                            <Typography color="textSecondary">Release Year: {media.releasedDate.substring(0, 4)}</Typography>
                        </Stack>
                        {media.type !== "tvshow" ? <Typography color="textSecondary">Runtime: {media.length} mins</Typography> : <Typography color="textSecondary">Episodes: {media.eps}</Typography>}
                        <Stack direction="row" spacing={2}>
                            <Typography color="textSecondary">Genre:</Typography>
                            {media.genres.map((genre) => <Typography color="textSecondary">{genre}</Typography>)}
                        </Stack>
                        <Typography color="textSecondary" sx={{ pt: "20px" }}>
                            {media.synopsis}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" onClick={handleRentClick}>Rent ${media.rentPrice}</Button>
                        <Button size="small" variant="outlined" onClick={handleBuyClick}>Buy ${media.purchasePrice}</Button>
                    </CardActions>
                </Box>

                <Box component="img"
                    src={media.altPoster}
                    alt={media.title}
                    width={matches ? "35%" : "90%"}
                    boxShadow="3"
                >
                </Box>
            </Stack>
        </Card>
    )
}

export default Summary
