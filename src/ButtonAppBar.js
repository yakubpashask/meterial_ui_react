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
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/Person';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import Trips from '@material-ui/icons/Favorite';
import GridList from '@material-ui/core/GridList'
import { GridListTile } from '../node_modules/@material-ui/core';
import image from "./banner.jpg";
import { menulistItems, communicationListItems } from './menu'

import Drawer from '@material-ui/core/Drawer';
// import RobotoLight from 'typeface-roboto/'
const styles = theme => ({
    list: {
        width: 250,
        paddingTop: 0,
    },
    list2: {
        paddingTop: 0,
    },
    appbar: {
        backgroundColor: '#464646'
    },
    bottomNavigation: {
        bottom: 0,
        width: '100%',
        // height:'fit-content',
        position: 'fixed',
        backgroundColor: 'white'
    },
    root: {
        flexGrow: 1,
        height: '100%',
        // position:'relative',
        backgroundColor: '#f8f8fa' //theme.palette.background.paper
    },
    flex: {
        flexGrow: 1,
        // fontSize:1  Custom Font Size
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    twoway: {
        right: '0px',
        alignItems: 'right',
        zIndex: '9999'
    },
    paper: {
        marginTop: 5,
    },
    paper2: {
        zIndex: 1,
        zDepth: 0
    },
    dateStyle: {
        flex: 0.1,
        fontSize: 30
    },
    button: {
        backgroundColor: 'red',
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2,
        flex: 0,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: "90%"
    },
    listItem: {
        hidden: 'true',
        outerHeight: 20,

    },
    fromToStyle: {
        fontSize: 18
    },
    gridList: {
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    gridListTile: {
        height: 'fit-content',
    },
    img: {
        justifyContent: 'space-around',
        height: 100
    }
});
const tileData = [
    {
        img: image,
    },
    {
        img: image,
    },
    {
        img: image,
    },
    {
        img: image,
    }
];

// function ButtonAppBar(props) {
class ButtonAppBar extends React.Component {
    state = {
        value: 0,
        left: false
    };
    toggleDrawer =(side,open) =>()=> {
        this.setState({
            [side] : open
        });
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const menuList = (
            <div className={classes.list}>
                <List className={classes.list2}>{menulistItems}</List>
                <Divider />
                <List>{communicationListItems} </List>
            </div>
        );
        return (
            <div className={classes.root}>
                { <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {menuList}
                    </div>
                </Drawer> }
                <AppBar className={classes.appbar} position="sticky">
                    <Toolbar>
                    {/* onClick={this.toggleDrawer('left',true)} */}
                        <IconButton onClick={this.toggleDrawer('left',true)} className={classes.menuButton} color="inherit" aria-label="Menu" >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Search
          </Typography>
                        {/* <Button color="inherit">Login</Button>
          <Button color="inherit">2</Button> */}
                    </Toolbar>
                </AppBar>

                {/* <Card>
    <CardContent> */}
                <Paper className={classes.paper} square>
                    <List disablePadding>
                        <ListItem>
                            <IconButton>
                                <WorkIcon />
                            </IconButton>
                            <ListItemText>
                                <Typography variant='caption' className={classes.fromToStyle}>Leaving From</Typography>
                            </ListItemText>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem className={classes.listItem}>
                            <IconButton>
                                <ImageIcon />
                            </IconButton>
                            <ListItemText>
                                <Typography variant='caption' className={classes.fromToStyle}>Going To</Typography>

                            </ListItemText>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem className={classes.listItem}>
                            <IconButton>
                                <DateIcon />
                            </IconButton>
                            <ListItemText className={classes.dateStyle}>
                                <Typography className={classes.dateStyle}>30</Typography>
                            </ListItemText>
                            <ListItemText alignContent="left" primary="ThursDay" secondary="Aug,2018" />
                        </ListItem>
                        {/* <Paper className={classes.paper2} elevation='0'>
            <IconButton className={classes.twoway}>
                    <ImageIcon/>
                </IconButton>
             </Paper> */}

                    </List>
                </Paper>

                <Button className={classes.button} variant="contained" color="primary">
                    Search
                </Button>


                <GridList className={classes.gridList} cols={1.8}>
                    {tileData.map(tile => (
                        <GridListTile className={classes.gridListTile} key={tile.img} >
                            {/* <Paper> */}
                            <img className={classes.img} src={tile.img} alt={tile.title} />
                            {/* </Paper> */}
                            )}
                 </GridListTile>
                    ))}
                </GridList>
                <Paper className={classes.paper}>
                    <BottomNavigation
                        value={value}
                        onChange={this.handleChange}
                        showLabels
                        className={classes.bottomNavigation}

                    >
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                        <BottomNavigationAction label="Account" icon={<AccountIcon />} />
                        <BottomNavigationAction label="Abhicash" icon={<AccountBalanceWallet />} />
                        <BottomNavigationAction label="Trips" icon={<Trips />} />
                    </BottomNavigation>
                </Paper>
            </div>
        );
    }
}
ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);