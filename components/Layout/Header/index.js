import React from 'react';
import { Container, AppBar, Toolbar, Button } from '@material-ui/core';
import Logo from "/public/assets/icons/hayotchinni.png";
import classes from './styles.js';



export default function Header() {
  console.log(classes)
  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Container>
          <Toolbar className={classes.root}>
            <div className={classes.title}>
              <img width="150px" src={Logo.src} alt="Hayot chinni" />
            </div>
            {/* <Typography variant="h6" className={classes.title}>
              News
            </Typography> */}
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
