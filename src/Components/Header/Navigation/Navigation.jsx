import NavigationItem from './NavigationItem/NavigationItem';
import classes from "./Navigation.module.css"
function Navigation() {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/articles">Articles</NavigationItem>
      <NavigationItem to="/article">Article</NavigationItem>
      <NavigationItem to="/contact">Contact</NavigationItem>
    </ul>
  );
}

export default Navigation;
