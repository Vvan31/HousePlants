import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'


import { Box, ImageList } from '@mui/material';

import Post from '@/components/Post/Post'

const PostList = ({searchPlants, plants}) =>{
  const [error, setError] = React.useState(null);
  const [posts, setPosts] = React.useState([]);
  const actualPage = useLocation().pathname.substring(1).toUpperCase();

  useEffect(() => {
   /*  console.log(actualPage + " " + posts.length); */

    if (actualPage === 'MYPLANTS'){
     /*  console.log(store.getState().plants); */
      setPosts(plants);

    }else{
     /*  console.log(store.getState().searchPlants); */
      setPosts(searchPlants);
   /*    console.log("POSTS: " + posts.length); */
    }
  }, [searchPlants, plants]);
 
    if (!posts || posts.length === 0) {
      return (
        <h1>There are no plants to show</h1>
    )} else{
      return (
        <>
          <ImageList sx={{ width: '100%', height: '85%', overflowY:'scroll'}} gap={2} cols={3} /* rowHeight={174} */> 
          {posts && posts.length > 0 && posts.map((post, index) => (
              <Post key={index} post={post} actualPage={actualPage}/>
          ))}
          </ImageList>
       </>
      )
    }
};

const mapStateToProps = (state) => {
  return {
      searchPlants: state.searchPlants,
      plants: state.plants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addPlant: (plant) => dispatch(addPlant(plant)),
      searchPlant: (plant) => dispatch(searchPlant(plant)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);