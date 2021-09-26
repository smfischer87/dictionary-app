import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }


    function search(event) {
        event.preventDefault();

        //documentation: https://dictionaryapi.dev/

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001bae5079192da42dd964dd1e1ef104c69";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }


    return (<div className="Dictionary">
        <section>
            <h1>What word do you want to look up?</h1>
        <form onSubmit={search}>
            <input type="search" placeholder="Type here..." onChange={handleKeywordChange} />
        </form>
        <div className="hint">
            suggested words: sunset, candle, flower...
        </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
    </div>)
}