import React, { useEffect } from 'react';

import { Box, ImageList } from '@mui/material';
import Post from '@/components/Post/Post'

const PostList = 
({posts, 
    userPosts, setUserPosts, 
    handleAddUserPost, 
    actualPage, 
    search
  }) =>{
    const arrayToRender = (actualPage === 'My Plants')?userPosts
    :(search)?search:posts;

   /*  useEffect(() => {
      console.log('Search hook: ' + search);
    }, [search]) */

    return (
      <>
        <ImageList sx={{ width: '100%', height: '85%', overflowY:'scroll'}} gap={2} cols={3} rowHeight={174}> 
        {arrayToRender.map((post, index) => (
            <Post key={index} post={post} userPosts={userPosts} handleAddUserPost={handleAddUserPost} setUserPosts={setUserPosts} actualPage={actualPage}/>
         ))}
        </ImageList>
     </>
    )
};

export default PostList;