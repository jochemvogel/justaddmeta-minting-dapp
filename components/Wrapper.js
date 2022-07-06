import React from "react";
import {About} from "./About";
import {Card} from "./Card";
import styles from "../styles/wrapper.module.css";
import  {HeroBanner} from "./HeroBanner";
import  {navBar} from "./navBar";
export const Wrapper = () => {
    return (
      <main className={styles.sectionMain}>
        <navBar />
        <HeroBanner/>
        <About />
        <Card />
        </main>
    );
}
