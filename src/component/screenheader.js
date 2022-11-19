import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ScreenHeader(props) {
  const { text ,width} = props;
  return (
    <>
      <Box sx={{ px:4 ,py:2 ,display:"flex",justifyContent:"center",alignItems:'center',height:"100vh"}}>
        <Box sx={{ backgroundColor: "#222", color: "white", p: 1 ,borderRadius:'15px'}} width={width}>
          <Typography variant="h5" align="center" sx={{fontWeight:600}}>{text}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default ScreenHeader;