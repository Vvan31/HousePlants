import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Main from './pages/Main'
import Login from './pages/Login'
// import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [userPosts, setUserPosts] = useState([])
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState(null)


  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts])
  }
  const handleAddUserPost = (newPost) => {
    setUserPosts([newPost, ...userPosts])
  }
  const handleSearch = (Newsearch) => {
    setSearch(Newsearch)
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
      search={search}
      handleSearch={handleSearch} 
    />
  ): <Login setUser={setUser} />
}

export default App