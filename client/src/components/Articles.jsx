import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { getNews } from '../service/api';
import Article from './Article';

export default function Articles() {

    const [news, setNews] = useState([])

    useEffect(() => {
        dailyNews();
    }, []);

    const dailyNews = async () => {
        let response = await getNews();
        setNews(response.data);
    }

    return (
        <Box>
            {news.map(data => (
                <Article data={data}/>
            ))
            }
        </Box>
    )   
}
