import _React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Stack, Button } from "@mui/material";

type TripPackage = {
  title: string;
  images: string[];
  
};
const tripData :TripPackage [] = [
  {
    title: "Honeymoon",
    images: ["./dest1.png", "./dest2.png", "./dest3.png"],
  },
  {
    title: "Family",
    images: ["./family1.png", "./family2.png", "./family3.png"],
  },
  {
    title: "Cultural Tours",
    images: ["./culture1.jpg", "./culture2.png", "./culture3.png"],
  },
  {
    title: "Wildlife Safaris",
    images: ["./wild1.png", "./wild2.png", "./wild3.png"],
  },
  {
    title: "Eco Tours",
    images: ["./eco1.png", "./eco2.png", "./eco3.png"],
  },
  {
    title: "Luxury Vacations",
    images: ["./lux1.png", "./lux2.png", "./lux3.png"],
  },
  {
    title: "Beach Holidays",
    images: ["./lake1.png", "./lake2.png", "./lake3.png"],
  },
  {
    title: "Wellness Retreats",
    images: ["./well1.png", "./well2.png", "./well3.png"],
  },
  {
    title: "Culinary Tours",
    images: ["./cul1.png", "./cul2.png", "./cul3.png"],
  },
];

const TripType = () => {
  return (
    <Layout>
      <Typography
        variant="h4"
        sx={{
          paddingTop: 5,
          paddingBottom: 0,
          color: "goldenrod",
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: '"Nosifer", sans-serif',
        }}
      >
        TRIP TYPES
      </Typography>

      <Box sx={{ padding: 4 }}>
        {tripData.map((trip, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.81)",
              padding: 2,
              marginBottom: 4,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "goldenrod",
                fontWeight: "bold",
                textAlign: "center",
                paddingBottom: "7px",
                textTransform: "uppercase",
              }}
            >
              {trip.title}
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-evenly"
              flexWrap="wrap"
              sx={{ marginBottom: 2 }}
            >
              {trip.images.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  alt={trip.title}
                  sx={{
                    width: "400px",
                    height: "auto",
                    borderRadius: 2,
                  }}
                />
              ))}
            </Stack>

            <Stack justifyContent="center">
              <Typography
                variant="body1"
                sx={{
                  color: "blue",
                  fontSize: "1.2rem",
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
                vero eos accusamus illum numquam laudantium? Voluptas eligendi ex
                quibusdam corporis voluptatibus, exercitationem excepturi
                necessitatibus optio nam tempora voluptatem doloremque unde?
              </Typography>
              <Button
                sx={{
                  alignSelf: "center",
                  color: "white",
                  bgcolor: "rgb(213, 186, 132)",
                  borderRadius: "50px",
                  mt: 2,
                  fontSize: "1.5rem",
                }}
                variant="text"
                size="large"
              >
                $200
              </Button>
            </Stack>
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default TripType;
