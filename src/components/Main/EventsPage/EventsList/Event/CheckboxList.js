import React from 'react';
import PropTypes, { number } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
// import pic1 from "../../../../../images/1.jpg";
// import pic2 from "../../../../../images/2.jpg";
// import pic3 from "../../../../../images/3.jpg";
// import pic4 from "../../../../../images/4.jpg";
import pic1 from "../../../../../images/andreea.PNG";
import pic2 from "../../../../../images/pasca.PNG";
import pic3 from "../../../../../images/octav.PNG";
import pic4 from "../../../../../images/andreas.PNG";
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});
const pics= [pic1,pic2,pic3,pic4];
const users=['Andreea','Razvan','Octav','Andreas']
class CheckboxListSecondary extends React.Component {
  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <List dense className={classes.root}>
        {[0, 1, 2, 3].map(value => (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={pics[0 + value]}
              />
            </ListItemAvatar>
            {/* <ListItemText primary={`User ${value + 1}`} /> */}
            <ListItemText primary={`${users[0 + value]}`} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(value)}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);