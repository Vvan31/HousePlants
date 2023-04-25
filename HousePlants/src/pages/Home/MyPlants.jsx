import React from 'react';

import PostList from '@/components/Post/PostList';

import { Box, Container } from '@mui/material';

import Header from '@/components/Header/Header';

const MyPlants = () =>{
    return (
        <>
        <Header />
        <h1>My plants</h1>
        <Box sx={{ marginTop:'5%', height: '90vh', width: '100%' }}>
            <PostList actualPage={'Add new'} />
            {/* <PostList actualPage={'MY PLANTS'} /> */}
        </Box>
        </>
    )
};

export default MyPlants;