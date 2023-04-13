import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Main from './pages/Main'
import Login from './pages/Login'
import { Container } from '@mui/material'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [userPosts, setUserPosts] = useState([])
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState(null)
  const [image, setImage] = useState("https://static.vecteezy.com/system/resources/thumbnails/008/482/601/small_2x/hand-drawn-flat-house-plants-in-the-potted-plants-illustration-isolated-on-white-background-free-vector.jpg")

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts])
  }
  const handleAddUserPost = (newPost) => {
    setUserPosts([newPost, ...userPosts])
  }
  const handleSearch = (Newsearch) => {
    setSearch(Newsearch)
  }
  const handleSetImage = (NewImage) => {
    setImage(NewImage)
  }

  useEffect(() => {
    document.title = user ? `${user}'s House Plants` : 'Please Login'
  }, [user])

  
  return user ? (
    <Container 
    
      maxWidth='false' 
      sx={{
        width:'100vw !important', 
        padding:'0', 
        margin:'0'}}
        disableGutters={true} >
      <Main
        user={user}
        setUser={setUser}
        handleAddPost={handleAddPost}
        handleAddUserPost={handleAddUserPost}
        posts={posts}
        setPosts={setPosts}
        userPosts={userPosts}
        setUserPosts={setUserPosts}
        search={search}
        handleSearch={handleSearch} 
        image={image}
        handleSetImage={handleSetImage}
      />
    </Container>
  ): 
  <Container sx={{width:'100vw', padding:'0', margin:'0'}}>
    <Login setUser={setUser} />
  </Container>
}

export default App