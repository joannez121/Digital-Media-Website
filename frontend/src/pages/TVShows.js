import React from 'react'
import { Stack } from '@mui/material';
import Listings from '../components/Listings'
import PageHeader from '../components/PageHeader'

const TVShows = () => {
    return (
        <Stack spacing={2} sx={{ p: 10 }}>
            <PageHeader heading="TV Shows" />
            <Listings type={"tvshow"} />
        </Stack>
    )
}

export default TVShows
