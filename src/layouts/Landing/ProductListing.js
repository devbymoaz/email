import { Box, Card, Grid, Stack, Typography, styled, Button, Divider } from '@mui/material';
import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate, Link } from 'react-router-dom';
import { Directions } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
}));
const StyledButton = styled(Button)(({ theme }) => ({
    background: theme.palette.secondary.main,
    color: '#fff',
    textTransform: 'none',
    height: '50px',
    width: '130px',
    '&:hover': {
        background: theme.palette.primary.main
    }
}));
const StyledButton2 = styled(Button)(({ theme }) => ({
    background: theme.palette.secondary.main,
    color: '#fff',
    textTransform: 'none',
    height: '60px',
    width: '200px',
    fontSize: '1rem',
    '&:hover': {
        background: theme.palette.primary.main
    }
}));
const data = [
    { id: 1, title: 'Electronics, Equipment', price: '$4,229,4.00', mp: '$100,697.00', rev: '$468,513.00', mon: 'Amazon, FBA', created: 2020, pic: '/assets/images/electronic.jpg' },
    { id: 2, title: 'Clothing, Apparel', price: '$2,569,981.00', mp: '$87,345.00', rev: '$325,768.00', mon: 'Etsy', created: 2019, pic: '/assets/images/clothing.jpg' },
    { id: 3, title: 'Home, Furniture', price: '$3,865,129.00', mp: '$125,679.00', rev: '$543,987.00', mon: 'eBay', created: 2021, pic: '/assets/images/furniture.jpeg' },
    { id: 4, title: 'Books, Literature', price: '$1,765,342.00', mp: '$57,893.00', rev: '$236,765.00', mon: 'Amazon, Kindle', created: 2018, pic: '/assets/images/books.webp' },
    { id: 5, title: 'Toys, Games', price: '$2,142,567.00', mp: '$68,432.00', rev: '$289,876.00', mon: 'Walmart', created: 2017, pic: '/assets/images/toys.jpg' },
];

const ProductListing = () => {
    const navigate = useNavigate();
    const handleViewListniong = (listning) => {

        navigate('/view-listning', { state: { listning } });
    };
    return (

        <div>

            <Grid container spacing={2}>
                {
                    data.map((val, ind) => {
                        return (
                            <Grid item
                                xs={12}
                                md={12}
                                lg={12}
                            >
                                <StyledCard elevation={0}>
                                    <Stack direction="row" spacing={2}>
                                        <Box flex={1}
                                            component="img"
                                            src={val.pic}
                                            sx={{ height: '230px', width: '25%' }}
                                        >
                                        </Box>
                                        <Box flex={5}>
                                            <Stack>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Box sx={{ background: '#2DC799', padding: '0px 20px', height: '30px', margin: '0px 10px' }}>
                                                            <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: '#fff' }}>
                                                                #7102356
                                                            </Typography>
                                                        </Box>
                                                        <FiberManualRecordIcon sx={{ ml: 1, height: '20px', color: '#2DC799' }} />
                                                        <Typography fontWeight="bold" sx={{ color: '#828282' }}> New Listing</Typography>
                                                    </Box>
                                                    <Box sx={{
                                                        display: 'flex',
                                                        // flexDirection: 'row',
                                                        // flexWrap: 'wrap'
                                                    }}>
                                                        <StyledButton

                                                            onClick={() => handleViewListniong(val)}
                                                            endIcon={<ArrowForwardIcon />}
                                                        >
                                                            View Listning
                                                        </StyledButton>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ mb: 1 }}>
                                                    <Typography variant='h6' fontWeight="bold">
                                                        {val.title}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
                                                    <Box>
                                                        <Typography>
                                                            Price
                                                        </Typography>
                                                        <Typography fontWeight="bold">
                                                            {val.price}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            Monthly New Profit
                                                        </Typography>
                                                        <Typography fontWeight="bold">
                                                            {val.mp}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            Monthly Revenue
                                                        </Typography>
                                                        <Typography fontWeight="bold">
                                                            {val.rev}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            Monetization
                                                        </Typography>
                                                        <Typography fontWeight="bold">
                                                            {val.mon}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            Business Created
                                                        </Typography>
                                                        <Typography fontWeight="bold">
                                                            {val.created}
                                                        </Typography>
                                                    </Box>

                                                </Box>
                                                <Box sx={{ mb: 1 }}>
                                                    <Typography>
                                                        This listing is for an eCommerce, Amazon FBA, and wholesale business created in October 2020
                                                    </Typography>
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
                                    </Stack>
                                </StyledCard>
                            </Grid>
                        );


                    })
                }
            </Grid >
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                <StyledButton2 variant='contained'
                    endIcon={<ArrowForwardIcon />}
                >
                    View All Listing
                </StyledButton2>
            </Box>
        </div >
    );
};

export default ProductListing;
