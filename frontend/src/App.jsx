import React from "react";
import { VideoPlayer, Notifications, Options } from "./components";

import { AppBar, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({theme}) => ({
  borderRadius: 15,
  margin: "30px 100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "600px",
  border: "2px solid black",

  [theme.breakpoints.down("xs")]: {
    width: "90%",
  },
}));

const StyledWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const App = () => {
  return (
    <StyledWrapper>
      <StyledAppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Call App
        </Typography>
      </StyledAppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </StyledWrapper>
  );
};

export default App;