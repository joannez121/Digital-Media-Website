import React, { useState } from 'react'
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Stack } from '@mui/material';

const Login = ({ show, handleLoginClose, handleSignupClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("logged in");
        handleLoginClose();
    }

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
                            label="Email"
                            type="email"
                            required
                            variant="standard"
                            fullWidth
                            onChange={handleEmailChange}
                            value={email}
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
