import _React from "react";
import { Box, Typography, Link, Stack, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "grey",
        color: "white",
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-start" }}
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "goldenrod", mb: 1 }}
              flexDirection={"row"}
            >
              <Box display="flex" sx={{ alignItems: "center", mr: 2 }}>
                <img
                  src="/image.png"
                  alt="Zaph Tours Logo"
                  style={{ height: 40 }}
                />
              </Box>
              Zaph Tours
            </Typography>
            <Typography variant="body2">
              Best Safaris and Adventures across Kenya and beyond.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Quick Links
            </Typography>
            <Stack spacing={0.8}>
              <Link href="/" underline="hover" color="inherit">
                Home
              </Link>
              <Link href="/destination" underline="hover" color="inherit">
                Destinations
              </Link>
              <Link href="/TripType" underline="hover" color="inherit">
                Trip Types
              </Link>
              <Link href="/Contact" underline="hover" color="inherit">
                Contact
              </Link>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: info@zaphtours.co.ke</Typography>
            <Typography variant="body2">Phone: +254 700 123 456</Typography>
            <Typography variant="body2">Nairobi, Kenya</Typography>
          </Box>
        </Stack>

        <Box textAlign="center" mt={4}>
          <Typography variant="caption" color="gray">
            &copy; Zaph Tours. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
