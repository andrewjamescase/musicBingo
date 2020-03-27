import React from 'react';
import Table from "react-bootstrap/Table";
import styles from "./musicTableComponent.module.css"
import Button from "../Button/Button";


function MusicTableComponent(
    shuffledArray
) {
   
  return (
      <div className = {styles.stuff}>
    <div className = {styles.btnGroup}>
      <Button label = {shuffledArray.shuffledArray[0]}></Button>
      <Button label = {shuffledArray.shuffledArray[1]}></Button>
      <Button label = {shuffledArray.shuffledArray[2]}></Button>
      <Button label = {shuffledArray.shuffledArray[3]}></Button>
      <Button label = {shuffledArray.shuffledArray[4]}></Button>
    </div>
    <div className = {styles.btnGroup}>
      <Button label = {shuffledArray.shuffledArray[5]}></Button>
      <Button label = {shuffledArray.shuffledArray[6]}></Button>
      <Button label = {shuffledArray.shuffledArray[7]}></Button>
      <Button label = {shuffledArray.shuffledArray[8]}></Button>
      <Button label = {shuffledArray.shuffledArray[9]}></Button>
    </div>
    <div className = {styles.btnGroup}>
      <Button label = {shuffledArray.shuffledArray[10]}></Button>
      <Button label = {shuffledArray.shuffledArray[11]}></Button>
      <Button label = "Free Space"></Button>
      <Button label = {shuffledArray.shuffledArray[13]}></Button>
      <Button label = {shuffledArray.shuffledArray[14]}></Button>
    </div>
    <div className = {styles.btnGroup}>
      <Button label = {shuffledArray.shuffledArray[15]}></Button>
      <Button label = {shuffledArray.shuffledArray[16]}></Button>
      <Button label = {shuffledArray.shuffledArray[17]}></Button>
      <Button label = {shuffledArray.shuffledArray[18]}></Button>
      <Button label = {shuffledArray.shuffledArray[19]}></Button>
    </div>
    <div className = {styles.btnGroup}>
      <Button label = {shuffledArray.shuffledArray[20]}></Button>
      <Button label = {shuffledArray.shuffledArray[21]}></Button>
      <Button label = {shuffledArray.shuffledArray[22]}></Button>
      <Button label = {shuffledArray.shuffledArray[23]}></Button>
      <Button label = {shuffledArray.shuffledArray[24]}></Button>
    </div>
    </div>
  );
}

export default MusicTableComponent;
