import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Navigation';
import DateIcon from '@material-ui/icons/DateRange';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper/Paper'
const styles = theme => ({
    appbar:{
        backgroundColor:'#464646'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
      },
      flex: {
        flexGrow: 1,
        // fontSize:1  Custom Font Size
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
      twoway:{
          right: '0px',
          alignItems: 'right',
          zIndex:'9999'
      },
      paper:{
        marginTop: 5,
      },
      paper2:{
        zIndex:1,
        zDepth:0
      },
      dateStyle:{
          flex:0.1,
          fontSize:30
      },    
      button:{
        backgroundColor:'red',
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2,
        flex:0,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width:"90%"
        
      },
      listItem:{
      },
      fromToStyle:{
        fontSize:18,
        color:'darkgray'
      }
  });
// const styles = theme =>({
  
// )};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className = {classes.appbar} position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant = "title" color="inherit" className={classes.flex}>
            Search
          </Typography>
          {/* <Button color="inherit">Login</Button>
          <Button color="inherit">2</Button> */}
        </Toolbar>
      </AppBar>

    {/* <Card>
    <CardContent> */}
    <Paper className={classes.paper} square="true" >
          <List>
              <ListItem >
                <IconButton>
                    <ImageIcon/>
                </IconButton>
                <ListItemText>
                <Typography className={classes.fromToStyle}>From</Typography>
                </ListItemText>
              </ListItem>
              <Divider inset component="li"/>
            <ListItem className={classes.listItem}>
                <IconButton>
                    <WorkIcon/>
                </IconButton>
                <ListItemText>
                <Typography className={classes.fromToStyle}>To</Typography>
                    
                </ListItemText>
            </ListItem>
            <Divider inset component="li"/>
            <ListItem className={classes.listItem}>
                <IconButton>
                    <DateIcon/>
                </IconButton>
                <ListItemText className = {classes.dateStyle}>
                <Typography className={classes.dateStyle}>30</Typography>
                </ListItemText>
                <ListItemText alignContent = "left" primary="ThursDay" secondary="Aug,2018"/>
            </ListItem>
            {/* <Paper className={classes.paper2} elevation='0'>
            <IconButton className={classes.twoway}>
                    <ImageIcon/>
                </IconButton>
             </Paper> */}

          </List>
          </Paper>

          <Button className = {classes.button} variant="contained" color = "primary">
          Search
          </Button>
          {/* </CardContent>
          </Card> */}


      {/* <List>
        <ListItem>
          <IconButton>
            <ImageIcon />
          </IconButton>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <li>
          <Divider inset />
        </li>
        <ListItem>
          <IconButton>
            <WorkIcon />
          </IconButton>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <Divider inset component="li" />
        <ListItem>
          <IconButton>
            <BeachAccessIcon />
          </IconButton>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List> */}
    </div>
  );
}
ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);