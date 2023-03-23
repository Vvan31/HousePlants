import React from 'react'


import {
  ImageListItem, 
  ImageListItemBar,
  IconButton
} from '@mui/material/';
import InfoIcon from '@mui/icons-material/Info';
const Post = ({ image, content, user}) => {
  console.log(image)
  return (
    <>
      {/* {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="post-cover"
          style={{ height: 100, width: 200, objectFit: "cover" }}
        />
      )}
      <p>{content}</p>
      <div>{user}</div> */}
      <ImageListItem key={image}>
          <img
            /* src={`${image}?w=248&fit=crop&auto=format`} */
            src={URL.createObjectURL(image)}
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt= "post-cover"
            loading="lazy"
          />
          <ImageListItemBar
            title={content}
            subtitle={<span>by: {user}</span>}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${content}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
    </>
  )
}

export default Post