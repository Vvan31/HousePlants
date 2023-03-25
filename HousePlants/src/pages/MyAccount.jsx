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
    /* const imageUrls = [
        '@/assets/plant1.png',
        '@/assets/plant2.jpg',
        '@/assets/plant3.jpg',
        '@/assets/plant4.png',
        '././assets/plant5.png',
    ] */
    const imageUrls = [
        'https://thumbs.dreamstime.com/b/green-plant-pot-vector-isolated-gardening-hobby-beautiful-flowerpot-indoor-plant-green-plant-pot-vector-isolated-159137022.jpg',
        'https://cdn.pixabay.com/photo/2022/08/27/00/11/plant-7413415__340.png',
        'https://publicdomainvectors.org/tn_img/office-plant-publicdomain.webp',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMqryZ98exGDaZqFJf5OUVSlNwj5Kjx6H0uTffFZk8ARXuUSDSpBoJpb6rb2e2lEID-8A&usqp=CAU',
        'https://static.vecteezy.com/system/resources/thumbnails/008/482/601/small_2x/hand-drawn-flat-house-plants-in-the-potted-plants-illustration-isolated-on-white-background-free-vector.jpg'
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
                    <Fab aria-label="add" onClick={()=> handleSetImage(imageUrls[4])}>
                        <Avatar alt="ARemy Sharp" src={imageUrls[4]} />
                    </Fab>
               

                    </ListItem> 
                </form>
            </List>

        </Container>
    );
    }
export default MyAccount;