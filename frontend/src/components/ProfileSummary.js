import React from 'react';
import { Box, Typography, Card, CardContent, CardHeader, Divider } from '@mui/material';

const ProfileSummary = ({ profileData }) => {
    return (
        <Card sx={{ boxShadow: 3, p: 2 }}>
            <Box>
                <CardHeader title={`${profileData.firstName} ${profileData.lastName}`} />
                <Divider />
                <CardContent>
                    <Typography color="textSecondary">Full Name: {`${profileData.firstName} ${profileData.lastName}`}</Typography>
                    <Typography color="textSecondary">Username: {profileData.username}</Typography>
                    <Typography color="textSecondary">Email: {profileData.email}</Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default ProfileSummary
