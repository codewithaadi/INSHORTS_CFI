import React from 'react';
import {Card, CardContent,Grid,Typography,styled} from '@mui/material';

const Image = styled(`img`)({
    height : 270,
    width: '88%',
    objectFit : 'cover',
    borderRadius : '5px'
})

const Component = styled(Card)`
    margin-bottom: 20px;
    box-shadow : 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`
const Container = styled(CardContent)`
    padding: 8px;
    padding-bottom: 4px !important;
`
const Text = styled(Typography)`
    font-weight: 300;
    font-size:22px;
    color: #44444d;
    line-height: 22px;
`
const RightContainer = styled(Grid)(({theme})=>({
    margin:'5px 0 0 -25px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.between('sm', 'lg')]:{
        padding: '0 5px'
    },
    [theme.breakpoints.down('sm')]:{
        margin: '5px 0'
    }
}))

const Author = styled(Typography)`
    color: #808290;
    font-size:12px;
    line-height: 22px;
    `
const Description = styled(Typography)`
    line-hegiht: 22px;
    color: #44444d;
    margin-top: 5px;
    font-weight: 300;
`
const Publisher= styled(Typography)`
    margin-top: auto;
    font-size: 12px;
    margin-bottom: 10px;
    
`

export default function Article(props) {
  return (
    <Component>
        <CardContent>
            <Grid container>
                <Grid lg={5} sm={5} xs={12} item>
                    <Image src={props.data.url}/>
                </Grid>
                <RightContainer lg={7} md={7} xs={12} item>
                    <Text>{props.data.title}</Text>
                    <Author>
                        <b>short</b> by {props.data.author} / {new Date(props.data.timestamp).toDateString()}
                    </Author>
                    <Description>
                        {props.data.description}
                    </Description>
                    <Publisher>
                        read more at &nbsp;
                        <a style={{textDecoration : 'none', color: "#000"}} href={props.data.link} target="_blank" ><b>{props.data.publisher}</b></a>
                    </Publisher>
                </RightContainer>
            </Grid>
        </CardContent>
    </Component>
  )
}
