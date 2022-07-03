import React from "react";
import {About} from "./About";
import {Card} from "./Card";
// import styles from "../styles/wrapper.module.css";
import  {HeroBanner} from "./HeroBanner";
export const Wrapper = () => {
    return (
      <section class="sectionAbout">
      <div class="container">
        <HeroBanner/>
        <About />
        <Card />
        </div>
        </section>
    );
}
