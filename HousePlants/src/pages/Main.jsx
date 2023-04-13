import React from 'react'
import { useEffect } from 'react';

import './Main.css'


import CreateCard from '@/pages/CreateCard'
import Header from '@/components/Header'
import PostList from '@/components/PostList'
import MyPlants from '@/pages/MyPlants'
import MyAccount from '@/pages/MyAccount'
import Data from '@/data.json'

import {Container, Box} from '@mui/material';


const Main = 
({ 
  user, setUser, 
  handleAddPost, 
  handleAddUserPost, 
  posts, setPosts, 
  userPosts, setUserPosts, 
  search, handleSearch,
  image, handleSetImage 
}) => {
  const [actualPage, setActualPage] = React.useState('My Plants');

  const renderSwitch = () => {
    switch (actualPage) {
      case 'My Plants':
        return(
          <>
            <MyPlants user={user} handleAddPost={handleAddPost} userPosts={userPosts} />
            <Box sx={{ marginTop:'5%', height: '100vh', width: '100%' }}>
                <PostList 
                posts={posts} 
                userPosts={userPosts} 
                setUserPosts={setUserPosts} 
                handleAddUserPost={handleAddUserPost}  
                actualPage={actualPage}/>
            </Box>
          </>
        ) 
        break;
      case 'Add New':
        return (
          <>
            <CreateCard user={user} posts={posts} userPosts={userPosts} setUserPosts={setUserPosts} handleAddPost={handleAddPost} handleSearch={handleSearch}/>
            <Box sx={{ marginTop:'5%', height: '100vh', width: '100%' }}>
                <PostList 
                posts={posts} 
                userPosts={userPosts} 
                setUserPosts={setUserPosts} 
                handleAddUserPost={handleAddUserPost}  
                actualPage={actualPage}
                search={search}
                />
            </Box>
          </>
        )
        break;
      case 'My Account':
        return (
          <MyAccount user={user} image={image} handleSetImage={handleSetImage} />
        )
        break;
      default:
        break;
    }
  }



  const gatherData = () => {
    setPosts(Data.data);
  }
  /* Fetch data API */
  useEffect(() => {
    gatherData();

      const options = {
        method: 'GET',
       
        
    };
    
}, []);


  return (
    <>
      <Container 
        disableGutters={true}
        maxWidth='false' 
        sx={{ 
          height: '100vh', 
          width: '100vw', 
          overflow:'hidden', 
          padding:'0', 
          margin:'0'}}> 
        <Box maxWidth='false' sx={{ overflow:'hidden', padding:'0', margin:'0', width:'100%' }}>
          <Header user={user} setUser={setUser} actualPage={actualPage} setActualPage={setActualPage} image={image} sx={{ width:'100%', padding:'0'}} />
          {renderSwitch()}
        </Box>
      </Container>
    </>
  )
}

export default Main