import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";


function AboutGame() {
  const [games, setGame] = useState([]);


  const { id } = useParams();
  const hat = BASE_URL + id;

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
  }, []);

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

/*
function AboutGame() {
  const [games, setGame] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const url = BASE_URL + id;


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

  if (loading) {
    return <p className="gameText">Loading game details...</p>;
  }


  return (
    <div>
      <h1 className="gameText">{games.name}</h1>
      <img src={games.background_image} alt={games.name} />
      <p className="gameText">Website: {games.website}</p>
      <p>{games.description}</p>
    </div>
  );
}
*/

export default AboutGame;