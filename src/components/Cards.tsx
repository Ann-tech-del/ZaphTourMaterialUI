import _React from "react";


import {
  Card,
  Button,
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
  Stack,
  Box,
} from "@mui/material";

const Cards = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ p: 2, flexWrap: "wrap", justifyContent: "center" }}
    >
      <Box sx={{ alignItems: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Nosifer", sans-serif',
            mt: 2,
            mb: 2,
            color: "goldenrod",
            alignSelf: "center",
          }}
        >
          {" "}
          Featured Destinations
        </Typography>
      </Box>
      <Box
        gap={2}
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Card sx={{ width: "400px", bgcolor: "rgba(240, 248, 255, 0.26)" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200px"
              image="/mtkenya.png"
              alt="green iguana"
            />
            <CardContent sx={{ color: "goldenrod" }}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontFamily: '"Nosifer", sans-serif', fontSize: "1.5rem" }}
              >
                Mt Kenya
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontFamily: '"Open Sans", sans-serif',
                  letterSpacing: 1,
                  fontSize: "1.2rem",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda, rerum vero. A odio pariatur non nesciunt, inventore
                obcaecati
              </Typography>
              <Box sx={{ display: "flex", alignSelf: "center" }}>
                <Button
                  variant="text"
                  sx={{ color: "crimson", fontSize: "2rem", fontWeight: 500 }}
                >
                  $70
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ alignSelf: "center" }}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{ alignSelf: "center" }}
            >
              Book Now
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: "400px", bgcolor: "rgba(240, 248, 255, 0.26)" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200px"
              image="/mtRuwenzori.png"
              alt="green iguana"
            />
            <CardContent sx={{ color: "goldenrod" }}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontFamily: '"Nosifer", sans-serif', fontSize: "1.5rem" }}
              >
                Mt Ruwenzori
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontFamily: '"Open Sans", sans-serif',
                  letterSpacing: 1,
                  fontSize: "1.2rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet
                laudantium autem vitae nihil beatae minus. Expedita, cumque.
              </Typography>
              <Box sx={{ display: "flex", alignSelf: "center" }}>
                <Button
                  variant="text"
                  sx={{ color: "crimson", fontSize: "2rem", fontWeight: 500 }}
                >
                  $70
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ alignSelf: "center" }}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{ alignSelf: "center" }}
            >
              Book Now
            </Button>
          </CardActions>
        </Card>
        <Card
          variant="outlined"
          sx={{ width: "400px", bgcolor: "rgba(240, 248, 255, 0.26)" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200px"
              image="/lkNakuru.png"
              alt="green iguana"
            />
            <CardContent sx={{ color: "goldenrod" }}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontFamily: '"Nosifer", sans-serif', fontSize: "1.5rem" }}
              >
                Lake Nakuru
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontFamily: '"Open Sans", sans-serif',
                  letterSpacing: 1,
                  fontSize: "1.2rem",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                assumenda excepturi est voluptatibus maxime, tenetur impedit
                deserunt optio.
              </Typography>
              <Box sx={{ display: "flex", alignSelf: "center" }}>
                <Button
                  variant="text"
                  sx={{ color: "crimson", fontSize: "2rem", fontWeight: 500 }}
                >
                  $70
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ alignSelf: "center" }}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{ alignSelf: "center" }}
            >
              Book Now
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: "400px", bgcolor: "rgba(240, 248, 255, 0.26)" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200px"
              image="/nairob.png"
              alt="green iguana"
            />
            <CardContent sx={{ color: "goldenrod" }}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontFamily: '"Nosifer", sans-serif', fontSize: "1.5rem" }}
              >
                Nairobi National Park
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontFamily: '"Open Sans", sans-serif',
                  letterSpacing: 1,
                  fontSize: "1.2rem",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                assumenda excepturi est voluptatibus maxime, tenetur impedit
                deserunt optio.
              </Typography>
              <Box sx={{ display: "flex", alignSelf: "center" }}>
                <Button
                  variant="text"
                  sx={{ color: "crimson", fontSize: "2rem", fontWeight: 500 }}
                >
                  $70
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ alignSelf: "center" }}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{ alignSelf: "center" }}
            >
              Book Now
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: "400px", bgcolor: "rgba(240, 248, 255, 0.26)" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200px"
              image="/Tsavo.png"
              alt="green iguana"
            />
            <CardContent sx={{ color: "goldenrod" }}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontFamily: '"Nosifer", sans-serif', fontSize: "1.5rem" }}
              >
                Tsavo National Park
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontFamily: '"Open Sans", sans-serif',
                  letterSpacing: 1,
                  fontSize: "1.2rem",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                assumenda excepturi est voluptatibus maxime, tenetur impedit
                deserunt optio.
              </Typography>
              <Box sx={{ display: "flex", alignSelf: "center" }}>
                <Button
                  variant="text"
                  sx={{ color: "crimson", fontSize: "2rem", fontWeight: 500 }}
                >
                  $70
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ alignSelf: "center" }}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{ alignSelf: "center" }}
            >
              Book Now
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: "400px", bgcolor: "rgba(240, 248, 255, 0.26)" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200px"
              image="/caost.png"
              alt="green iguana"
            />
            <CardContent sx={{ color: "goldenrod" }}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontFamily: '"Nosifer", sans-serif', fontSize: "1.5rem" }}
              >
                Coastal Beach
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontFamily: '"Open Sans", sans-serif',
                  letterSpacing: 1,
                  fontSize: "1.2rem",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                assumenda excepturi est voluptatibus maxime, tenetur impedit
                deserunt optio.
              </Typography>
              <Box sx={{ display: "flex", alignSelf: "center" }}>
                <Button
                  variant="text"
                  sx={{ color: "crimson", fontSize: "2rem", fontWeight: 500 }}
                >
                  $70
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ alignSelf: "center" }}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{ alignSelf: "center" }}
            >
              Book Now
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Stack>
  );
};

export default Cards;
