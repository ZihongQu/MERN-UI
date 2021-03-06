import {React,useState} from 'react'
import { Typography, Button, Avatar, Paper, Grid, Container, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles.js';
import Input from './Input';
import * as actionType from '../../constants/actionType'
import {signup, signin} from '../../actions/auth';

const Auth = () => {
    const classes = useStyles();
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({firstName:'',lastName:'',email:'',password:'',confirmPassword:'',});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            dispatch(signup(formData,navigate));
        }
        else{
            dispatch(signin(formData,navigate));
        }
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleShowPwd = () => setShowPassword((prev) => !prev);

    const switchMode = () => {
        setIsSignUp((prev) => !prev);
        setShowPassword(false);
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half></Input>
                                <Input name='lastName' label='Last Name' handleChange={handleChange} half></Input>
                            </>
                        )}
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'password' : 'text'} handleShowPwd={handleShowPwd}/>
                        {isSignUp && <Input name='confirmPassword' lable='Retype password' handleChange={handleChange} type='password'></Input>}
                    </Grid>
                    <Button type='submit' fullWidth variant = 'contained' color='primary' className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
