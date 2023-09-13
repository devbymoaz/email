import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Page from '../components/page/page';
function Loogin() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const handleChange = ((e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    });
    const handleSubmit = ((e) => {
        e.preventDefault();
        console.log(values);
    });

    return (
        <>
            <Page title='LOGIN PAGE'>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <Container maxWidth="sm">
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h4" align="center" gutterBottom>
                                Login
                            </Typography>
                            <TextField
                                label="Email"
                                type="email"
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                margin="normal"

                                required
                            />
                            <TextField
                                label="Password"
                                type="password"
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                margin="normal"

                                required
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Login
                            </Button>
                        </form>
                        <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
                            Don't have an account? <Link to="/register">Register</Link>
                        </Typography>
                    </Container>
                </Box>
            </Page>
        </>

    );
}

export default Loogin;