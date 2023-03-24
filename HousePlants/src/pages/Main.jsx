import React from 'react'
import { useEffect } from 'react';


import CreateCard from '@/pages/CreateCard'
import Header from '@/components/Header'
import PostList from '@/components/PostList'
import MyPlants from '@/pages/MyPlants'
import Data from '@/data.json'

import {Container, Box} from '@mui/material';

const Main = ({ user, setUser, handleAddPost, handleAddUserPost, posts, setPosts, userPosts, setUserPosts, setSearch}) => {
  const [actualPage, setActualPage] = React.useState('My Plants');

  const renderSwitch = () => {
    switch (actualPage) {
      case 'My Plants':
        return(
          <>
            <MyPlants user={user} handleAddPost={handleAddPost} userPosts={userPosts} />
            <Box sx={{ marginTop:'5%', height: '100vh', width: '90vw' }}>
                <PostList posts={posts} userPosts={userPosts} setUserPosts={setUserPosts} handleAddUserPost={handleAddUserPost}  actualPage={actualPage} />
            </Box>
          </>
        ) 
        break;
      case 'Add New':
        return (
          <>
            <CreateCard user={user} posts={posts} userPosts={userPosts} setUserPosts={setUserPosts} handleAddPost={handleAddPost} setSearch={setSearch}/>
            <Box sx={{ marginTop:'5%', height: '100vh', width: '90vw' }}>
                <PostList posts={posts} userPosts={userPosts} setUserPosts={setUserPosts} handleAddUserPost={handleAddUserPost}  actualPage={actualPage} />
            </Box>
          </>
        )
        break;
      case 'Log Out':
        setUser(null);
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

}, []);


  return (
    <>
      <Container sx={{ height: '100vh', width: '100vw', overflow:'hidden', padding:'0'}}> 
        <Box sx={{ overflow:'hidden', padding:'0' }}>
          <Header user={user} setUser={setUser} actualPage={actualPage} setActualPage={setActualPage} sx={{ width:'100%', padding:'0'}} />
          {renderSwitch()}
        </Box>
      </Container>
    </>
  )
}

export default Main