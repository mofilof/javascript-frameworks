import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

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