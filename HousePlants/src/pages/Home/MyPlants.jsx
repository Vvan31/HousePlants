import React from 'react';

import PostList from '@/components/PostList';

import { Box, Container } from '@mui/material';

import Header from '@/components/Header/Header';

const MyPlants = ({user, handleAddPost, userPosts }) =>{
    return (
        <>
        <Container maxWidth="xl">
            <Header />
            <Box sx={{ marginTop:'5%', height: '100vh', width: '100%' }}>
                <PostList actualPage={'MY PLANTS'} />
            </Box>
        </Container>
        </>
    )
};

export default MyPlants;