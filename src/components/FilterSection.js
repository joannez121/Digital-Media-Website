import React from 'react'
import { Typography, Accordion, AccordionDetails, AccordionSummary, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const textBackgroundColor = "#c9eff9"

const FilterSection = ({ genre, country, year, genreValues, countryValues, yearValues, titleSort, releaseDateSort,
                    handleGenreChange, handleCountryChange, handleYearChange, handleTitleSort, handleReleaseDateSort }) => {
    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: "bold" }}>Filter</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                        <Typography>Genre:</Typography>
                        {genreValues.map((value) => <Typography onClick={handleGenreChange} sx={{ "backgroundColor": genre === value ? textBackgroundColor : "", "&:hover": { backgroundColor: textBackgroundColor } }}>{value}</Typography>)}
                    </Stack>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                        <Typography>Country:</Typography>
                        {countryValues.map((value) => <Typography onClick={handleCountryChange} sx={{ "backgroundColor": country === value ? textBackgroundColor : "", "&:hover": { backgroundColor: textBackgroundColor } }}>{value}</Typography>)}</Stack>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                        <Typography>Year:</Typography>
                        {yearValues.map((value) => <Typography onClick={handleYearChange} sx={{ "backgroundColor": year === value ? textBackgroundColor : "", "&:hover": { backgroundColor: textBackgroundColor } }}>{value}</Typography>)}</Stack>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                        <Typography>Sort by:</Typography>
                        <Typography onClick={handleTitleSort} sx={{ "backgroundColor": titleSort ? textBackgroundColor : "", "&:hover": { backgroundColor: textBackgroundColor } }}>Title</Typography>
                        <Typography onClick={handleReleaseDateSort} sx={{ "backgroundColor": releaseDateSort ? textBackgroundColor : "", "&:hover": { backgroundColor: textBackgroundColor } }}>Release Date</Typography>
                    </Stack>
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}

export default FilterSection