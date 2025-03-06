import React from 'react'
import { AppBar, Toolbar, Typography, Stack} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleAllClick = () => {
        navigate("/all");
    }

    const handleMoviesClick = () => {
        navigate("/movies");
    }

    const handleTVShowsClick = () => {
        navigate("/tvshows");
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: "#7fdaf2", color: "white" }}>
            <Toolbar>
                <Stack direction="row"
                    sx={{
                        justifyContent: "space-evenly",
                        p: 5,
                        width: "100%"
                    }}
                >
                    <Stack>
                        <Typography variant="h6">Watch</Typography>
                        <Typography onClick={handleAllClick}>All</Typography>
                        <Typography onClick={handleMoviesClick}>Movies</Typography>
                        <Typography onClick={handleTVShowsClick}>Shows</Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h6">My Account</Typography>
                        <Typography>My Media</Typography>
                        <Typography>Account</Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h6">About JMedia</Typography>
                        <Typography>About Us</Typography>
                        <Typography>Contact Us</Typography>
                        <Typography>Terms & Conditions</Typography>
                        <Typography>Privacy Policy</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <FacebookIcon />
                        <XIcon />
                        <InstagramIcon />
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
export default Footer;