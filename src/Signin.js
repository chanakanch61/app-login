import { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function Signin() {
  const classes = useStyles();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: inputs.username,
      password: inputs.password,
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNSIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjBUMDI6MDY6MzIuNjQ3WiIsInVwZGF0ZWRBdCI6IjIwMjItMDctMDFUMDU6MjA6MzYuOTgyWiIsImRlbGV0ZWRBdCI6bnVsbCwiZW1wbG95ZWVJZCI6IjAwMDAiLCJ1c2VybmFtZSI6IkRFVlVTRVIiLCJmaXJzdG5hbWUiOiIiLCJsYXN0TmFtZSI6IiIsIm5pY2tuYW1lIjoiIiwidGVhbSI6IkIiLCJyb2xlIjoiQURNSU4iLCJpc0FjdGl2ZSI6dHJ1ZX0sImlhdCI6MTY1ODIyMjU4MCwiZXhwIjoxNjU4MjY1NzgwfQ.qNejd5hdywzWdn1nZEatVOLOd5o0OKbFPJvIqy_Rlek",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://api.nitirat.co.th/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
      if(result.status === "ok") {
        swal("success", result.message, "success",{
          button: false,
          timer: 2000,
        })
      }else{
        swal("Failed", result.message, "error",{
        })

      }})
      .catch((error) => console.log("error", error));
    console.log(inputs);
  };
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} md={7} className={classes.image} />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="username"
              value = {inputs.username || ""}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value = {inputs.password || ""}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            </form>
        </div>
      </Grid>
    </Grid>
  );
}
export default Signin;
