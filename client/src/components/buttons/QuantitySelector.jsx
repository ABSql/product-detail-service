import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  kroot: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const QuantityButton = ({quantities, quantitySelector, size}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index, quantity) => {
    quantitySelector(quantity);
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const skus = quantities.skus;
  if (skus !== undefined) {
    let qArray = Object.entries(skus);
    console.log('q array: ', qArray);
    let qSelectorArr = [];
    let inStock = null;
    for (let i = 0; i < qArray.length; i++) {
      if (qArray[i].includes(size)) {
        inStock = qArray[i][1];
        for (let j = 0; j < inStock + 1; j++) {
          qSelectorArr.push(j);
        }
      }
    }
    qSelectorArr.splice(16, qSelectorArr.length);
  
    return (
      <div className={classes.kroot}>
        {size ? true : false}
        <List component="nav" aria-label="Quantity selector">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            onClick={handleClickListItem}
          >
            <ListItemText primary="Quantity" secondary={qSelectorArr[selectedIndex]} />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {qSelectorArr.map((quantity, index) => (
            <MenuItem
              key={quantity}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index, quantity)}
            >
              {quantity}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  } else {
    return (<div>Loading...</div>);
  };  
};

export default QuantityButton;
