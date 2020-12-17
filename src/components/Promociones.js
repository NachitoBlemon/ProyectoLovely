import React from 'react';
import {Grid, Button} from '@material-ui/core';
//CARDS
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 50,
        
    },
    media: {
        height: 340,
        width: 345,
        
    },
    boton: {
        display: "flex",
        justifyContent: "center",
    },
  });


const Promociones = () => {

    const classes = useStyles();

const handlepromo1 = () => {
     window.open('https://wa.me//+541123929989?text=Consulta+sobre+promocion+1', '_blank');
   }
   const handlepromo2 = () => {
    window.open('https://wa.me//+541123929989?text=Consulta+sobre+promocion+2', '_blank');
  }
  const handlepromo3= () => {
    window.open('https://wa.me//+541123929989?text=Consulta+sobre+promocion+3', '_blank');
  }
  const handlepromo4 = () => {
    window.open('https://wa.me//+541123929989?text=Consulta+sobre+promocion+4', '_blank');
  }
  const handlepromo5 = () => {
    window.open('https://wa.me//+541123929989?text=Consulta+sobre+promocion+5', '_blank');
  }



    return (
        <div>
           
            <Grid container spacing={1}> 
                <Grid item xs={12} md={4}  >
                                    <Card className={classes.root}>
                                         <CardActionArea>
                                            <CardMedia
                                            className={classes.media}
                                            image= "https://i.postimg.cc/kXp7shLT/Promocion1.jpg"
                                            title="Promocion #1"
                                            />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                                Promocion 1
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" align="center">
                                            Pierna entera + cavado completo + tira de cola
                                            </Typography>
                                            <Typography variant="h4" color="textSecondary" component="p" align="center">
                                            $1100
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                        <CardActions className={classes.boton}>
                                            <Button size="small" color="primary" onClick={handlepromo1}>
                                            Consultar
                                        </Button>
                            
                                </CardActions>
                        </Card>
                </Grid>



                <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                                         <CardActionArea>
                                            <CardMedia
                                            className={classes.media}
                                            image= 'https://i.postimg.cc/QM5RVd2D/Promocion2.jpg'
                                            title="Promocion #2"
                                            />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                                Promocion 2
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" align="center">
                                            Pierna entera + cavado completo + axila
                                            </Typography>
                                            <Typography variant="h4" color="textSecondary" component="p" align="center">
                                            $1300
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                        <CardActions className={classes.boton}>
                                            <Button size="small" color="primary" onClick={handlepromo2}>
                                            Consultar
                                        </Button>
                            
                                </CardActions>
                        </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                                         <CardActionArea>
                                            <CardMedia
                                            className={classes.media}
                                            image= 'https://i.postimg.cc/63pLgHLP/Promocion3.jpg'
                                            title="Promocion #3"
                                            />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                                Promocion 3
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" align="center">
                                            Pierna entera + axila
                                            </Typography>
                                            <Typography variant="h4" color="textSecondary" component="p" align="center">
                                            $1000
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                            <CardActions className={classes.boton}>
                                                <Button size="small" color="primary" onClick={handlepromo3}>
                                                Consultar
                                                </Button>
                                        </CardActions>
                        </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                                         <CardActionArea>
                                            <CardMedia
                                            className={classes.media}
                                            image= 'https://i.postimg.cc/C5ZCLz2H/Promocion4.jpg'
                                            title="Promocion #4"
                                            />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                                Promocion 4
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" align="center">
                                            Brazo + axila
                                            </Typography>
                                            <Typography variant="h4" color="textSecondary" component="p" align="center">
                                           $700
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                            <CardActions className={classes.boton}>
                                                <Button size="small" color="primary" onClick={handlepromo4}>
                                                Consultar
                                                </Button>
                                        </CardActions>
                        </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                                         <CardActionArea>
                                            <CardMedia
                                            className={classes.media}
                                            image= 'https://i.postimg.cc/xj7yp3ks/Promocion5.jpg'
                                            title="Promocion #5"
                                            />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                                Promocion 5
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" align="center">
                                            Cavado + tira de cola
                                            </Typography>
                                            <Typography variant="h4" color="textSecondary" component="p" align="center">
                                            $600
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                            <CardActions className={classes.boton}>
                                                <Button size="small" color="primary" onClick={handlepromo5}>
                                                Consultar
                                                </Button>
                                        </CardActions>
                        </Card>
                </Grid>









            </Grid>
        </div>
    );
};

export default Promociones;