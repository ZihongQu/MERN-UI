import React from 'react'
import { Typography, Button, Avatar, Paper, Grid, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles.js';

const Auth = () => {
    const state = null;
    const classes = useStyles();
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>Sign In</Typography>
            </Paper>
        </Container>
    )
}

export default Auth;
