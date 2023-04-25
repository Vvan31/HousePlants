import React, { useEffect } from "react";

//data
/* import { store, addPlant,  searchPlant } from "@/data/redux.js"; */
import { connect } from "react-redux";

import { Box } from '@mui/material';

//Components
import PostList from "@/components/Post/PostList";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/Search/searchBar";

const AddNew = () => {
    return (
        <>
        <Header />
        <h1>Add New</h1>
        <SearchBar />
        <Box sx={{ marginTop:'5%', height: '90vh', width: '100%' }}>
            <PostList />
        </Box>
        </>
    )
};

export default AddNew;