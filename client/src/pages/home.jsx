import { useState } from "react";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

import Model from "../static/img/model.png";
import ISO1 from "../static/img/iso1.png";
import ISO2 from "../static/img/iso2.png";
import ISO3 from "../static/img/iso3.png";
import CarouselSlider from "../components/carousel/carousel-slider";

import "./home.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: 356,
  p: 1,
};

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cards = [
    [
      "Quality",
      "We offer you high quality products with 100% confidence! Our Products are freshly cooked and all ingredients are organic",
      ThumbUpIcon,
    ],
    [
      "Healthy",
      "We offer you very healthy products with 100% confidence! Our Products are freshly cooked and all ingredients are organic",
      FitnessCenterIcon,
    ],
    [
      "Fresh",
      "We offer you fresh products with 100% confidence! Our Products are freshly cooked and all ingredients are organic",
      OutdoorGrillIcon,
    ],
  ];

  return (
    <div className="home">
      <CarouselSlider />
      <section className="home-cards">
        <div className="wave-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Container
          maxWidth="lg"
          style={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <Grid container spacing={2}>
            {cards.map((card, index) => {
              const Img = card[2];
              return (
                <Grid key={index} item xs={12} md={4}>
                  <Card className="cards-card" sx={{ minWidth: 275 }}>
                    <CardContent
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          marginTop: 5,
                        }}
                      >
                        <Img
                          style={{
                            color: "#44affc",
                            width: 65,
                            height: 65,
                          }}
                        />
                      </div>
                      <h3
                        style={{
                          fontFamily: "Lemon, cursive",
                          color: "#44affc",
                          marginTop: "15px",
                        }}
                      >
                        {card[0]}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Cabin, serif",
                          marginTop: "15px",
                          width: "85%",
                          textAlign: "justify",
                          color: "grey",
                        }}
                      >
                        {card[1]}
                      </p>
                      <Typography
                        variant="p"
                        component="a"
                        href="/products"
                        className="cards-button"
                      >
                        Check Out Products <ArrowRightAltIcon />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <div className="wave-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="home-video">
        <div className="home-video__bg">
          <Container sx="xs" className="home-video__container">
            <h2>Watch Below how we make our Goodies!</h2>
            <h4>
              We Gurantee Quarlity, Health and Freshness of our product and we
              are confident that you will love it!
            </h4>
            <PlayCircleFilledIcon
              className="home-video__icon"
              onClick={handleOpen}
            />
          </Container>
        </div>
      </section>
      <section className="home-show">
        <div className="home-show__svg-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Grid container className="home-show__grid home-show__grid-override">
          <Grid xl={6} lg={6} md={6} item className="home-show__grid-items">
            <Container maxWidth="sm">
              <Card className="home-show__card" sx={{ minWidth: 275 }}>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Lemon, cursive",
                      color: "rgb(255, 220, 42)",
                      marginTop: "15px",
                      textShadow: "0.5px 0.5px 2px rgba(1,1,1,0.7)",
                    }}
                  >
                    Quality? We Can Assure You of That!
                  </h3>
                  <hr className="hr-style" />
                  <p
                    style={{
                      fontFamily: "Cabin, serif",
                      marginTop: "15px",
                      width: "85%",
                      textAlign: "justify",
                      color: "grey",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vel dolor in urna placerat volutpat non ut augue.
                  </p>
                  <p
                    style={{
                      fontFamily: "Cabin, serif",
                      marginTop: "15px",
                      width: "85%",
                      textAlign: "justify",
                      color: "grey",
                    }}
                  >
                    Nulla lacinia sagittis velit, quis elementum dui rutrum eu.
                    Proin ac sapien rhoncus, facilisis nisi ut, suscipit velit.
                    Nullam porta maximus velit et suscipit.
                  </p>
                  <p
                    style={{
                      fontFamily: "Cabin, serif",
                      marginTop: "15px",
                      width: "85%",
                      textAlign: "justify",
                      color: "grey",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vel dolor in urna placerat volutpat non ut augue.
                  </p>
                  <hr className="hr-style" style={{ marginTop: 20 }} />
                  <p
                    style={{
                      fontFamily: "Cabin, serif",
                      marginTop: "15px",
                      width: "85%",
                      textAlign: "justify",
                      color: "grey",
                    }}
                  >
                    We proud to have these certifications:
                  </p>
                  <Grid container style={{ width: "80%", marginTop: "20px" }}>
                    <Grid className="home-show__grid-items" item xs={4}>
                      <img heigth={100} width={100} src={ISO1} alt="ISO 9001" />
                    </Grid>
                    <Grid className="home-show__grid-items" item xs={4}>
                      <img
                        heigth={100}
                        width={100}
                        src={ISO2}
                        alt="ISO Hazard"
                      />
                    </Grid>
                    <Grid className="home-show__grid-items" item xs={4}>
                      <img
                        heigth={100}
                        width={100}
                        src={ISO3}
                        alt="ISO Halal"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Grid>
          <Grid xl={6} lg={6} md={6} item className="home-show__grid-items">
            <img src={Model} alt="Man Eating Food" />
          </Grid>
        </Grid>
        <div className="home-show__svg-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <iframe
              width="500"
              height="356"
              src="https://www.youtube.com/embed/kEa6doygzIY"
              title="Hygienic production flow"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Home;
