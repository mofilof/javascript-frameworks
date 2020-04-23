import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";
import SearchGames from "./SearchGames";
import GameProps from "./GameProps";

function GameList() {

    const [results, setResults] = useState([]); 
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(function() {
        fetch(BASE_URL) 
            .then(function(response) {
                return response.json(); 
            })
            .then(function(json) {
                console.dir(json.results); 
                setResults(json.results);
                setFilteredResults(json.results);
            })
            .catch(function(error) {
                console.log(error);
            });
    }, []);

    function handleSearch(inputValue) {
        const lowerCaseInput = inputValue.toLowerCase();

        const filteredArray = results.filter(function(result) {
            const lowercaseName = result.name.toLowerCase();

            if (lowercaseName.startsWith(lowerCaseInput)) {
                return true;
            } else {
                return false;
            }
        });

        setFilteredResults(filteredArray);
    }

    function displayResults() {
        if (filteredResults.length === 0) {
            return <div>No results</div>;
        }
        return filteredResults.map(function(result) {
          const href = "/game/" + result.id;
            

    return (
      <>
      <div key={result.name} className="flip-card">      
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="gameCard">
              <div>
                <h1 className="gameText">{result.name}</h1>
                  <img src={result.background_image} alt={result.name} />
                  <p className="gameText"><b>Rating: </b>{result.rating}</p>
                  <p className="gameText"><b>Release date: </b>{result.released}</p>
                  
                </div>
              </div>
            </div>
              <div className="flip-card-back">
                
                <h1 className="gameText">{result.name}</h1>
                  <img src={result.background_image} alt={result.name} />
                  <p className="gameText"><b>Rated top </b>{result.rating_top}</p>
                  <a href={href}>Click this link for more information about {result.name}.</a>
                  
              </div>
            </div>
          </div> 
        </>
            );
        });
    }

    return (
        <div>
            <SearchGames doSearch={handleSearch} />
            {displayResults()}
        </div>
    );
}

export default GameList;

