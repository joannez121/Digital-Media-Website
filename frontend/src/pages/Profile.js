import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { Box } from '@mui/material'
import Summary from '../components/Summary';
import ProfileSummary from '../components/ProfileSummary';

const Profile = () => {
    const [profileData, setProfileData] = useState([]);
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        const getProfileData = async () => {
            console.log(`http://localhost:8080/user/${userId}`)
            const response = await fetch(`http://localhost:8080/user/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await response.json();
            console.log(data)
            setProfileData(data);
        };
        getProfileData();
    }, []);

    return (
        <Box sx={{ p: 12 }}>
            {profileData && <ProfileSummary profileData={profileData} />}
        </Box>
    )
}

export default Profile
