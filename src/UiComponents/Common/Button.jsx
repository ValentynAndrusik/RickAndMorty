import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontWeight: 'bold',
      border: '2px solid black'
    },
  },
}));

const ButtonStyled = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button 
        variant='contained' 
        color={props.color ? props.color : ''}
      >
        {props.label ? props.label : ''}
      </Button>
    </div>
  );
}

export default ButtonStyled
