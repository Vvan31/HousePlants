import React, { useEffect } from 'react';

import { 
    Box, 
    Typography,
    Grid,
    TextField,
    IconButton,
    Button,
    Collapse,
    Alert,
    Backdrop,
    CircularProgress
    
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';

import {configKeys} from '@/config/index.js';

const CreateCard = ({user, posts, userPosts, setUserPosts, handleAddPost, handleSearch}) =>{

    const [content, setContent] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState(null);
    const [alert, setAlert] = React.useState(false);

    const fetchData = async () => {
      try {
        const APIresult = await fetch('https://perenual.com/api/species-list?key='+ configKeys.Key +'&q='+ content)
        APIresult.json().then(json => {
        setResult(json.data);
        handleSearch(json.data);
        })
        if (result.length === 0){
          setAlert(true);
          handleSearch(null);
          setResult(null);
        }
      } catch (error) {
        setAlert(true);
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!content){
        handleSearch(null);
      }else{
        setLoading(true);
        fetchData();
        setContent('');
        setLoading(false);
      }
    }

    return (
        <>
      <form id="newPost" onSubmit={handleSubmit}>
        <Box sx={{ 
          flexGrow: 1,
          display: 'flex',
          alignContent: 'center',
          justifyContent:'center' ,
          paddingTop: '10px'}}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField 
                  id="outlined-basic" 
                  label="Add Post Content" 
                  variant="outlined" 
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  sx={{height: '50px !important', width: '100%' }}  />
            </Grid>
            <Grid item xs={3}>
              <Button 
                type="submit" 
                variant="contained"
                sx={{marginTop:'3px',height:'100%', width:'100%'}}>
                Search
              </Button> 
            </Grid>
          </Grid>
        </Box>
      </form>
      <Collapse in={alert}>
      <Alert
        severity="error" 
        sx={{ width: '60%', margin: 'auto', marginTop: '50px' }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setAlert(false);
              setResult(null);
              handleSearch(null);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }>No plants found!
      </Alert>
      </Collapse>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
      <CircularProgress color="inherit" />
      </Backdrop>
      </>
    )
};

export default CreateCard;