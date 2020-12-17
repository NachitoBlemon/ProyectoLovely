import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
//Material UI
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Menu from '@material-ui/core/Menu';

import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  extendedButton: {
    '& > *': {
      marginRight: theme.spacing(5),
      
  }},
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

//MEDIA QUERY
const theme = useTheme(); 
const Mobile = useMediaQuery(theme.breakpoints.down('sm'));
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <div><img className={classes.title} src="https://i.postimg.cc/RhhhHZjP/logodebo.png" width="200" alt="Lovely" />
          </div>
          <Typography className={classes.title} variant="h1" color="secondary"> </Typography>
          
          
          <div>
          {Mobile ? ( 
                <>
              <IconButton edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu"
              onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link exact to='/'>
                <MenuItem onClick={handleClose} >Inicio</MenuItem>
                </Link>


                <Link to='/servicios'>
                <MenuItem onClick={handleClose} >Servicios</MenuItem>
                </Link>

                <Link to='/promociones'>
                <MenuItem onClick={handleClose} >Promociones</MenuItem>
                </Link>

              </Menu>
              </>)
              : (
                <div className={classes.extendedButton}>
                <Link exact to='/'>
                <Button variant="outlined" color="secondary">Inicio</Button>
                </Link>

                <Link to='servicios'>
                <Button variant="outlined" color="secondary">Servicios</Button>
                </Link>

                <Link to='promociones'>
                <Button variant="outlined" color="secondary">Promociones</Button>
                </Link>
              
                </div>
              )
              
              }
              
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
