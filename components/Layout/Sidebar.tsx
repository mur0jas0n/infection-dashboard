import React from "react";
import Link from "next/link"; //Link for SSR

//import @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//import @material-ui/icons
import InboxIcon from "@material-ui/icons/MoveToInbox";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

//page info
const data = [
  { href: "/", primary: "Home", icon: <InboxIcon /> },
  { href: "/Covid-19", primary: "Covid-19", icon: <InboxIcon /> },
  { href: "/Influenza", primary: "Influenza", icon: <InboxIcon /> },
  { href: "/Jason", primary: "Jason", icon: <InboxIcon /> },
  { href: "/Cyndi", primary: "Cyndi", icon: <InboxIcon /> },
];

export default function Sidebar() {
  const classes = useStyles();

  let pages = [];

  //page info
  for (let i in data) {
    pages.push(
      <Link href={data[i].href}>
        <ListItem button key={data[i].primary}>
          <ListItemIcon>{data[i].icon}</ListItemIcon>
          <ListItemText primary={data[i].primary} />
        </ListItem>
      </Link>
    );
  }

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>{pages}</List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
}
