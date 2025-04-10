import React, { useState } from 'react'
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ show, handleLoginClose, handleSignupClick }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        console.log(username)
        console.log(password)
        event.preventDefault();
        const response = await fetch(`https://digital-media-website.onrender.com/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS'
            },
            credentials: "include",
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        if (response.ok) {
            alert("user logged in");
            localStorage.setItem('userId', data.message);
            setUsername(null);
            setPassword(null);
            handleLoginClose();
            navigate('/profile');
        } else{
            alert(data.message);
        }
        
    };

    return (
        <Dialog
            open={show}
            onClose={handleLoginClose}
        >
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Login to start watching the latest movies and tv shows
                </DialogContentText>
                <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            label="Username"
                            required
                            variant="standard"
                            fullWidth
                            onChange={handleUsernameChange}
                            value={username}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            required
                            variant="standard"
                            fullWidth
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        <Stack direction="row">
                            <Button type="submit">Login</Button>
                            <Button onClick={handleLoginClose}>Cancel</Button>
                        </Stack>
                    </Stack>
                    <DialogContentText>No Account?<Button onClick={handleSignupClick} size="small">Signup</Button></DialogContentText>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login
