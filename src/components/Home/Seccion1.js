import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

//ICONS
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function Seccion1(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <CheckCircleOutlinedIcon/>
              <Typography variant="h5" className={classes.title}>
              INVERTÍ EN VOS
              </Typography>
              <Typography variant="h6">
                {'Aprovechá nuestras promociones y utilizá las sesiones cuando quieras.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <CreditCardOutlinedIcon/>
              <Typography variant="h5" className={classes.title}>
              MEDIOS DE PAGO
              </Typography>
              <Typography variant="h6">
                {'Efectivo,transferencia bancaria, débito y crédito de todos los bancos, Mercado Pago. '}
                
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <CallOutlinedIcon/>
              <Typography variant="h5" className={classes.title}>
              ESTAMOS PARA AYUDARTE
              </Typography>
              <Typography variant="h6">
                {'Podes comunicarte con nosotros a través de nuestro instagram o clickeando en cualquier boton de consulta de la web.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

Seccion1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Seccion1);