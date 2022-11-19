import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser, sendResetPwdEmail } from "../config/firebasemethod";
import { useDispatch } from "react-redux";
// import Home from "./home";
import { add } from "../config/redux/loginReducer";
import CircularProgress from '@mui/material/CircularProgress';
function Login() {
  const [model, setmodel] = useState({});
  const [error,seterror]=useState('');
  const [isLoading,setLoader]= useState(false);
  let dispatch = useDispatch()

  let Navigate = useNavigate();
  let login = () => {
    setLoader(true);
    // LoginUser(model)
    //   .then((success) => {
    //     console.log(success)
    //     if (success.category == "admin") {
    //       Navigate("/admin", {
    //         state: success,
    //       });
    //       dispatch(add(success))
    //       // dispatch((success))
    //     } else if (success.category == "user") {
    //       Navigate("/Home", {
    //         state: success,
    //       });
    //       dispatch(add(success))
    //       // dispatch((success))
    //     }
    //     setLoader(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     seterror(err)
    //     setLoader(false);
    //   });
  };
  let Signup = () => {
    Navigate("/signup");
  };
  return (
    <div className="maindiv">
      <div className="login-box">
        <h2>Login</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              onChange={(e) =>  setmodel("email", e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              required=""
              onChange={(e) =>  setmodel("password", e.target.value)}
            />
            <label>Password</label>
          </div>
          <a onClick={login} style={{cursor:"pointer"}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {isLoading?<CircularProgress />:"Submit"}
          </a>
        </form>
        <Grid item md={12}>
            <Typography
          
              variant="span"
              sx={{  cursor: "pointer", }}
              onClick={(e)=>{
                model.email ? sendResetPwdEmail(model.email) : alert('No Email Provided')
              }}
            >
              <Link underline="hover">
             Forget Password
              </Link>
            </Typography>
            </Grid>
        <Box align="center" mt={3}>
          <Typography variant="span" color="white">
            Dont Have an Account ?
          </Typography>
          <Typography
            variant="span"
            color="white"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={Signup}
          >
            SignUp
          </Typography>
        </Box>
      </div>
    </div>
  );
}
export default Login;
