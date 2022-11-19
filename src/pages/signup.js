import {
  Avatar,
  // Button,
  InputLabel,
  MenuItem,
  Select,
  // TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethod";
import CircularProgress from '@mui/material/CircularProgress';
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setLoader] = useState(false);
  console.log(avatar);
  const handleChange = (event) => {
    setAvatar(event.target.value);
  };
  let Navigate = useNavigate();
  let signup = () => {
    setLoader(true)
    signUpUser({ email, password, username, avatar })
      // console.log({email,password,username,avatar});
      .then((success) => {
        setLoader(false)
        alert(success);
        Navigate("/Login");
      })
      .catch((err) => {
        setLoader(false)
        console.log(err);
      });
  };
  let Login = () => {
    Navigate("/Login");
  };
  return (
    <div className="maindiv">
      <div className="login-box">
        <h2>SignUp</h2>
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
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>UserName</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          {/* <div className="user-box">
            <InputLabel id="demo-simple-select-label">Select Avatar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={avatar}
              label="Select Avatar"
              onChange={handleChange}
              fullWidth
              // pt={3}
              // sx={{pt:"5"}}
            >
              <MenuItem
                value={
                  "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                }
              >
                <Avatar
                  alt="Travis Howard"
                  src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                  sx={{ width: 40, height: 40 }}
                />
              </MenuItem>

              <MenuItem
                value={
                  "https://evedonusfilm.com/wp-content/uploads/2022/05/photo-1457449940276-e8deed18bfff.jpg"
                }
              >
                <Avatar
                  alt="Travis Howard"
                  src="https://evedonusfilm.com/wp-content/uploads/2022/05/photo-1457449940276-e8deed18bfff.jpg"
                  sx={{ width: 40, height: 40 }}
                />
              </MenuItem>

              <MenuItem value={"https://wallpapercave.com/uwp/uwp2258415.jpeg"}>
                <Avatar
                  alt="Travis Howard"
                  src="https://wallpapercave.com/uwp/uwp2258415.jpeg"
                  sx={{ width: 40, height: 40 }}
                />
              </MenuItem>

              <MenuItem
                value={
                  "https://i.pinimg.com/564x/47/b5/7f/47b57f1db1c0791455ad88db64b08987.jpg"
                }
              >
                <Avatar
                  alt="Travis Howard"
                  src="https://i.pinimg.com/564x/47/b5/7f/47b57f1db1c0791455ad88db64b08987.jpg"
                  sx={{ width: 40, height: 40 }}
                />
              </MenuItem>

              <MenuItem
                value={
                  "https://i.pinimg.com/564x/fa/87/aa/fa87aaefba228e0093b2f79dc550924f.jpg"
                }
              >
                <Avatar
                  alt="Travis Howard"
                  src="https://i.pinimg.com/564x/fa/87/aa/fa87aaefba228e0093b2f79dc550924f.jpg"
                  sx={{ width: 40, height: 40 }}
                />
              </MenuItem>
              <MenuItem
                value={
                  "https://i.pinimg.com/564x/42/02/11/4202114ab42bcaa01fd8ddadd8675ce4.jpg"
                }
              >
                <Avatar
                  alt="Travis Howard"
                  src="https://i.pinimg.com/564x/42/02/11/4202114ab42bcaa01fd8ddadd8675ce4.jpg"
                  sx={{ width: 40, height: 40 }}
                />
              </MenuItem>
              <MenuItem
                value={
                  "https://i.pinimg.com/564x/3c/b2/c3/3cb2c32e7dc71dc645b00f408a97224b.jpg"
                }
              >
                <Avatar
                  alt="Travis Howard"
                  src="https://i.pinimg.com/564x/3c/b2/c3/3cb2c32e7dc71dc645b00f408a97224b.jpg"
                  sx={{ width: 40, height: 40 }}
                />
              </MenuItem>
            </Select>
          </div> */}
          <a onClick={signup} style={{cursor:"pointer"}} disabled={isLoading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* SignUp */}
            {isLoading?<CircularProgress />:"SignUp"}
          </a>
        </form>
        <Box align="center" mt={3}>
          <Typography variant="span" color="white">
            Already Have an Account ?
          </Typography>
          <Typography
            variant="span"
            color="white"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={Login}
          >
            login
          </Typography>
        </Box>
      </div>
    </div>
  );
}
export default SignUp;
