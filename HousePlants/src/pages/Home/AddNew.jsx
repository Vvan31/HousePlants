import React, { useEffect } from "react";

//data
import { Box } from '@mui/material';
import './AddNew.css'
//Components
import PostList from "@/components/Post/PostList";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/Search/searchBar";

const AddNew = () => {
    return (
        <>
        <Header />
        {/* <h1>Add New</h1> */}
        <div className='an_main'>
            <SearchBar />
            <Box sx={{ marginTop:'1%', height: '85vh', width: '99vw' }}>
                <PostList />
            </Box>
        </div>
        </>
    )
};

export default AddNew;