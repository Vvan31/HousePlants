import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Main from './pages/Main'
import Login from './pages/Login'
// import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [userPosts, setUserPosts] = useState([])
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')


  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts])
  }
  const handleAddUserPost = (newPost) => {
    setUserPosts([newPost, ...userPosts])
  }

  useEffect(() => {
    document.title = user ? `${user}'s House Plants` : 'Please Login'
  }, [user])

  
  return user ? (
     <Main
      user={user}
      setUser={setUser}
      handleAddPost={handleAddPost}
      handleAddUserPost={handleAddUserPost}
      posts={posts}
      setPosts={setPosts}
      userPosts={userPosts}
      setUserPosts={setUserPosts}
      setSearch={setSearch}
    />
  ): <Login setUser={setUser} />
}

export default App