import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  English: [
    { name: "Atomic Habits", singer: "James Clear | ⭐4.9/5" },
    { name: "The Psychology of Money", singer: "Morgan Housel | ⭐4.6/5" },
    { name: "The Alchemist", singer: "Paulo Coelho |  ⭐4.7/5" }
  ],
  Hindi: [
    { name: "Jeevan ke Adhbhut Rahasysa", singer: "Gaur Gopal Das | ⭐4.3/5" },
    { name: "Dharma", singer: "Amish | ⭐4.2/5" },
    { name: "Karmayog", singer: "Swami Vivekananda | ⭐4.3/5" }
  ],

  Marathi: [
    { name: "Yugandhar", singer: "Shivaji Savant | ⭐4.0/5" },
    { name: "Shriman Yogi", singer: "Ranjit Desai | ⭐ 4.1/5" },
    { name: "Shala", singer: "Milind Bokil | ⭐4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("English");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ paddingLeft: "9rem" }}>
        <span role="img" aria-label="musical-emoji">
          📕📔📚📖
        </span>{" "}
      </h1>
      <h2 style={{ paddingLeft: "2.7rem" }}>
        Do you wonder what I'm reading ?{" "}
        <span role="img" aria-label="loop-emoji"></span>
      </h2>
      <div style={{ marginBottom: "2rem", paddingLeft: "1.6rem" }}>
        I have listed my Top 3 book in each category. Check them out below-
      </div>

      <div style={{ paddingLeft: "3.8rem" }}>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            className="genre-btn"
          >
            {genre}
          </button>
        ))}
      </div>

      <hr align="left" width="50%" />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "45%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{music.name}</div>
              <div style={{ fontSize: "smaller" }}>{music.singer}</div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p style={{ paddingTop: "4.5rem" }}>Made by Sumit</p>
      </footer>
    </div>
  );
}
