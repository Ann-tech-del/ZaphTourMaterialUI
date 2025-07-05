import _React from "react";
import {
  Stack,
  TextField,
  
  Box,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FaPaperPlane } from "react-icons/fa6";


const NewsLetterSection = () => {
  return (
    <Box
      sx={{ justifyContent: "center", mt: 2, borderBottom: "1px solid white" }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontFamily: '"Open Sans", sans-serif',
          justifySelf: "center",
          textTransform: "capitalize",
          fontWeight: 500,
        }}
      >
        {" "}
        Stay Updated with all of our news{" "}
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", mt: 4, mb: 2 }}
      >
        <TextField
          label="Enter Your Email"
          type="Email"
          variant="outlined"
          sx={{ borderRadius: 3, bgcolor: "white" }}
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            color: "white",
            fontFamily: '"Open Sans", sans-serif',
            bgcolor: "rgb(213, 186, 132)",
            borderRadius: "50px",
          }}
          endIcon={<FaPaperPlane style={{ color: "white" }} />}
        >
          {" "}
          Subscribe
        </Button>
      </Stack>
      <Stack sx={{ alignItems: "center", mb: 8 }}>
        <FormControlLabel
          label="I agree to terms  of use and privacy policy"
          sx={{
            color: "white",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "1.2rem",
            fontWeight: 400,
          }}
          control={<Checkbox style={{ color: "white" }} />}
        />
      </Stack>
    </Box>
  );
};

export default NewsLetterSection;
