import React from "react";
import styles from "../styles/navBar.module.css";
import JustaddmetaLogo from "./JustaddmetaLogo";

export const navBar = () => {
    return (
     
        <navBar className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </navBar>
  
  
  
    );
  };