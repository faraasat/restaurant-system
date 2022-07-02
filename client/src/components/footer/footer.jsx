import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} className="footer-grid">
            Except as permitted by the copyright law applicable to you, you may
            not reproduce or communicate any of the content on this website,
            including files downloadable from this website, without the
            permission of the copyright owner.
          </Grid>
          <Grid item xs={12} className="footer-grid">
            Copyright &copy; 2022. All Rights Reserved.
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
