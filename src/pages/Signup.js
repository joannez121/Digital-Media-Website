import React, { useState } from 'react'
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Stack } from '@mui/material';

const Signup = ({ show, handleSignupClose }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("signed up")
        handleSignupClose();
    }

    return (
        <Dialog
            open={show}
            onClose={handleSignupClose}
        >
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Create an account now to start watching the latest movies and tv shows
                </DialogContentText>
                <Box component="form" onSubmit={handleSubmit}>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            label="First Name"
                            required
                            variant="standard"
                            onChange={handleFirstNameChange}
                            value={firstName}
                        />
                        <TextField
                            label="Last Name"
                            required
                            variant="standard"
                            onChange={handleLastNameChange}
                            value={lastName}
                        />
                    </Stack>
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
                            <Button type="submit">Sign Up</Button>
                            <Button onClick={handleSignupClose}>Cancel</Button>
                        </Stack>
                    </Stack>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Signup
