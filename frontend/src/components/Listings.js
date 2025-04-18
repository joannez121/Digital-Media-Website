import React, { useEffect, useState } from 'react'
import MediaGrid from './MediaGrid';
import FilterSection from './FilterSection';
import { TextField } from '@mui/material';

const genreValues = ["All", "Action", "Adventure", "Animation", "Comedy", "Crime", "Horror", "Legal", "Mystery", "Romance", "Sci-Fi", "Thriller"];
const yearValues = ["All", "2024", "2025"];
const countryValues = ["All", "Canada", "China", "South Korea", "United States"];

const Listings = ({ type }) => {
    const typeFilter = type === "all" ? "" : `type=${type}`;

    const [medias, setMedias] = useState([]);
    const [title, setTitle] = useState("");

    const [genre, setGenre] = useState("All");
    const [country, setCountry] = useState("All");
    const [year, setYear] = useState("All");

    const [titleSort, setTitleSort] = useState(true);
    const [releaseDateSort, setReleaseDateSort] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleGenreChange = (event) => {
        setGenre(event.target.innerText);
    }

    const handleCountryChange = (event) => {
        setCountry(event.target.innerText);
    }

    const handleYearChange = (event) => {
        setYear(event.target.innerText);
    }

    const handleTitleSort = () => {
        setTitleSort(true);
        setReleaseDateSort(false);
    }
    const handleReleaseDateSort = () => {
        setTitleSort(false);
        setReleaseDateSort(true);
    }

    useEffect(() => {
        const getMediaData = async () => {
            const genreFilter = genre === "All" ? "" : `&genres_like=${genre}`;
            const countryFilter = country === "All" ? "" : `&country=${country}`;
            const yearFilter = year === "All" ? "" : `&releasedDate_like=${year}`;

            const titleSorting = !titleSort ? "" : `&_sort=title&order=asc`;
            const releaseDateSorting = !releaseDateSort ? "" : `&_sort=releasedDate&order=desc`;

            const filters = `${typeFilter}${genreFilter}${countryFilter}${yearFilter}${titleSorting}${releaseDateSorting}`

            let movies = [];
            let tvshows = [];
            let moviesList = [];
            let tvshowsList = [];

            if (type === "movie") {
                movies = await fetch(`https://digital-media-website.onrender.com/searchmovies?title=${title}`);
                moviesList = await movies.json();
            } else if (type === "tvshow") {
                tvshows = await fetch(`https://digital-media-website.onrender.com/searchtvshows?title=${title}`);
                tvshowsList = await tvshows.json();
            } else {
                movies = await fetch(`https://digital-media-website.onrender.com/searchmovies?title=${title}`);
                tvshows = await fetch(`https://digital-media-website.onrender.com/searchtvshows?title=${title}`);
                
                moviesList = await movies.json();
                tvshowsList = await tvshows.json();
            }
            const all = [...moviesList, ...tvshowsList];
            const mediaDataList = all.sort((a, b) => a.title.localeCompare(b.title))

            console.log(mediaDataList)

            setMedias(mediaDataList);
        };
        getMediaData();
    }, [typeFilter, genre, country, year, titleSort, releaseDateSort, title]);

    return (
        <>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={title}
                onChange={handleTitleChange}
            />
            <FilterSection genreValues={genreValues} yearValues={yearValues} countryValues={countryValues} genre={genre} country={country} year={year} titleSort={titleSort} releaseDateSort={releaseDateSort} handleGenreChange={handleGenreChange} handleCountryChange={handleCountryChange} handleYearChange={handleYearChange} handleTitleSort={handleTitleSort} handleReleaseDateSort={handleReleaseDateSort} />
            <MediaGrid medias={medias} />
        </>
    )
}

export default Listings