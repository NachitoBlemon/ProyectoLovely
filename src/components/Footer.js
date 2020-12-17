import React from 'react';
import {Typography} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";


import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    container: {
        backgroundColor: '#26a69a',
        widht: '60',
        height: 200,
    },
    link: {
        display: 'flex',
      },
      icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
      },
      logos: {
          marginRight: 30,
      }
  }));

const Footer = () => {
    const classes = useStyles();

    const whatsapp = () => {
        window.open('https://wa.me//+541123929989?text=Quisiera+informacion.', '_blank');
      }
    const instagram =() => {
window.open('https://www.instagram.com/lovely.art82/', '_blank');
    }
    return (
        <div >
            <Grid
    container
    spacing={0}
    align="center"
    justify="flex-end"
    direction="column"
    style={{ backgroundColor: '#80cbc4' }}
  >

      <Grid
        container
        spacing={1}
        direction="row"
        justify="space-around"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
        
      >
        <Grid item borderRight={1} borderColor="primary.main">
            
      <img src="https://i.postimg.cc/RhhhHZjP/logodebo.png" alt="logo lovery" />
      
    </Grid>
    <Grid item >
        
      <Typography variant="h6" color="initial">Secciones:</Typography>
      <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to="/" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Inicio
      </Link>
      <Link
        color="inherit"
        to="/promociones"
        
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Promociones
      </Link>
      <Link color="inherit" to="/servicios" className={classes.link}>
      <GrainIcon className={classes.icon} />
        Servicios
      </Link>
    </Breadcrumbs>
    </Grid>
    <Grid item >
      <Typography variant="h6" color="initial"> Redes Sociales:</Typography>
      <Link onClick={instagram} className={classes.logos}>
        <InstagramIcon/>
      </Link>
      <Link onClick={whatsapp} className={classes.logos}>
        <WhatsAppIcon/>
      </Link>
    </Grid>
      </Grid>
    
  </Grid>

        </div>
    );
};

export default Footer;