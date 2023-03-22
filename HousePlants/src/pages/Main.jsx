import React from 'react'
import CreateCard from '@/pages/CreateCard'
import Header from '@/components/Header'
import PostList from '@/components/PostList'


import {Container, Box} from '@mui/material';


const Main = ({ user, setUser, handleAddPost, posts}) => {
  return (
    <>
      <Container sx={{ height: '100vh', width: '100vw', overflow:'hidden', padding:'0'}}> 
        <Box sx={{ overflow:'hidden', padding:'0' }}>
          <Header user={user} setUser={setUser} sx={{ width:'100%', padding:'0'}} />
          <CreateCard user={user} handleAddPost={handleAddPost} />
          <Box sx={{ marginTop:'5%', height: '100vh', width: '90vw' }}>
            <PostList posts={posts} />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Main