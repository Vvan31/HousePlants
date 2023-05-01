import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {configKeys} from '@/config/index.js';

//Actions
import { fetchPlantsSuccess,fetchPlantsRequest } from '@/data/redux/actions';

import { 
    Box,
    Grid,
    TextField,
    IconButton,
    Button,
    Collapse,
    Alert,
    Backdrop,
    CircularProgress
    
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './searchBar.css'

const SearchBar = ({ searchPlant }) =>{
    const [content, setContent] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submit');
      console.log(content);
      if(content){
        setLoading(true);
        searchPlant(content);
        setContent('');
        setLoading(false);
      }else{
        console.log('error');
        setAlert(true);
      }
    };


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
                  label="Search a plant" 
                  variant="outlined" 
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  sx={{height: '50px !important', width: '100%' }}  />
            </Grid>
            <Grid item xs={3}>
              <Button 
                className='button'
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

const mapStateToProps = (state) => {
  console.log("SearchBar: " + JSON.stringify(state.searchReducer.searchPlants));
  return {
      searchPlants: state.searchReducer.searchPlants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addPlant: (plant) => dispatch(addPlant(plant)),
      searchPlant: (plant) => dispatch(fetchPlantsSuccess(plant)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);