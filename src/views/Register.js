// Limport React from 'react';
import { Container, Typography, TextField, Button, Box, } from '@mui/material';
import Page from '../components/page/page';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const hanldeChnage = ((e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    });
    const handleSubmit = ((e) => {
        e.preventDefault();
        console.log(values);
    });
    return (

        <>
            <Page title='Register Page'>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <Container maxWidth="sm">
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h4" align="center" gutterBottom>
                                Register
                            </Typography>
                            <TextField
                                label="First Name"
                                name='firstName'
                                value={values.firstName}
                                onChange={hanldeChnage}
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: values.firstName !== '' }}
                                margin="normal"
                            // required
                            />
                            <TextField
                                label="Last Name"
                                name='lastName'
                                value={values.lastName}
                                onChange={hanldeChnage}
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: values.lastName !== '' }}
                                margin="normal"

                                required
                            />
                            <TextField
                                label="Email"
                                name='email'
                                value={values.email}
                                onChange={hanldeChnage}
                                type="email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{ shrink: values.email !== '' }}
                                required
                            />
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                value={values.password}
                                onChange={hanldeChnage}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{ shrink: values.password !== '' }}
                                required
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Register
                            </Button>
                        </form>
                        <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
                            Already have an account?
                            <Link to="/login">login</Link>
                        </Typography>
                    </Container>
                </Box>
            </Page>


        </>
    );
}

export default Register;;;