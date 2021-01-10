import React from "react";
import classes from "./Home.module.css";

// CODE PEN BY https://codepen.io/JacobStone420/pen/dyEvl

export default function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.Iam}>
        <p>This is</p>
        <b>
          <div className={classes.innerIam}>
            a Homepage
            <br />
            where stuff appears
            <br />
            and goes away
            <br />
            just like this.
          </div>
        </b>
      </div>
    </div>
  );
}
