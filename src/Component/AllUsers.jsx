import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { deluser, getUsers } from "../Service/api";

const useStyle = makeStyles({
  table: {
    width: "90%",
    fontSize: "100",
    margin: "50px 0 0 50px",
  },
  thead: {
    backgroundColor: "black",
  },
  trow: {
    color: "white",
    fontSize: "20px",
    textTransform: "capitalize",
    },
    tcrow: {
      fontSize:'15px'
  }
});
function AllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const delteusere= async (id) => {
    await deluser(id);
    getAllUsers();
  }
  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
    console.log(users);
  };
  
  const classes = useStyle();
  return (
    <Table className={classes.table}>
      <TableHead className={classes.thead}>
        <TableRow>
          <TableCell className={classes.trow}>id</TableCell>
          <TableCell className={classes.trow}>Name</TableCell>
          <TableCell className={classes.trow}>Username</TableCell>
          <TableCell className={classes.trow}>Email</TableCell>
          <TableCell className={classes.trow}>phone</TableCell>
          <TableCell className={classes.trow}>edit</TableCell>
          <TableCell className={classes.trow}>delete</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell className={classes.tcrow}>{user.id}</TableCell>
            <TableCell className={classes.tcrow}>{user.name}</TableCell>
            <TableCell className={classes.tcrow}>{user.nickname}</TableCell>
            <TableCell className={classes.tcrow}>{user.email}</TableCell>
            <TableCell className={classes.tcrow}>{user.phone}</TableCell>
            <TableCell className={classes.tcrow}><Button variant='contained' color='primary' component={Link} to={`/edit/${user.id}`} >Edit</Button></TableCell>
            <TableCell className={classes.tcrow}><Button variant='contained'  color='secondary' onClick={()=>delteusere(user.id)}>Delete</Button></TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AllUsers;
