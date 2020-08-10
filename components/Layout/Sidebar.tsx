import React from "react";
import Link from "next/link"; //Link for SSR

//import @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//import @material-ui/icons
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";


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

export default function Layout() {
  const classes = useStyles();

  const items: string[] = ["Inbox", "Starred", "Send email", "Drafts"];

  const pages = {
    home: { href: "/", primary: "Home", icon: <InboxIcon /> },
    covid: { href: "/Covid-19", primary: "Covid-19", icon: <InboxIcon /> },
    flu: { href: "/Influenza", primary: "Influenza", icon: <InboxIcon /> },
    jason: { href: "/Jason", primary: "Jason", icon: <InboxIcon /> },
    cyndi: { href: "/Cyndi", primary: "Cyndi", icon: <InboxIcon /> },
  };

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
          <List>
          <Link href={pages.home.href}>
            <ListItem button>
              <ListItemIcon>{pages.home.icon}</ListItemIcon>
              <ListItemText primary={pages.home.primary} />
            </ListItem>
            </Link>
            <Link href={pages.covid.href}>
            <ListItem button>
              <ListItemIcon>{pages.covid.icon}</ListItemIcon>
              <ListItemText primary={pages.covid.primary} />
            </ListItem>
            </Link>
            <Link href={pages.flu.href}>
            <ListItem button>
              <ListItemIcon>{pages.flu.icon}</ListItemIcon>
              <ListItemText primary={pages.flu.primary} />
            </ListItem>
          </Link>
          </List>
          <Divider />
          <Link href={pages.jason.href}>
            <ListItem button>
              <ListItemIcon>{pages.jason.icon}</ListItemIcon>
              <ListItemText primary={pages.jason.primary} />
            </ListItem>
          </Link>
          <Link href={pages.cyndi.href}>
            <ListItem button>
              <ListItemIcon>{pages.cyndi.icon}</ListItemIcon>
              <ListItemText primary={pages.cyndi.primary} />
            </ListItem>
          </Link>
          <Divider />
          <List>
            {items.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
}
