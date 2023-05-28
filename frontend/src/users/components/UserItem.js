import { makeStyles } from "@material-ui/core";
import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  userItem: {
    margin: theme.typography.pxToRem(16),
    width: `calc(45%  - ${theme.typography.pxToRem(32)})`,
    minWidth: theme.typography.pxToRem(280),
    "& a": {
      display: "flex",
      alignItems: "center",
      width: `100%`,
      height: `100%`,
      padding: theme.typography.pxToRem(16),
      color: "white",
      background: "#292929",
    },
    "&:hover, &:active": {
      "& h2,& h3": {
        color: "#292929",
      },
      "& a": {
        background: "#ffd900",
      },
    },
  },
  userItemContent: {
    padding: 0,
  },
  userItemImage: {
    width: theme.typography.pxToRem(64),
    height: theme.typography.pxToRem(64),
    marginRight: theme.typography.pxToRem(16),
  },
  userItemInfo: {
    "& h2": {
      fontSize: theme.typography.pxToRem(24),
      margin: `0 0 ${theme.typography.pxToRem(8)} 0`,
      fontWeight: "normal",
      color: "#ffd900",
    },
    "& h3": {
      margin: 0,
    },
  },
}));
const UserItem = (props) => {
  const { user } = props;
  const classes = useStyle();
  return (
    <li className={classes.userItem}>
      <Card className={classes.userItemContent}>
        <Link to={`/${user.id}/places`}>
          <div className={classes.userItemImage}>
            <Avatar image={user.image} alt={user.name} />
          </div>
          <div className={classes.userItemInfo}>
            <h2>{user.name}</h2>
            <h3>
              {user.placeCount} {user.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default UserItem;
