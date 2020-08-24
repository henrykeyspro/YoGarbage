import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import truck from './Assets/truck.jpg';
import dumping_site from './Assets/dumping_site.jpg'
import machine from './Assets/machine.jpg';
import machine2 from './Assets/machine2.jpg';
import machine3 from './Assets/machine3.jpg';
import machine4 from './Assets/machine4.jpg';
import machine5 from './Assets/machine5.jpg';
import recycling from './Assets/recycling.jpg'

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function Home3(props) {
  const { classes } = props;

  const images = [
    {
      url:'',
      title: 'Haullers',
      width: '30%',
      text:'Am the haulers '
    },
    {
      url:
        'https://as2.ftcdn.net/jpg/03/12/19/75/500_F_312197594_ra1agFw3clmxYa6v9JjHRsxeFHfcvOac.jpg',
      title: 'Recylecling',
      width: '40%',
      
    },
    {
      url:
        'http://coparm.net/wp-content/uploads/2015/04/vagli_new-9.jpg',
      title: 'Separators',
      width: '30%',
    },
    {
      url:
        'http://coparm.net/wp-content/uploads/2015/04/vagli_new-10.jpg',
      title: 'Recycling Plant',
      width: '30%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1574974671999-24b7dfbb0d53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Workers',
      width: '40%',
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE-c-o3SsCIvikqw0ePB1CLEZKAHy3sC7q0A&usqp=CAU',
      title: 'Trucks',
      width: '30%',
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuZrIU8DqMzjxnyjUxbbgOouAZWP-YUpc8fg&usqp=CAU',
      title: 'Dumping Sites',
      width: '30%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Recycle',
      width: '40%',
    },
    {
      url:
        '',
      title: 'clients',
      width: '30%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <div style={{marginTop: '-50%'}}>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
              marginBottom: '20px',
              borderRadius: '10px'
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
      </div>
    </Container>
  );
}

Home3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home3);
