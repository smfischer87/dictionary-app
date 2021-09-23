import React from "react";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
           <em>{props.phonetic.text}</em>
           <br />
           <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
        </div>
    )
}