import React from 'react'
import CreateCard from '@/pages/CreateCard'
import Header from '@/components/Header'
import PostList from '@/components/PostList'
import MyPlants from '@/pages/MyPlants'


import {Container, Box} from '@mui/material';


const Main = ({ user, setUser, handleAddPost, posts, userPosts, setUserPosts}) => {
  const [actualPage, setActualPage] = React.useState('My Plants');

  const renderSwitch = () => {
    switch (actualPage) {
      case 'My Plants':
        console.log('My Plants');
        return <MyPlants user={user} handleAddPost={handleAddPost} />
        break;
      case 'Add New':
        console.log('Add New');
        return (
          <>
            <CreateCard user={user} posts={posts} handleAddPost={handleAddPost} />
            <Box sx={{ marginTop:'5%', height: '100vh', width: '90vw' }}>
                <PostList posts={posts} actualPage={actualPage} />
            </Box>
          </>
        )
        break;
      case 'Log Out':
        console.log('Log Out');
        setUser(null);
        break;
      default:
        break;
    }
  }

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