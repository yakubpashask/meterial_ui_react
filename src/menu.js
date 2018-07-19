import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import CancelIcon from '@material-ui/icons/History'
import OfferIcon from '@material-ui/icons/LocalOffer'
import { ListItemAvatar } from '../node_modules/@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/InfoOutline';
import ContactUs from '@material-ui/icons/ContactPhone';
import Terms from '@material-ui/icons/InsertDriveFile';

const styles = theme =>({
    listItemTop:{
        backgroundColor: '#f8f8fa' 
    }
});
export const menulistItems=(
    <div> 
        <List style={{ paddingTop:0}}>
        <ListItem style={{backgroundColor: '#f8f8fa'}}>
                { <Avatar alt="avatar" src="https://avatars2.githubusercontent.com/u/2578885?s=40&v=4" />}
                <ListItemText primary="Welcome Yakub !!"/>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <CancelIcon />
                </ListItemIcon>
                <ListItemText primary="Cancel Booking"/>
            </ListItem>
        </List>
    </div>

);

export const communicationListItems = (
    <div>
      <ListItem button>
        <ListItemIcon>
          <OfferIcon />
        </ListItemIcon>
        <ListItemText primary="Offers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Terms />
        </ListItemIcon>
        <ListItemText primary="Terms & Conditions" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="FAQ's" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ContactUs />
        </ListItemIcon>
        <ListItemText primary="Contact Us" />
      </ListItem>
    </div>
);