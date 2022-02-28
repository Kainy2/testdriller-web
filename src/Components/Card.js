import React from 'react'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Cards = ({ text, link, ...props }) => {
    return (
        <div className='md:flex md:flex-col justify-between shadow-sm bg-white mx-4' {...props}>
            <div>
                <CardContent sx={{ m:1 }} >
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Product Name
                    </Typography>
                    <Typography fontFamily={'Montserrat'} variant="h5" component="div">
                        {text}
                    </Typography>
                    <Typography sx={{ mt: 1.5 }} color="text.secondary">
                        Available
                    </Typography>
                </CardContent>
            </div>
            <div className='mb-5 bg-gray-900 text-center' >
                <Button variant="default" sx={{ color: 'white' }} size='large' color='transparent' href={link}> Download Now </Button>
            </div>
        </div>
    )
}

export default Cards