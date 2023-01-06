import {useEffect,useState} from 'react';
import { Box } from '@mui/material';
import { getNews } from '../service/api';

export default function Article() {
    useEffect(()=>{
        dailyNews();
    },[]);

    const dailyNews = async()=>{
        let response = getNews();
    }

    return (
        <Box>
            Article
        </Box>
    )
}
