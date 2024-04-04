import { Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SocketContext } from "../SocketContext";
import { useContext } from "react";

const StyledVideo = styled("video")(({ theme }) => ({
  width: "550px",
  border: "1px solid red", // Add this line to see the border

  [theme.breakpoints.down("xs")]: {
    width: "300px",
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",

  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

const StyledPaper = styled(Paper)({
  padding: "10px",
  border: "2px solid black",
  margin: "10px",
});

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <StyledGrid container>
      {stream && (
        <StyledPaper>
          <StyledGrid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <StyledVideo playsInline muted ref={myVideo} autoPlay />
          </StyledGrid>
        </StyledPaper>
      )}

      {callAccepted && callEnded && (
        <StyledPaper>
          <StyledGrid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <StyledVideo playsInline ref={userVideo} autoPlay />
          </StyledGrid>
        </StyledPaper>
      )}
    </StyledGrid>
  );
};

export default VideoPlayer;
