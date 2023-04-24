import React from 'react'
import { useEffect } from 'react';

import './Main.css'

import Header from '@/components/Header/Header'
import PostList from '@/components/Post/PostList'

import CreateCard from '@/pages/Home/CreateCard'
import MyPlants from '@/pages/Home/MyPlants'
import MyAccount from '@/pages/Home/MyAccount'

import Data from '@/data/data.json'

import {Container, Box} from '@mui/material';

const Main = () => {

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
          <Header sx={{ width:'100%', padding:'0'}} />
          {/* {renderSwitch()} */}
        </Box>
      </Container>
    </>
  )
}

export default Main