import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

function AboutGame() {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  const url = BASE_URL + name;

  useEffect(function() {
      console.log("something")
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
      <h1 className="gameText">{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      <p className="gameText">Website: {game.website}</p>   
      <p>{game.description}</p>     
    </div>
  );
}



/*
function AboutGame() {
    const [game, setGame] = useState([]);


    const { id } = useParams();
    const url = BASE_URL + id;

    useEffect(function() {
        console.log("something");
        fetch(url) 

          .then(function(response) {
            return response.json();
          })

          .then(function(json) {
            console.dir(json.game);
            setGame(json.game);
          })

          .catch(function(error) {
            console.log(error);
          });
        }, []);
 
function displayGame() {
  if (game.length === 0) {
    return <p>Ops, no data form that API today...</p>;
  }

  return (
    <div>
      <h1 className="gameText">{game.name}</h1>
      <p className="gameText">Website: {game.website}</p>        
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

export default AboutGame;