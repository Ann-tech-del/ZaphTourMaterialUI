import _React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Stack,
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { IoIosSend } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url('/contact1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            justifySelf: "center",
            textTransform: "uppercase",
            fontFamily: '"Nosifer", sans-serif',
          }}
        >
          Contact us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontStyle: '"Fjalla One", sans-serif',
            fontSize: "1.5rem",
            color: "peachpuff",
            justifySelf: "center",
            alignItems: "center",
          }}
        >
          {" "}
          If you have any questions please feel free to get in touch with us via
          the phone ,text, email in the form below or even through our social
          media platforms{" "}
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: "#f0f0f0", py: 4 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          sx={{ px: 4 }}
        >
          <Paper
            elevation={8}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "100%", md: 400 },
              bgcolor: "aliceblue",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                color: "#1976d2",
                textTransform: "capitalize",
                fontSize: "1.5rem",
              }}
            >
              Get in touch
            </Typography>
            <TextField
              label="First Name"
              type="text"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Middle Name"
              type="text"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Enter Your Message Here..."
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              size="medium"
              endIcon={<IoIosSend />}
              sx={{ color: "white", mt: 1 }}
            >
              Send
            </Button>
          </Paper>

          <Paper
            elevation={3}
            sx={{ p: 4, bgcolor: "aliceblue", width: { xs: "100%", md: 400 } }}
          >
            <Stack spacing={4}>
              <Box
                sx={{
                  color: "blue",
                  fontSize: "1.2rem",
                  fontFamily: '"Fjalla One", sans-serif',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontFamily: '"Open Sans", sans-serif',
                    color: "#1976d2",
                    textTransform: "capitalize",
                    fontSize: "1.5rem",
                  }}
                >
                  Contact Information
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <FaPhone style={{ marginRight: 8, color: "gray" }} />
                  <Typography variant="body2">+254 700 123 456</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <MdEmail style={{ marginRight: 8, color: "gray" }} />
                  <Typography variant="body2">info@zaphtours.co.ke</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaLocationDot style={{ marginRight: 8, color: "gray" }} />
                  <Typography variant="body2">Nairobi Kenya</Typography>
                </Box>
              </Box>

              <Box
                sx={{ color: "blue", fontFamily: '"Fjalla One", sans-serif' }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontSize: "1.5rem", color: "#1976d2" }}
                >
                  Business Hours
                </Typography>
                <Typography variant="body2">
                  Monday - Friday: 9:00 am - 8:00 pm
                </Typography>
                <Typography variant="body2">
                  Saturday: 9:00 am - 6:00 pm
                </Typography>
                <Typography variant="body2">
                  Sunday: 9:00 am - 5:00 pm
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 1,
                    fontWeight: 500,
                    color: "#1976d2",
                    fontSize: "1.5rem",
                    fontFamily: '"Open Sans", sans-serif',
                  }}
                >
                  Follow Us:
                </Typography>
                <Stack direction="row" spacing={0.2} sx={{}}>
                  <IconButton href="#" sx={{ color: "#3b5998" }}>
                    <FaFacebook />
                  </IconButton>
                  <IconButton href="#" sx={{ color: "#E1306C" }}>
                    <FaInstagram />
                  </IconButton>
                  <IconButton href="#" sx={{ color: "#1DA1F2" }}>
                    <FaXTwitter />
                  </IconButton>
                  <IconButton href="#" sx={{ color: "#0077b5" }}>
                    <CiLinkedin />
                  </IconButton>
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Stack>
        <Stack
          sx={{
            paddingInline: 19,
            paddingBlock: 8,
            bgcolor: "background.paper",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontFamily: '"UoqMunThenKhung", serif' }}
          >
            Our Location
          </Typography>
          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.787251825411!2d36.82194661422657!3d-1.2920651359971706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2f9897b6f%3A0xb6a0df8a45ff3b3d!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1627024944396!5m2!1sen!2ske"
              width="100%"
              height="400"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Contact;
