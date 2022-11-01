import {NavLink} from 'react-router-dom';
import classes from "./NavigationItem.module.css"

function NavigationItem(props) {
  return (

      <li className={classes.NavigationItem}>
        <NavLink to={props.to} activeStyle={{color: "black"}}>{props.children}</NavLink>

      </li>

  );
}

export default NavigationItem;
