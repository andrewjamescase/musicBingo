import React, { useState } from "react";
import "../../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import MusicTableComponent from "../musicTableComponent/musicTableComponent";
import styles from "./musicTable.module.css";

function MusicTable() {
  const [displayBoolean, setDisplayBoolean] = useState(true);
  const [songArray, setSongArray] = useState([]);
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function handleClickEvent() {
    var songObject = {
      "G-eazy": "Me, Myself, and I",
      "Dua Lipa": "some dua lipa song",
      "Third song": "more songs",
      "fourth song": "fourth song",
      "fifth song": "fifth song",
      "sixth song": "sixth song",
      "8 song": "8 song",
      "9 song": "9 song",
      "10 song": "10 song",
      "11 song": "11 song",
      "12 song": "12 song",
      "13 song": "13 song",
      "14 song": "14 song",
      "15 song": "15 song",
      "16 song": "16 song",
      "17 song": "17 song",
      "18 song": "18 song",
      "19 song": "19 song",
      "20 song": "20 song",
      "21 song": "21 song",
      "22 song": "22 song",
      "23 song": "23 song",
      "24 song": "24 song",
      "25 song": "25 song",
      "26 song": "26 song",
      "27 song": "27 song"
    };
    var ArrayOfSongs = Object.values(songObject);
    var shuffledArray = shuffle(ArrayOfSongs);
    setDisplayBoolean(false);
    setSongArray(shuffledArray);
  }

  function IntroScreen(props) {
    return (
      <div>
        <h1 className={styles.header}>
          Welcome to Andrew's music bingo. Click the button below to generate
          your card
        </h1>

        {displayBoolean && (
          <Button onClick={handleClickEvent}>Generate a unique card</Button>
        )}
        {!displayBoolean && (
          <div>
            <MusicTableComponent shuffledArray={songArray} />
            <Button onClick={handleClickEvent}>
              Generate a new unique card
            </Button>
          </div>
        )}
      </div>
    );
  }
  return <IntroScreen props={displayBoolean} />;
}

export default MusicTable;
