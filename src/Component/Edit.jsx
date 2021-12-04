import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, getUserss } from "../Service/api";
import { editUser } from "../Service/api";
import { useParams } from "react-router-dom";

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
function Edit() {
  const [user, setUser] = useState(InitialValue);
  const { name, nickname, email, phone } = user;
    const { id } = useParams();
    const classes = useStyle();
    const navigate = useNavigate();
    useEffect(() => {
        loadUserDetails();
    }, []);
    const loadUserDetails = async() => {
        const res = await getUserss(id);
        setUser(res.data);
        console.log(user)
        console.log(id)
    }
    const edituserdetail = async () => {
        await editUser(id,user);
        navigate("../all");
      };
  const onValuechange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  

 
 
 

    
  return (
    <FormGroup className={classes.par}>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input value={user.nickname}
          onChange={(e) => onValuechange(e)}
          name="nickname"
          
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email-id</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="email" value={user.email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="phone" value={user.phone} />
      </FormControl>
      <Button
        variant="contained"
        onClick={() => edituserdetail()}
        className={classes.cha}
      >
        Edit User
      </Button>
    </FormGroup>
  );
}

export default Edit;
