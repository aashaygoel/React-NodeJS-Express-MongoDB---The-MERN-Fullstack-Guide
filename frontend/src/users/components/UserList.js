import { makeStyles } from "@material-ui/core";
import UserItem from "./UserItem";
import React from "react";

const useStyle = makeStyles((theme) => ({
  userList: {
    listStyle: `none`,
    margin: `0 auto`,
    padding: 0,
    width: `90%`,
    maxWidth: theme.typography.pxToRem(800),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));
const UserList = (props) => {
  const classes = useStyle();
  const { users } = props;
  if (!users.length) {
    return (
      <div>
        <h2>No Users Found</h2>
      </div>
    );
  }
  return (
    <ul className={classes.userList}>
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </ul>
  );
};
export default UserList;
