import { Card, CardContent, Grid } from "@mui/material";
import { Container } from "@mui/system";

import Restaurant from "../static/img/restaurant big.jpg";
import ISO1 from "../static/img/iso1.png";
import ISO2 from "../static/img/iso2.png";
import ISO3 from "../static/img/iso3.png";

const About = () => {
  return (
    <div
      className="about-us"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "calc(100vh - 104px - 120px)",
      }}
    >
      <h1
        style={{
          color: "rgb(68, 175, 252)",
          fontFamily: "Lemon, cursive",
          marginTop: 35,
          marginBottom: 5,
        }}
      >
        About Us
      </h1>
      <Container
        maxWidth="lg"
        style={{
          marginTop: 20,
          marginBottom: 40,
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item md={6}>
            <img height={500} width={550} src={Restaurant} alt="Restaurant" />
          </Grid>
          <Grid
            item
            md={6}
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
                  We feel proud to have these certifications:
                </p>
                <Grid container style={{ width: "80%", marginTop: "20px" }}>
                  <Grid className="home-show__grid-items" item xs={4}>
                    <img heigth={100} width={100} src={ISO1} alt="ISO 9001" />
                  </Grid>
                  <Grid className="home-show__grid-items" item xs={4}>
                    <img heigth={100} width={100} src={ISO2} alt="ISO Hazard" />
                  </Grid>
                  <Grid className="home-show__grid-items" item xs={4}>
                    <img heigth={100} width={100} src={ISO3} alt="ISO Halal" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
