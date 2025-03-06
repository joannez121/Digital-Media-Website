import React from 'react'
import { Stack } from '@mui/material';
import Listings from '../components/Listings'
import PageHeader from '../components/PageHeader'


const All = () => {
    return (
        <Stack spacing={2} sx={{ p: 10 }}>
            <PageHeader heading="All Movies & TV Shows" />
            <Listings type={"all"} />
        </Stack>
    )
}

export default All
