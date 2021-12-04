import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addUser } from "../Service/api";

const useStyle = makeStyles({
  par: {
    display: "flex",
    justifyContent: "spacearound",
    alignItems: "center",
    marginTop: "50px",
  },
  cha: {
    fontWeight: "bold",
  },
});
const InitialValue = {
  name: "",
  nickname: "",
  email: "",
  phone: "",
};
function AddUser() {
  const [user, setUser] = useState(InitialValue);
  const { name, nickname, email, phone } = user;

  const onValuechange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });

  };
    const classes = useStyle();
    const navigate = useNavigate();
  const adduserdetail = async () => {
      await addUser(user);
      navigate('../all');
    };
    
  return (
    <FormGroup className={classes.par}>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="nickname" />
      </FormControl>
      <FormControl>
        <InputLabel>Email-id</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="phone" />
      </FormControl>
      <Button variant='contained'  onClick={() => adduserdetail()} className={classes.cha}>
        AddUser
      </Button>
    </FormGroup>
  );
}

export default AddUser;
