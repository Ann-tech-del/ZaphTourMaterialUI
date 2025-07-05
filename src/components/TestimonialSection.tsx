import React from "react";
import { Box, Typography, Avatar, Container, IconButton } from "@mui/material";
import { MdFormatQuote } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0c0c0c",
        color: "white",
        py: 10,
        backgroundImage: "url(/testi.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontWeight: 300,
            fontFamily: '"Nosifer", sans-serif',
            color: "goldenrod",
            alignSelf: "center",
          }}
        >
          Hear From Our Past Guests
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "550px" }, mb: 4 }}>
            <Box sx={{ mb: 2 }}>
              <MdFormatQuote style={{ fontSize: 32, opacity: 0.3 }} />
            </Box>
            <Typography variant="body1" sx={{ mb: 3, fontSize: "1.2rem" }}>
              MyZaphTours is a content-driven luxury touring company like no
              other I have experienced. We were interviewed before creating our
              itinerary to determine our interests and better understand
              ZaphTours’s culture.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src="/avatar1.png" alt="Zain Levin" sx={{ mr: 2 }} />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, fontSize: "1.2rem" }}
                >
                  Zain Levin
                </Typography>
                <Typography variant="body2" sx={{ color: "crimson" }}>
                  Montreal, Canada
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "520px" }, mb: 4 }}>
            <Box sx={{ mb: 2 }}>
              <MdFormatQuote style={{ fontSize: 32, opacity: 0.3 }} />
            </Box>
            <Typography variant="body1" sx={{ mb: 3, fontSize: "1.2rem" }}>
              We spent our honeymoon in ZaphTours and it was an amazing
              experience. The team on the ground were always willing to help.
              They know everything about traveling in ZaphTours.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src="/avatar2.png" alt="Cheyenne Siphon" sx={{ mr: 2 }} />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, fontSize: "1.2rem" }}
                >
                  Cheyenne Siphon
                </Typography>
                <Typography variant="body2" sx={{ color: "crimson" }}>
                  Sydney, Australia
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "520px" }, mb: 4 }}>
            <Box sx={{ mb: 2 }}>
              <MdFormatQuote style={{ fontSize: 32, opacity: 0.3 }} />
            </Box>
            <Typography variant="body1" sx={{ mb: 3, fontSize: "1.2rem" }}>
              Our much awaited visit to zaphtours was well organized by
              MyZaphTours. Special interests were accommodated, and our guide
              Kuenga did an outstanding job.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src="/avatar3.png" alt="Makenna Geidt" sx={{ mr: 2 }} />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, fontSize: "1.2rem" }}
                >
                  Makenna Geidt
                </Typography>
                <Typography variant="body2" sx={{ color: "crimson" }}>
                  Boston, United States
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "520px" }, mb: 4 }}>
            <Box sx={{ mb: 2 }}>
              <MdFormatQuote style={{ fontSize: 32, opacity: 0.3 }} />
            </Box>
            <Typography variant="body1" sx={{ mb: 3, fontSize: "1.2rem" }}>
              Well organized, and tailored to our timeline. Our ZaphTours trip
              was filled with history, culture, and wonderful guides who took
              care of everything.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src="/avatar4.png" alt="Carter Press" sx={{ mr: 2 }} />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, fontSize: "1.2rem" }}
                >
                  Carter Press
                </Typography>
                <Typography variant="body2" sx={{ color: "crimson" }}>
                  London, United Kingdom
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <IconButton sx={{ border: "1px solid #444", color: "#fff" }}>
            <FaLongArrowAltRight fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
