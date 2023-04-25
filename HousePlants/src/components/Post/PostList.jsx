import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/data/redux.js';

import { Box, ImageList } from '@mui/material';

import Post from '@/components/Post/Post'

const PostList = ({actualPage}) =>{
  const [error, setError] = React.useState(null);
  const [posts, setPosts] = React.useState([]);
    
  useEffect(() => {
   /*  console.log(actualPage + " " + posts.length); */
    if (actualPage === 'MY PLANTS'){
     /*  console.log(store.getState().plants); */
      setPosts(store.getState().plants);
    }else{
     /*  console.log(store.getState().searchPlants); */
      setPosts(store.getState().searchPlants)
   /*    console.log("POSTS: " + posts.length); */
    }
  }, [actualPage]);
 
    if (posts.length === 0) {
      return (
        <h1>There are no posts to show</h1>
    )} else{
      return (
        <>
          <ImageList sx={{ width: '100%', height: '85%', overflowY:'scroll'}} gap={2} cols={3} /* rowHeight={174} */> 
          {posts.length > 0 && posts.map((post, index) => (
              <Post key={index} post={post} actualPage={actualPage}/>
          ))}
          </ImageList>
       </>
      )
    }
};

export default PostList;