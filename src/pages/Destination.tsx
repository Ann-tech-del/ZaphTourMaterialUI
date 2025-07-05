import _React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Card,
  CardActionArea,
  Stack,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

interface Destinations {
  image: string;
  title: string;
  priceperGroup: string;
  pricePerPerson: string;
}

const destinationList: Destinations[] = [
  {
    image: "/dest1.png",
    title: "Maldives",
    priceperGroup: "$80",
    pricePerPerson: "$40",
  },
  {
    image: "/dest2.png",
    title: "Tsavo Kenya",
    priceperGroup: "$70",
    pricePerPerson: "$50",
  },

  {
    image: "/dest3.png",
    title: "South Africa",
    priceperGroup: "$100",
    pricePerPerson: "50",
  },
  {
    image: "/dest4.png",
    title: "Progue",
    priceperGroup: "$90",
    pricePerPerson: "$30",
  },
  {
    image: "/dest5.png",
    title: "Coastal Kenya",
    priceperGroup: "$79",
    pricePerPerson: "$35",
  },
  {
    image: "/dest6.png",
    title: "Sydney",
    priceperGroup: "$120",
    pricePerPerson: "$45",
  },
  {
    image: "/dest7.png",
    title: "Porte Rico",
    priceperGroup: "$100",
    pricePerPerson: "$50",
  },

  {
    image: "/dest8.png",
    title: "Rome",
    priceperGroup: "$124",
    pricePerPerson: "$43",
  },
  {
    image: "/dest9.png",
    title: "Paris",
    priceperGroup: "$120",
    pricePerPerson: "$34",
  },
];

const Destination = () => {
  return (
    <Box bgcolor={"gray"}>
      <Layout>
        <Stack
          sx={{
            alignItems: "center",
            mt: 2,
            bgcolor: "gray",
            borderBottom: "1px solid white",
            mb: 8,
          }}
        >
          <Stack sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                color: "goldenrod",
                fontFamily: '"Nosifer", sans-serif',
                fontWeight: 500,
                textTransform: "capitalize",
                alignSelf: "center",
              }}
            >
              Discover the world with us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                mt: 2,
                fontSize: "1.2rem",
                maxWidth: "70%",
                alignSelf: "center",
                fontFamily: 'Fjalla One", sans-serif',
              }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              asperiores, facilis quod alias repudiandae impedit quae non animi
              odio tenetur, vel, similique magni incidunt unde. At odit totam
              ut, error dolorem ex consequuntur soluta consectetur et expedita,
              fuga non cumque itaque impedit dolorum iusto distinctio minima
              provident nesciunt, quasi eveniet?
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ flexWrap: "wrap", mt: 2, justifyContent: "center", gap: 2 }}
          >
            {destinationList.map((destination, _index) => (
              <Card
                variant="outlined"
                sx={{ width: "400px", bgcolor: "aliceblue" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200px"
                    image={destination.image}
                    alt={destination.title}
                  />
                  <CardContent sx={{ alignItems: "center", color: "crimson" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "500", fontSize: "2rem" }}
                    >
                      {destination.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "goldenrod",
                        fontSize: "1rem",
                        fontWeight: 500,
                        fontFamily: '"Open Sans", sans-serif',
                      }}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ipsam eos corrupti ratione rem, consectetur nam, ab
                      deleniti eius quasi quaerat animi tempora vero nesciunt
                      at, veniam eligendi quae ducimus dolores exercitationem
                      recusandae amet praesentium. Eos explicabo autem accusamus
                      quos commodi corporis deserunt culpa aperiam! Enim eaque
                      accusantium quae magnam aut!
                    </Typography>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="h4"
                        sx={{ fontSize: "1.2rem", mt: 2 }}
                      >
                        Price Per Group {destination.priceperGroup}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ fontSize: "1.2rem", mt: 2 }}
                      >
                        Individual Price {destination.pricePerPerson}
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    sx={{
                      alignSelf: "center",
                      color: "white",
                      bgcolor: "rgb(213, 186, 132)",
                      borderRadius: "50px",
                    }}
                    variant="text"
                    href="#"
                  >
                    View More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Layout>
    </Box>
  );
};

export default Destination;
