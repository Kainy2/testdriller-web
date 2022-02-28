import { Button } from '@mui/material'


export const ButtonHero = ({ title, link }) => {
    return (
        <div className='my-10 bg-gray-900 w-max mx-auto' > 
            <Button variant="default" sx={{ color: 'white' }} size='large' color='transparent' href={link}> {title} </Button>
        </div>
    );
}

