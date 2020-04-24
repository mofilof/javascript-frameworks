import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

/*
 - API - kallet ditt er feil for URL'en er feilkonstruert
    - Ikke riktig datastruktur i state
      - Du prøver å sette games state til noe som ikke eksisterer, da games på json.games ikke finnes.
- I displayGames() sjekker du om et array er tomt, men verdien av det du prøver å sjekke er undefined

  Dataen du får fra API'et er et objekt, ikke et array, så du må;
    - Endre setState - funksjonen din til å lagret et objekt, ikke et array
      - displayGames()  må sjekke om objektet er satt eller ikke, ikke om arrayet er tomt.I tillegg må du sørge for at de propertiesene du prøver å lese ut faktisk eksisterer.
*/

/*

function AboutGame() {
  const [games, setGame] = useState([{}]);
  const id = useParams();
  const hat = BASE_URL + '/' + id;

  useEffect(function () {
    console.log("something");
    fetch(hat)

      .then(function (response) {
        return response.json();
      })

      .then(function (json) {
        console.dir(json.games);
        setGame(json.games);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, {});

  function displayGame() {
    if (games.length === 0) {
      return <p>Ops, no data form that API today...</p>;
    }

    return (
      <div>
        <h1 className="gameText">{games.name}</h1>
        <p className="gameText">Website: {games.website}</p>
      </div>
    )

  }

  return (
    <div>
      {displayGame()}
    </div>
  )
}
*/

function AboutGame() {
  const [games, setGame] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const url = BASE_URL + '/' + id;


  useEffect(function () {
    console.log("it loaded");
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log("more", json);
        setGame(json);
        setLoading(false);
      })
      .catch(error => console.log(error));
  });

  function displayGame() {
    if (loading) {
      return <p>Ops, loading slow today...</p>;
    }

    return (
      <div>
        <h1 className="gameText center-text">{games.name}</h1>
        <img src={games.background_image_additional} alt={games.name} />
        <p className="gameText">Website: {games.website}</p>
      </div>
    )

  }

  return (
    <div>
      {displayGame()}
    </div>
  )
}

export default AboutGame;