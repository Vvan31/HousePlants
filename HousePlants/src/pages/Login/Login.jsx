import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Typography, TextField, Button, List, ListItem } from '@mui/material'

import './Login.css'
import shadow from '@/assets/shadow.png'

import About from '@/components/About/About.jsx'

//Data 
const Login = () => {
    const [username, setUsername] = useState('')
    const [hover, setHover] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/myplants')
    }

    const handleInput = () => {
        setHover(true)
    }

    const handleInputBlur = () => {
        setHover(false)
      };

    return (
        <>
            <img src={shadow} alt="logo" className='overlay'/>
            <Container disableGutters={true} maxWidth='sm' className='login_container'>
            <List>
                <form onSubmit={handleSubmit}>
                    <ListItem className='login_container'>
                        <Typography className='login_title'>
                        HOUSE PLANTS</Typography> 
                    </ListItem>
                    <ListItem className='login_container'>
                        <TextField 
                            autoComplete='off'
                            id="outlined-basic" 
                            label="Username" 
                            variant="outlined" 
                            className='textInput'
                            onChange={e => setUsername(e.target.value)}
                            onMouseEnter={handleInput}
                            onMouseLeave={handleInputBlur}
                            />
                    </ListItem>
                    <ListItem className='login_container'>
                        <Button 
                            type='submit' 
                            variant='contained'
                            /* className={classNames('login_btn', { 'hovered': hover })} */ 
                            className={/* hover? 'hovered' :  */'login_btn'} 
                        >Login -{'>'}</Button>
                    </ListItem>
                </form>
            </List>
          {/*   <div className="scroll-down">Scroll down
                <div class="arrow"></div>
            </div>
            <About ref={aboutRef} /> */}
        </Container>
        </>
        
    )
}

export default Login