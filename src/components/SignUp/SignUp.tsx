import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        Leora AI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  let agree = true;
  console.log('agree 1:', agree);
  // handleChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setChecked(event.target.checked);
    agree = event.target.checked;
    // console.log('Checkbox checked:', (event.target.checked));
    // console.log('Checkbox target:', (event.target));
    // console.log('Checkbox value:', (event.target.value));
  };
  console.log('agree 2:', agree);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get('email')
    let password = data.get('password')
    // let control = data.get(control)
    // console.log(control)
    console.log("email : ", email)
    console.log("password : ", password)
    // console.log("email length: ", Object.keys(email).length)
    // console.log("email length: ", email.length) 
    // console.log("password length: ", password.length)
    if (!email || !password || agree === false) {
      alert("Please input email and password, select I agree... ");
    } else {
        fetch('https://v1vl79hmb8.execute-api.ap-southeast-2.amazonaws.com/marktest/neoradbask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
            agree: agree
          }),
        }).then((response) => {
          return response.json()
        }).then((res) => {
          if (res.code === 2061) {
            navigate("/chatbot", { replace: true , state: res.uid});
          } else if (res.code === 2062) {
            alert(res.msg);
            navigate("/", { replace: true });
          } else {
            alert(res.msg);
          }
        })
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Account
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <FormControlLabel
                control={<Checkbox value="agree" color="primary" onChange={handleChange} defaultChecked />}
                label={
                       <div>
                          <span>I agree to the </span>
                          <a rel="noreferrer" href='https://leora.ai/terms-of-service/' target="_blank">terms of services</a>
                          <span> and </span>
                          <a rel="noreferrer" href='https://leora.ai/privacy-policy/' target="_blank">privacy policy</a>
                       </div>
                       }
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
