import axios from 'axios';

const URL = "http://localhost:3000/"

export const getNews = async ()=>{
    
    try{
        return await axios.get(URL);
    }catch(error){
        console.log('Error whhile causing getNews Api',error);
    }
}