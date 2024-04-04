import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { SocketContext } from "../SocketContext";
import { useContext } from "react";
import { useState } from "react";

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const GridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

const ContainerWrapper = styled(Container)(({ theme }) => ({
  width: "600px",
  margin: "35px 0",
  padding: 0,
  [theme.breakpoints.down("xs")]: {
    width: "80%",
  },
}));

const Margin = styled("div")({
  marginTop: 20,
});

const PaperWrapper = styled(Paper)({
  padding: "10px 20px",
  border: "2px solid black",
});

const Options = ({ children }) => {
  const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <Root>
      <ContainerWrapper>
        <PaperWrapper elevation={10}>
          <form noValidate autoComplete="off">
            <GridContainer>
              <Grid item xs={12} md={6} style={{padding: 20}}>
                  <Typography gutterBottom variant="h6">
                    Account Info
                  </Typography>
                  <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                  <CopyToClipboard text={me}>
                    <Margin>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<Assignment fontSize="large" />}
                      >
                        Copy Your ID
                      </Button>
                    </Margin>
                  </CopyToClipboard>
              </Grid>

              <Grid item xs={12} md={6} style={{padding: 20}}>
                  <Typography gutterBottom variant="h6">
                    Make a call
                  </Typography>
                  <TextField
                    label="ID to call"
                    value={idToCall}
                    onChange={(e) => setIdToCall(e.target.value)}
                    fullWidth
                  />
                  {callAccepted && !callEnded ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<PhoneDisabled fontSize="large" />}
                      fullWidth
                      onClick={leaveCall}
                      style={{marginTop: 20}}
                    >
                      Hang Up
                    </Button>
                  ) : (
                    <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Phone fontSize="large" />}
                    fullWidth
                    onClick={() => callUser(idToCall)}
                    style={{marginTop: 20}}
                  >
                    Call
                  </Button>
                  )}
              </Grid>
            </GridContainer>
          </form>
        </PaperWrapper>
        Options
        {children}
      </ContainerWrapper>
    </Root>
  );
};

export default Options;
