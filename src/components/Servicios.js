import React from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

//cards
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

//pops ups
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    titulos: {
      margin: 20,
    },
    root: {
        maxWidth: 345,
        margin: 50
      },
      media: {
        height: 340,
        width: 345,
      },
      boton: {
        display: "flex",
        justifyContent: "center"
    },
  });
   //pops ups
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  


//pops ups
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

const Servicios = () => {
    const classes = useStyles();
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const [opens, setOpens] = React.useState(false);
  const handleClickOpenManicura = () => {
    setOpens(true);
  };
  
  const handleCloseManicura = () => {
    setOpens(false);
  };

  const handleDepilacionLaser = () => {
    window.open('https://wa.me//+541123929989?text=Quisiera+un+turno+para+depilacion+laser.', '_blank');
  }

  const handleDepilacionConCera = () => {
    window.open('https://wa.me//+541123929989?text=Consuta+sobre+depilacion+con+cera.', '_blank');
  }
  const handleManicura = () => {
    window.open('https://wa.me//+541123929989?text=Consulta+sobre+manicura.', '_blank');
  }

    return (
        <div>
                            <Typography variant="h3" color="initial" align="center" className={classes.titulos}> Nuestros servicios</Typography>
                <Grid container direction="row"  justify="center"  alignItems="center" spacing={1}>
                    <Grid item xs={12} md={4} xl={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://i.postimg.cc/mDtnH3p0/soprano-ice-valencia-1024x683.jpg"
                                title="Depilacion Laser"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" align="center">
                                    Depilacion Laser
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Tecnología SOPRANO ICE que garantiza la más confortable experiencia con excelentes resultados en pocas sesiones.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.boton}>
                                <Button size="small" color="primary" onClick={handleDepilacionLaser}>
                                Pedir Turno
                                </Button>
                                {/* <Button size="small" color="primary" >
                                Ver Precios
                                </Button> */}
                                <Button size="small" color="primary" onClick={handleClickOpen}>
                                Leer Mas
                                </Button>

                                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>

        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          ¿Porque elegir Depilacion laser?
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Typography align='center'><strong>EL LASER NO MANCHA LA PIEL</strong> <br/> </Typography> 
            Aclara la piel y hace que desaparezca la hiperpigmentacion producida por la cera.<br/><br/>
          </Typography>
          <Typography gutterBottom>
         <Typography align='center'> <strong>FOLICULITIS</strong> <br/></Typography> 
            Ayuda a combatir afecciones cutáneas <br/>
            La depilación láser es recomendada por dermatólogos para combatir la foliculitis. La foliculitis es cuando el vello se enquista y genera unos forúnculos que pueden infertarse. <br/>
            Eliminando el vello definitivamente con la depilacion láser, también se elimina la posibilidad de padecer foliculitis.<br/><br/>
          </Typography>
          <Typography gutterBottom>
          <Typography align='center'><strong>5 RAZONES POR LAS QUE UTILIZAR LA DEPILACIÓN LASER</strong> <br/><br/></Typography> 
          <strong>1. ES PRECISA</strong><br/>
            No te dejarás nada de pelo, a diferencia de cuando usas cera o maquinas de afeitar.<br/>

            <strong>2.ES PERMANENTE</strong> <br/>
            Un 95% del pelo desaparecerá en 6 MESES.<br/>

            <strong>3. AHORRA DINERO</strong> <br/>
            No gastaras más dinero en tratamientos de cera o maquinas de afeitar.<br/>

            <strong>4.POR TODO EL CUERPO</strong> <br/>
            La depilacion láser se puede realizar en todo el cuerpo, ingles, axilas, piernas, etc. <br/>

            <strong>5. ES FÁCIL</strong><br/>
            Los tratamientos son faciles y rápidos de llevar acabo.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Atras
          </Button>
        </DialogActions>
      </Dialog>
                            </CardActions>
                        </Card>
                    </Grid>





                    <Grid item xs={12} md={4} xl={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://i.postimg.cc/P5TF4nFb/descarga.jpg"
                                title="Depilacion convencional"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" align="center">
                                    Depilacion convencional
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Depilación con cera (sistema Español) y sistema Roll on.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.boton}>
                                <Button size="small" color="primary" onClick={handleDepilacionConCera}>
                                Consultar
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>



                    <Grid item xs={12} md={4} xl={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://i.postimg.cc/BbFwhS0p/manicura-one-step-3.jpg"
                                title="Manicura"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" align="center"> 
                                    Manicura
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Esmalte Semi-permanente
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.boton}>
                                <Button size="small" color="primary" onClick={handleManicura}>
                                Consultar
                                </Button>
                                <Button size="small" color="primary" onClick={handleClickOpenManicura}>
                                Leer Mas
                                </Button>
                                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={opens}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseManicura}>
        Ventajas de la manicura semipermanente
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
         La principal ventaja de la manicura semipermanente consiste en que es una solución práctica y eficaz para tener manos perfectas durante un tiempo bastante prolongado, por ejemplo hasta dos semanas seguidas.  <br/><br/>
        Otra de las ventajas de la manicura semipermanente es el brillo y la dureza que le aporta a las uñas. Por eso es ideal para las personas que tienen uñas quebradizas y débiles porque con este tipo de esmaltado no se doblan.<br/><br/>

            El esmaltado semipermanente permite tener las uñas en perfecto estado durante mucho tiempo, mucho más que los esmaltes convencionales. Además, en las uñas de los pies la duración suele ser mucho más superior ya que puede llegar a superar el mes sin inconvenientes.<br/><br/>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseManicura} color="primary">
            Atras
          </Button>
        </DialogActions>
      </Dialog>
                            </CardActions>
                        </Card>
                    </Grid>
                    

                </Grid>
            

        </div>
    );
};

export default Servicios;