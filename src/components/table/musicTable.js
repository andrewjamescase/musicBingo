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
      "Drake": "One Dance",
      "Rihanna, Drake": "Work",
      "Chainsmokers": "Closer",
      "sia": "Cheap Thrills",
      "Lil Yachty": "Broccoli",
      "Amine": "Caroline",
      "Chainsmokers": "Roses",
      "geazy": "Magic in the Hamptons",
      "Kendrick Lamar": "DNA",
      "Migos": "Bad and Boujee",
      "Post Malone": "Congratulations",
      "Future": "Mask Off",
      "DJ Khaled": "Wild Thoughts",
      "Khalid": "Location",
      "Rae Sremmurd": "Black Beatles",
      "KYLE": "iSpy",
      "Sheck Wes": "Mo Bamba",
      "Drake": "God's Plan",
      "Travis Scott": "goosebumps",
      "Justin Bieber": "Despacito",
      "Childish Gambino": "Redbone",
      "Bebe Rexha": "Meant To Be",
      "Camila Cabello": "Havana",
      "Post Malone": "rockstar",
      "Zedd": "the Middle",
      "Dua Lipa": "New Rules",
      "Khalid": "Love Lies",
      "Drake Bell": "Gucci Gang",
      "Lil Dicky": "Freaky Friday",
      "Asap Ferg": "Plain Jane",
      "The Weeknd": "Starboy",
      "T-Pain": "Dan Bilzerian",
      "Ski Mask": "Faucet Failure",
      "Kanye West": "Famous"
    };
    var ArrayOfSongs = Object.values(songObject);
    var shuffledArray = shuffle(ArrayOfSongs);
    setDisplayBoolean(false);
    setSongArray(shuffledArray);
  }

  function IntroScreen(props) {
    return (
      <div>
        {displayBoolean && (
          <div>
          <h1 className={styles.header}>
          Welcome to Andrew's music bingo. Click the button below to generate
          your card
        </h1>
          <Button onClick={handleClickEvent}>Generate a unique card</Button>
          </div>
        )}
        {!displayBoolean && (
          <div className={styles.musicTable}>
            <h1 className={styles.header}>Bingo Card</h1>
            <MusicTableComponent shuffledArray={songArray} />
          </div>
        )}
      </div>
    );
  }
  return <IntroScreen props={displayBoolean} />;
}

export default MusicTable;
