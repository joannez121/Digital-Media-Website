import React, { useEffect, useState } from 'react'
import MediaGrid from './MediaGrid';
import FilterSection from '../components/FilterSection';

const genreValues = ["All", "Action", "Adventure", "Animation", "Comedy", "Crime", "Horror", "Legal", "Mystery", "Romance", "Sci-Fi", "Thriller"];
const yearValues = ["All", "2024", "2025"];
const countryValues = ["All", "Canada", "China", "South Korea", "United States"];

const Listings = ( {type} ) => {  
    const typeFilter = type === "all" ? "" : `type=${type}&`;  

    const [medias, setMedias] = useState([]);

    const [genre, setGenre] = useState("All");
    const [country, setCountry] = useState("All");
    const [year, setYear] = useState("All");

    const [titleSort, setTitleSort] = useState(true);
    const [releaseDateSort, setReleaseDateSort] = useState(false);

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

    const getCollection = async (collection, filters) => {
        const response = await fetch(`http://localhost:8020/${collection}?${filters}`);
        return await response.json();
    };

    const getMediaData = async () => {
        const genreFilter = genre === "All" ? "" : `genres_like=${genre}&`;
        const countryFilter = country === "All" ? "" : `country=${country}&`;
        const yearFilter = year === "All" ? "" : `releasedDate_like=${year}&`;

        const titleSorting = !titleSort ? "" : `_sort=title&order=asc&`;
        const releaseDateSorting = !releaseDateSort ? "" : `_sort=releasedDate&order=desc&`;

        const filters = `${typeFilter}${genreFilter}${countryFilter}${yearFilter}${titleSorting}${releaseDateSorting}`

        const mediaDataList = await getCollection("medias", filters);
        
        setMedias(mediaDataList);
    };

    useEffect(() => {
        getMediaData();
    }, [genre, country, year, titleSort, releaseDateSort]);

    return (
        <>
            <FilterSection genreValues={genreValues} yearValues={yearValues} countryValues={countryValues} genre={genre} country={country} year={year} titleSort={titleSort} releaseDateSort={releaseDateSort} handleGenreChange={handleGenreChange} handleCountryChange={handleCountryChange} handleYearChange={handleYearChange} handleTitleSort={handleTitleSort} handleReleaseDateSort={handleReleaseDateSort} />
            <MediaGrid medias={medias} />
        </>
    )
}

export default Listings