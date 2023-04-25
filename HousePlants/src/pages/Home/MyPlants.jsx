import React from 'react';

import PostList from '@/components/Post/PostList';

import { Box } from '@mui/material';

import Header from '@/components/Header/Header';

const MyPlants = () =>{
    return (
        <>
        <Header />
        <h1>My plants</h1>
        <Box sx={{ marginTop:'5%', height: '90vh', width: '100%' }}>
            <PostList />
        </Box>
        </>
    )
};

export default MyPlants;