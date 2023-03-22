
import React from 'react'

import { Container, Typography, TextField, Button, Box, List, ListItem } from '@mui/material'

import { COLORS, FONTS } from '../constants'

const Login = ({ setUser }) => {
    const [username, setUsername] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(username)
    }

    const listTemplate = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
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
                        >Login</Typography> 
                    </ListItem>
                    <ListItem sx={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}>
                        <TextField 
                            id="outlined-basic" 
                            label="Username" 
                            variant="outlined" 
                            onChange={e => setUsername(e.target.value)} />
                    </ListItem>
                    <ListItem sx={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}>
                        <Button type='submit' variant='contained' sx={{
                            backgroundColor: COLORS.background_green,
                            width: '100%',
                            boxShadow: `4px 6px 6px 2px  rgba(0, 0, 0, 1)`,
                            fontFamily: FONTS.primary,
                            fontWeight: 'regular',
                        }}
                        
                        >Login</Button>
                    </ListItem>
                </form>
            </List>

        





               {/*  <Typography>Login</Typography>
                <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={e => setUsername(e.target.value)} />
                    {/* <Input
                        type="text"
                        placeholder='Input username'
                        onChange={e => setUsername(e.target.value)}
                    /> }
                    <Button type='submit'>Login</Button>
                </form> */}
          
        </Container>
    )
}

export default Login