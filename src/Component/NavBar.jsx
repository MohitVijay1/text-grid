import { AppBar, makeStyles } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
    header: {
        background: 'black'
        ,
        display:'flex'
    },
    tabs: {
        color: 'white',
        textDecoration: 'none',
        marginRight: 20,
        fontSize:20
        
    }
})
const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header} >
            <Toolbar>
                <NavLink className={classes.tabs} to ="/">Code for Mohit</NavLink>
                <NavLink className={classes.tabs} to ="/all">All User</NavLink>
                <NavLink className={classes.tabs} to ="/add">Add User</NavLink>
               
            </Toolbar>
        </AppBar>
        
    )
}
export default NavBar;
