import React from "react";
import Alert from "@mui/material/Alert";

export default function Alerts(props) {
  const { alertMessage, severity } = props;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "auto",
          margin: "20px 40px",
        }}
      >
        <Alert variant="filled" width="auto" severity={severity}>
          {alertMessage}
        </Alert>
      </div>
    </>
  );
}