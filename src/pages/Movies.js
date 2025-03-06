import React from 'react'
import { Stack } from '@mui/material';
import Listings from '../components/Listings'
import PageHeader from '../components/PageHeader'

const Movies = () => {
    return (
        <Stack spacing={2} sx={{ p: 10 }}>
            <PageHeader heading="Movies" />
            <Listings type={"movie"} />
        </Stack>
    )
}

export default Movies
