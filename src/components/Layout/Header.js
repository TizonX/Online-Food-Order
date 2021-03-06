import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton"
import mealsImage from "../../assets/meals.jpg";
function Header(props) {
  return (
    <>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="table-food" />
      </div>
    </>
  );
}

export default Header;
