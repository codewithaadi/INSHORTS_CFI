import React from 'react';
import { Box, Typography,styled } from '@mui/material';

const Container = styled(Box)`
    background: #f44336;
    color:#FFF;
    display: flex;
    align-items:center;
    height:48px;
`
const Image= styled(`img`)({
    marginTop: 4,
    height: 34,
    '&:last-child':{
        margin: '0 50px 0 20px'
    }
})

const Text = styled(Typography)`
    font-size:14px;
    font-weight:bold;
    margin-left: 50px;
`

export default function InfoHeader() {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Container>
            <Text>For the best experience use Inshorts app on your smartphone</Text>
            <Box style={{marginLeft: 'auto'}}>
                <Image src={appleStore} alt='appleStore'/>
                <Image src={googleStore} alt='appleStore'/>
            </Box>
        </Container>
    )
}
