import _React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Grid, Stack,Button } from "@mui/material";
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

      <Box
        container
        spacing={2}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.81)",
              padding: 2,
              margin: 3,
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
              Honeymoon
            </Typography>
            <Stack
              component="div"
              sx={{
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                component="img"
                src="./dest2.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./dest3.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./dest3.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
    <Stack sx={{justifyContent:'center'}}>
      
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
                      mt:2,
                      fontSize:'1.5rem'
                    }}
                    variant="text"
                     size="large"
                  >
                    $200
                  </Button>
    </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
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
              FAMILY
            </Typography>
            <Stack
              component="div"
              sx={{
                flexDirection: "row",
                gap: "1rem",
                color: "goldenrod",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                component="img"
                src="./family1.png"
                alt="family"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./family2.png"
                alt="family"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./family3.png"
                alt="family"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>

            <Stack sx={{justifyContent:'center'}}>
      
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
                      mt:2,
                      fontSize:'1.5rem'
                    }}
                    variant="text"
                     size="large"
                  >
                    $200
                  </Button>
    </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
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
              Cultural Tours
            </Typography>
            <Stack
              component="div"
              sx={{
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                component="img"
                src="./culture1.jpg"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./culture2.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./culture3.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
           <Stack sx={{justifyContent:'center'}}>
      
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
                      mt:2,
                      fontSize:'1.5rem'
                    }}
                    variant="text"
                     size="large"
                  >
                    $200
                  </Button>
    </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
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
              Wildlife Safaris
            </Typography>
            <Stack
              component="div"
              sx={{
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                component="img"
                src="./wild1.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",

                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./wild2.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./wild3.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Stack sx={{justifyContent:'center'}}>
      
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
                      mt:2,
                      fontSize:'1.5rem'
                    }}
                    variant="text"
                     size="large"
                  >
                    $200
                  </Button>
    </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
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
              Eco Tours
            </Typography>
            <Stack
              component="div"
              sx={{
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                component="img"
                src="./eco1.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./eco2.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./eco3.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Stack sx={{justifyContent:'center'}}>
      
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
                      mt:2,
                      fontSize:'1.5rem'
                    }}
                    variant="text"
                     size="large"
                  >
                    $200
                  </Button>
    </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
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
              Luxury vacations
            </Typography>
            <Stack
              component="div"
              sx={{
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                component="img"
                src="./lux1.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./lux3.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./lux2.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Stack sx={{justifyContent:'center'}}>
      
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
                      mt:2,
                      fontSize:'1.5rem'
                    }}
                    variant="text"
                     size="large"
                  >
                    $200
                  </Button>
    </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
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
              Beach Holidays
            </Typography>
            <Stack
              component="div"
              sx={{
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                component="img"
                src="./lake1.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./lake2.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./lake3.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Stack sx={{justifyContent:'center'}}>
      
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
                      mt:2,
                      fontSize:'1.5rem'
                    }}
                    variant="text"
                     size="large"
                  >
                    $200
                  </Button>
    </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
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
              Wellness retreats
            </Typography>
            <Stack
              component="div"
              sx={{
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                component="img"
                src="./well1.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./well3.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./well2.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Stack sx={{justifyContent:'center'}}>
      
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
                      mt:2,
                      fontSize:'1.5rem'
                    }}
                    variant="text"
                     size="large"
                  >
                    $200
                  </Button>
    </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
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
              Culnary Tours
            </Typography>
            <Stack
              component="div"
              sx={{
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                component="img"
                src="./cul1.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./cul2.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./cul3.png"
                alt="Honeymoon"
                sx={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
           <Stack sx={{justifyContent:'center'}}>
      
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
                      mt:2,
                      fontSize:'1.5rem'
                    }}
                    variant="text"
                     size="large"
                  >
                    $200
                  </Button>
    </Stack>
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};

export default TripType;

// interface Destinations {
//   image:string,
// title:string
// priceperGroup:string,
// pricePerPerson:string
//  }

// const HoneyList: Destinations[] =[
//   {
//     image:'/dest1.png',
//     title:'Maldives',
//     priceperGroup: '$80',
//     pricePerPerson: '$40'
//   },
//   {
//     image:'/dest2.png',
//     title:'Tsavo Kenya',
//     priceperGroup: '$70',
//     pricePerPerson: '$50'
//   },

//   {
//      image:'/dest3.png',
//     title:'South Africa',
//     priceperGroup: '$100',
//     pricePerPerson: '50'
//   },

//   {
//      image:'/dest4.png',
//     title:'Progue',
//     priceperGroup: '$90',
//     pricePerPerson: '$30'
//   },
//  {
//  image:'/dest5.png',
//     title:'Coastal Kenya',
//     priceperGroup: '$79',
//     pricePerPerson: '$35'
// },
// {
//    image:'/dest6.png',
//     title:'Sydney',
//     priceperGroup: '$120',
//     pricePerPerson: '$45'
// },
// {
//    image:'/dest7.png',
//     title:'Porte Rico',
//     priceperGroup: '$100',
//     pricePerPerson: '$50'
// },

// {
//    image:'/dest8.png',
//     title:'Rome',
//     priceperGroup: '$124',
//     pricePerPerson: '$43'
// },
// {
//    image:'/dest9.png',
//     title:'Paris',
//     priceperGroup: '$120',
//     pricePerPerson: '$34'
// }

// ]
