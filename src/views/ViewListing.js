/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Header from '../components/AppBar/Header';
import Footer from '../layouts/Landing/Footer';
import Page from '../components/page/page';
// import Divider from '@mui/material/Divider';
import { Divider, Stack, useTheme } from '@mui/material';



import { useLocation } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
function ViewListing() {
    const location = useLocation();
    const { listning } = location.state;
    const theme = useTheme();
    return (

        <>
            <Page
                title="View Listing"
            >
                <div>
                    <Header />
                </div>


                <Box display="flex"
                    justifyContent="right"
                    // alignItems="right"s
                    sx={{ height: '80vh', mb: 8, pr: 4, mt: 4 }}>
                    <Box flex={5} sx={{
                        padding: theme.spacing(5),
                    }}>
                        <Stack>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            </Box>
                            <Box sx={{
                                mb: 2
                            }}>
                                <Typography variant='h6' fontWeight="bold">
                                    {listning.title}
                                </Typography>

                            </Box>
                            <Box sx={{ mb: 1 }}>
                                <Typography>
                                    This listing is for an eCommerce, Amazon FBA, and wholesale business created in October 2020
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Typography>
                                    Price: &nbsp;
                                </Typography>
                                <Typography fontWeight="bold">
                                    {listning.price}
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>

                                <Box>
                                    <Typography>
                                        Monthly New Profit
                                    </Typography>
                                    <Typography fontWeight="bold">
                                        {listning.mp}
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem />
                                <Box>
                                    <Typography>
                                        Monthly Revenue
                                    </Typography>
                                    <Typography fontWeight="bold">
                                        {listning.rev}
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem />
                                <Box>
                                    <Typography>
                                        Monetization
                                    </Typography>
                                    <Typography fontWeight="bold">
                                        {listning.mon}
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem />
                                <Box>
                                    <Typography>
                                        Business Created
                                    </Typography>
                                    <Typography fontWeight="bold">
                                        {listning.created}
                                    </Typography>
                                </Box>

                            </Box>

                            <Divider sx={{ mb: 1 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Typography sx={{ color: '#929393' }}>
                                    Profit (9-months)  33%
                                </Typography>
                                <Typography sx={{ color: '#929393' }}>
                                    Revenue (3-months)  30%
                                </Typography>
                                <Typography sx={{ color: '#929393' }}>
                                    Traffic (9-months)  218%
                                </Typography>


                            </Box>
                        </Stack>
                    </Box>
                    <Card
                        justifyContent="center"
                        alignItems="center"
                        sx={{ width: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={listning.pic}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {listning.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {listning.price}
                                </Typography>
                                <Divider />
                                <box sx={{ display: 'flex', bg: 'red' }}>
                                    <Button
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{
                                            mt: 6,
                                            px: 4,

                                            // paddingright: theme.spacing(4),
                                            // paddingleft: theme.spacing(4),
                                            borderRadius: theme.spacing(3),
                                            background: theme.palette.secondary.third
                                        }} variant="contained"

                                    >Contact Seller</Button>
                                    <br />
                                    <Button
                                        sx={{
                                            mt: 4,
                                            px: 4,
                                            // padding: theme.spacing(1),
                                            borderRadius: theme.spacing(3),

                                        }} variant="outlined"

                                    >Make Offer</Button>
                                    <br />
                                    <Button

                                        sx={{
                                            mt: 4,
                                            px: 4,

                                            // padding: theme.spacing(1),
                                            borderRadius: theme.spacing(3),
                                            // background: theme.palette.secondary.main
                                        }} variant="outlined"
                                        startIcon={<RemoveRedEyeIcon />}

                                    >Watch</Button>
                                </box>

                            </CardContent>
                        </CardActionArea>
                    </Card>


                </Box >
                <div>
                    <Footer />
                </div>

            </Page >
        </>
    );

}


export default ViewListing;