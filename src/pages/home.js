import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate()
    let gotosignup =()=>{
        navigate('/signup')
    }
  return (
    <div className="home">
      <Box>
        <Typography pt={14} align="center" variant="h3" color="white">
          Welcome to the Saqib Resturant
        </Typography>
      </Box>
      <Box align="center" pt={10} >
        <Button color='success' variant="contained" sx={{background:"darkgrey", fontSize:18}} onClick={gotosignup}>Registration</Button>
      </Box>
    </div>
  );
}
export default Home;
