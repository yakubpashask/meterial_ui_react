import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
// import { createGenerateClassName } from '../node_modules/@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
class HomeScreen extends PureComponent{
      render(){
        const styles ={
          
  
        }
        return(
          <div className="App">
            <AppBar position="static">
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={classes.flex}>
                  Test Title
                </Typography>
          
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
            <Button variant="contained" color="secondary"> sample </Button>
          </div>
        );
    }

  


}
export default HomeScreen;

