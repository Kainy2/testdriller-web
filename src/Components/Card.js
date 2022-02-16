import React from 'react'
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = ({text}) => {
    return (
        <div className='shadow bg-white mx-4'>
            <CardContent sx={{ m: 1.5 }} >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   Product Name
                </Typography>
                <Typography fontFamily={'Montserrat'} variant="h5" component="div">
                   {text}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    Available
                </Typography>
                {/* <Typography variant="body2">
                 
                </Typography> */}
            </CardContent>
        </div>
    )
}

export default Cards