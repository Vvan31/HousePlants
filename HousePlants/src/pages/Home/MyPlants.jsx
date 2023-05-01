import React from 'react';

import PostList from '@/components/Post/PostList';

import { Box } from '@mui/material';

import Header from '@/components/Header/Header';

import './Myplants.css'

const MyPlants = () =>{
    return (
        <>
        <Header />
        <div className='mp_main'>
            <Box sx={{ marginTop:'0%', height: '95vh', width: '99vw' }}>
                <PostList />
            </Box>
        </div>
        </>
    )
};

export default MyPlants;