import _React from "react";

import Layout from "../components/Layout";
import Cards from "../components/Cards";
import TestimonialSection from "../components/TestimonialSection";
import NewsLetterSection from "../components/NewsLetterSection";

import {
  Box,
  Button,
 
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "grey" }}>
      <Layout>
        <Box
          sx={{
            backgroundImage: `url('/img2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            backgroundColor: "grey",
          }}
        >
          <Container sx={{ position: "relative", maxWidth: "md" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: 20,
                mb: 2,
                textTransform: "uppercase",
                fontWeight: 300,
                fontFamily: '"Fjalla One", sans-serif',
              }}
            >
              Explore the land of beauty and adventure
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                lineHeight: 1.2,
                mb: 2,
                fontFamily: ' "Nosifer", sans-serif',
                color: "goldenrod",
              }}
            >
              Discover Kenya’s
              <br />
              Premier Safari & Adventure
              <br />
              Experience
            </Typography>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "#fff",
                },
              }}
            >
              Explore the journey
            </Button>
          </Container>
        </Box>
        <Paper elevation={4}>
          <Box
            component="section"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              minHeight: "80vh",
              bgcolor: "#f5f5f5",
            }}
          >
            <Box
              sx={{
                flex: 1,
                p: { xs: 3, md: "6" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundImage: `url('/img4.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",
                height: "90vh",
                textAlign: "center",
                py: { xs: 8, md: 12 },
                px: 2,
              }}
            >
              <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight="bold"
                  color="white"
                  fontFamily={'"Fjalla One", sans-serif'}
                  fontSize={50}
                >
                  ABOUT US
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontStyle: "italic",
                    color: "goldenrod",
                    mb: 3,
                    fontFamily: '"Fjalla One", sans-serif',
                    fontSize: 40,
                  }}
                >
                  "LIFE IS SHORT AND THE WORLD IS WIDE..."
                </Typography>

                <Typography
                  variant="body1"
                  color="white"
                  sx={{
                    mb: 4,
                    fontSize: "1.1rem",
                    maxWidth: "70%",
                    alignSelf: "center",
                    fontFamily: 'Fjalla One", sans-serif',
                  }}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  in ullam, libero facere magnam id iure exercitationem cumque
                  amet, quod ad architecto autem corporis, ratione suscipit sint
                  commodi quaerat quia veniam fuga? Quos dolorum accusamus fuga
                  qui officia doloremque quas commodi deserunt at expedita unde
                  adipisci voluptatem sequi aliquid laudantium, reiciendis
                  labore eaque odio asperiores sapiente architecto tempore
                  quibusdam sunt. Saepe, fugit. Impedit aut repudiandae
                  aspernatur porro eveniet quis, ipsum sunt sint dolorem
                  provident fugiat. Totam, debitis. Velit, aspernatur quia!
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<FaArrowAltCircleRight />}
                  sx={{
                    fontWeight: "bold",
                    color: "goldrod",
                    textTransform: "uppercase",
                    fontFamily: ' "VT323", monospace',
                    fontSize: "1.4rem",
                    width: "fit-content",
                    "&:hover": {
                      color: "#b17932",
                    },
                  }}
                >
                  Read More
                </Button>
              </Container>
            </Box>
          </Box>
        </Paper>
        <Box component={"section"}>
          <Cards></Cards>
        </Box>
        <Box>
          <TestimonialSection></TestimonialSection>
        </Box>
        <NewsLetterSection></NewsLetterSection>
      </Layout>
    </Box>
  );
};

export default Home;
