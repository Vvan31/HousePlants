import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'

//Actions 
import { addPlant, fetchPlantsSuccess } from '@/data/redux/actions';

import { ImageList } from '@mui/material';

import Post from '@/components/Post/Post'

const PostList = ({searchPlants, plants, addPlant}) =>{
  const [error, setError] = React.useState(null);
  const [posts, setPosts] = React.useState([]);
  const actualPage = useLocation().pathname.substring(1).toUpperCase();

  useEffect(() => {
    (actualPage === 'MYPLANTS')
    ? setPosts(plants)
    :setPosts(searchPlants);
  }, [searchPlants, plants]);
 
  const handleAddUserPost = (post) => { 
    addPlant(post);
  };

    if (!posts || posts.length === 0) {
      return (
        <h1>There are no plants to show</h1>
    )} else{
      return (
        <>
          <ImageList sx={{ width: '100%', height: '85%', overflowY:'scroll'}} gap={2} cols={3} /* rowHeight={174} */> 
          {posts && posts.length > 0 && posts.map((post, index) => (
              <Post key={index} post={post} handleAddUserPost={handleAddUserPost} actualPage={actualPage}/>
          ))}
          </ImageList>
       </>
      )
    }
};

const mapStateToProps = (state) => {
  return {
    searchPlants: state.searchReducer.searchPlants,
    plants: state.plantReducer.userPlants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addPlant: (plant) => dispatch(addPlant(plant)),
      searchPlant: (plant) => dispatch(fetchPlantsSuccess(plant)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);