import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

type Props = {
  children?: ReactNode;
  title?: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button color="inherit" href="/users">
            Users List
          </Button>
          <Button color="inherit" href="/api/users">
            Users API
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container className="cardContainer">
      <Typography component="h1" variant="h6" color="primary" noWrap>
        {title}
      </Typography>
      </Grid>
      <Grid container justify="center" className="cardContainer">
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          {children}
        </Typography>
      </Grid>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
