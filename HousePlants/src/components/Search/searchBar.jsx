import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//Actions
import { fetchPlantsSuccess } from '@/data/redux/actions';

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

const SearchBar = ({ FetchPlant }) =>{
    const [content, setContent] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submit');
      console.log(content);
      if(content){
        setLoading(true);
        FetchPlant(content);
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

const mapStateToProps = (state) => {
  return {
      searchPlants: state.searchPlants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      FetchPlant: (plant) => dispatch(fetchPlantsSuccess(plant)),
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);