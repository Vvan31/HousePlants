import React, { useEffect } from 'react';

import { 
    Box, 
    Typography,
    Grid,
    TextField,
    IconButton,
    Button,
    
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import PostList from '@/components/PostList'


const CreateCard = ({user, posts, userPosts, setUserPosts, handleAddPost, setSearch}) =>{

    const [content, setContent] = React.useState('');
    const imageInputRef = React.useRef()
    const [image, setImage] = React.useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(content);
        setContent('');
    }
    return (
        <>
      <Typography variant="h3" component="h2" gutterBottom sx={
        {
          textAlign: 'center'
        }
      }>
        Create New Post
      </Typography>
      <form id="newPost" onSubmit={handleSubmit}>
        <Box sx={{ 
          flexGrow: 1,
          display: 'flex',
          alignContent: 'center',
          justifyContent:'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <TextField 
                  id="outlined-basic" 
                  label="Add Post Content" 
                  variant="outlined" 
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  sx={{height: '50px !important', width: '100%' }}  />
            </Grid>
            <Grid item xs={3}>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" onChange={(e) => setImage(e.target.files[0])} ref={imageInputRef} />
              <AddPhotoAlternateIcon />
            </IconButton>

             {/*  <input type="file" onChange={(e) => setImage(e.target.files[0])} ref={imageInputRef} /> */}
            </Grid>
            <Grid item xs={4}>
              {/* <button type="submit">Submit Post</button> */}
              <Button 
                type="submit" 
                variant="contained"
                /* component="label" */
                >
                Upload Image
              </Button> 
            </Grid>
          </Grid>
        </Box>
      </form>
        </>
        
    )
};

export default CreateCard;