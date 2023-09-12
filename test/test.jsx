<Box flex={5}>
    <Stack>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
</Box>;