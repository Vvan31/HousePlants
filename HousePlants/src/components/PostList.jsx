import React from 'react';

import { Box, ImageList } from '@mui/material';
import Post from '@/components/Post'

const PostList = ({posts, userPosts, setUserPosts, handleAddUserPost, actualPage}) =>{
   
    const arrayToRender = (actualPage === 'My Plants')?userPosts:posts;

    return (
      <>
        <ImageList sx={{ width: '110%', height: '65%', overflowY:'scroll'}} gap={2} cols={5} rowHeight={174}>
        {arrayToRender.map((post, index) => (
            <Post key={index} post={post} userPosts={userPosts} handleAddUserPost={handleAddUserPost} setUserPosts={setUserPosts} actualPage={actualPage}/>
         ))}
        </ImageList>
     </>
    )
};

export default PostList;