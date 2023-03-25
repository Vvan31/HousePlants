import React from 'react'


import {
  ImageListItem, 
  ImageListItemBar,
  IconButton,
  Snackbar,
  Alert,
  Popover,
  Typography,
  List, 
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Post = ({post, userPosts, handleAddUserPost, setUserPosts, actualPage}) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const image = (post.default_image)?post.default_image.regular_url:"https://i.pinimg.com/736x/46/2f/ff/462fffe245847a514a2bf1b023a8bdc0.jpg";

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleAddPost = () => {
    handleAddUserPost(post);
    setOpen(true);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const popOpen = Boolean(anchorEl);
  const id = popOpen ? 'simple-popover' : undefined;

  const renderSwitch = () => {
    switch (actualPage) {
      case 'My Plants':
        return (
          <>
          <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-describedby={id}
              onClick={handleClick}
            >
              <InfoIcon />
            </IconButton>

            <Popover
              id={id}
              open={popOpen}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <List dense={true}>
                <ListItem>
                  <ListItemText
                    primary={post.sunlight}
                    secondary='Sunlight'
                  />
                </ListItem>,
                <ListItem>
                  <ListItemText
                    primary={post.watering}
                    secondary='Watering'
                  />
                </ListItem>,
                <ListItem>
                  <ListItemText
                    primary={post.other_name?post.other_name:"None"}
                    secondary='Other names'
                  />
                </ListItem>,
                <ListItem>
                  <ListItemText
                    primary={post.cycle}
                    secondary='Cycle'
                  />
                </ListItem>
            </List>
            {/*   <Typography sx={{ p: 2 }}>
                Sunlight: {post.sunlight}
                Watering: {post.watering}
                Other names: {post.other_name?post.other_name:"None"}
                Cycle: {post.cycle}
                </Typography> */}
            </Popover>
            </>
        )
        break;
      case 'Add New':
        return (
          <>
           <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${post.common_name}`}
            onClick={handleAddPost}
          >
            <AddCircleIcon />
          </IconButton>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Successfully added to your plants!
            </Alert>
        </Snackbar>
      </>
        )
        break;
      default:
        break;
    }
  }
  return (
      <>
      <ImageListItem key={post.id}>
          <img
            src={image}
            srcSet={image}
            alt= "post-cover"
            loading="lazy"
          />
          <ImageListItemBar
            title={post.common_name}
            subtitle={<span>{post.scientific_name}</span>}
            actionIcon={
              renderSwitch()
            }
          />
        </ImageListItem>
    </>
    )
  }    

export default Post