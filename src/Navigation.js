import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "./Card";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MoreOutlinedIcon from "@material-ui/icons/MoreOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Navigation = () => {
  const classes = useStyles();

  return (
    <Card>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotificationsNoneIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BookmarkBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Bookmarks" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Lists" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MoreOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="More" />
          </ListItem>
        </List>
      </div>
    </Card>
  );
};
export default Navigation;
