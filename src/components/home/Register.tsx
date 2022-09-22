import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import ProTip from '../../ProTip';
import SignUp from '../SignUp/SignUp';

const Register = () => {
    return (
        <Container maxWidth="sm">
            <div>
                <img className='loginBg-0' src={require("../../assets/welcome0.png")} alt="logo" />
                <img className='loginBg-1' src={require("../../assets/welcome1.png")} alt="bottomleft" />
                <img className='loginBg-2' src={require("../../assets/welcome2.png")} alt="topright" />
                <img className='loginBg-3' src={require("../../assets/welcome3.png")} alt="figure" />
            </div>
            <ul className='zzz'>
                <img className='loginBg-4' src={require("../../assets/welcome4.png")} alt="words" />
            </ul>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    <SignUp />
                </Typography>
            </Box>
        </Container>
    );
};

export default Register;
