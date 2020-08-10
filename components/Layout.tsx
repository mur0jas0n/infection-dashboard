import React from "react";
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";

//import @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
    </div>
  );
}
