import React from "react";

import { 
    Container, 
    List,
    ListItem,
    Avatar,
    Typography,
    Button,
    Box,
    TextField,
    IconButton,
    Input,
    InputLabel,
    FormControl,
    Fab
 } from "@mui/material";

 import {AddPhotoAlternateIcon} from "@mui/icons-material/AddPhotoAlternate";

import { COLORS, FONTS } from "../constants";

const MyAccount = ({user, image, handleSetImage}) => {
    const imageUrls = [
        '/src/assets/plant1.png',
        '/src/assets/plant2.jpg',
        '/src/assets/plant3.jpg',
        '/src/assets/plant4.png',
        '/src/assets/plant5.png',
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <Container fixed sx={{ 
            height: '100vh',
            width: '100vw',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
         }} 
        >
            <List>
                <form onSubmit={handleSubmit}>
                    {/* Avatar */}
                    <ListItem sx={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}>
                        <Avatar
                            alt="Remy Sharp"
                            src={image}
                            sx={{ width: 56, height: 56 }}
                            />
                    </ListItem>

                    {/*User name */}
                    <ListItem sx={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}>
                        <Typography sx={{
                            fontSize: '3rem',
                            color: COLORS.background_green,
                            fontFamily: FONTS.primary,
                            fontWeight: 'bold',
                            }}
                        >{user}</Typography> 
                    </ListItem>
                    {/* Choose new avatar */}
                    <ListItem sx={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}>
                    <Fab aria-label="add" onClick={()=> handleSetImage(imageUrls[0])}>
                        <Avatar alt="ARemy Sharp" src={imageUrls[0]} />
                    </Fab>
                    <Fab aria-label="add" onClick={()=> handleSetImage(imageUrls[1])}>
                        <Avatar alt="ARemy Sharp" src={imageUrls[1]} />
                    </Fab>
                    <Fab aria-label="add" onClick={()=> handleSetImage(imageUrls[2])}>
                        <Avatar alt="ARemy Sharp" src={imageUrls[2]} />
                    </Fab>
                    <Fab aria-label="add" onClick={()=> handleSetImage(imageUrls[3])}>
                        <Avatar alt="ARemy Sharp" src={imageUrls[3]} />
                    </Fab>
               

                    </ListItem> 
                </form>
            </List>

        </Container>
    );
    }
export default MyAccount;