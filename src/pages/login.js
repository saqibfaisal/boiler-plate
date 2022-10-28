import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../config/firebasemethod";
// import CircularProgress from '@mui/material/CircularProgress';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoading,setLoader]= useState(false)
  let Navigate = useNavigate();
  let login = (e) => {
    e.preventDefault();
    // setLoader(true)
    LoginUser({ email, password })
      .then((success) => {
        // setLoader(false)
        console.log(success);
        alert("Login Success");
        Navigate("/profile", {
          state: success,
        });
        // Navigate(`/profile${success}`)
      })
      .catch((err) => {
        // setLoader(false)
        console.log(err);
      });
  };
  let Signup = () => {
    Navigate("/signup");
  };
  return (
    <div class="login-box">
      <h2>Login</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div class="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input
            type="password"
            name=""
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <a onClick={login}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
          {/* {isLoading?<CircularProgress />:"Login"} */}
        </a>
      </form>
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
  );
}
export default Login;
