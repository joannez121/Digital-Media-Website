import { Box, Typography, Card, CardContent, CardActions, Button, CardHeader, Divider, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';


const Summary = ({ media }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const handleBuyClick = () => {
        alert("bought");
    }
    const handleRentClick = () => {
        alert("rented");
    }

    return (
        <Card >
            <Stack direction={matches ? "row" : "column"} spacing={2}>
                <Box component="img"
                    src={media.mainPoster}
                    alt={media.title}
                    width={matches ? "20%" : "40%"}
                    maxHeight="100%"
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
                    width={matches ? "35%" : "80%"}
                    minHeight="100%"
                    >
                </Box>
            </Stack>
        </Card>
    )
}

export default Summary
