import React, { useEffect } from 'react';

import { Box } from '@mui/material';
import PostList from '@/components/PostList'


const CreateCard = ({user, posts, handleAddPost}) =>{
    const [plants, setPlants] = React.useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '473af0ce5dmsh05af91a66aee28cp1f5a61jsnfdb2b69f95c7',
                'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
            }
        };
        
        fetch('https://house-plants.p.rapidapi.com/all', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .then(response => setPlants(response))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>Create Card</h1>
            <Box sx={{ marginTop:'5%', height: '100vh', width: '90vw' }}>
                <PostList posts={posts} />
            </Box>
        </>
        
    )
};

export default CreateCard;