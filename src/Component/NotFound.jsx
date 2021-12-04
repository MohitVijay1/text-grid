import React from 'react'
import notfound from '../Images/notfound.jpg'
import { makeStyles } from '@material-ui/core'
const useStyle = makeStyles({
    header: {
        padding: 100,
        width:400
    }
})

function NotFound() {
    const classes = useStyle();
    return (
        <img className={classes.header} src={notfound} alt=""  />
    )
}

export default NotFound
