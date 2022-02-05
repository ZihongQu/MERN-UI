import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import memories from '../../images/memories.png';
import * as constants from '../../constants/actionType';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {

        // checking if token has expired. if so, log user out
        const token = user?.token;
        if(token){
            const decoded = decode(token);

            // if the token time is smaller than current time in the unit of miliseconds, logout user.
            if(decoded.exp * 1000 < new Date().getTime()){
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location])

    const logout = () => {
        dispatch({type: constants.LOGOUT});
        navigate('/');
        setUser(null);
    }

    return (
        <AppBar className = {classes.appBar} position='static' color='primary'>
            <div className={classes.brandContainer}>
                <Typography component ={Link} to="/" className = {classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className ={classes.image} src={memories} height={60}></img>
            </div>
            <Toolbar className='classes.toolbar'>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant = 'h6'>{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color = 'secondary' onClick={logout}>Logout</Button>
                    </div>
                ): (
                    <Button component={Link} to='/auth' variant='contained' className={classes.login} color='default'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;