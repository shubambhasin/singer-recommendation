import React, { useState } from "react";

import "./styles.css";

var singersData = {
  english: [
    { name: "Justin Bieber", song: "Never Say Never" },
    { name: "Ariana Grande", song: "Positions" },
    { name: "Otillia", song: "Billionaire" },
    { name: "Maroon 5", song: "Animals" },
    { name: "DJ Snake", song: "Magenta Ridhim" }
  ],
  hindi: [
    { name: "Arijit Singh", song: "SOng name" },
    { name: "Mohit Chauhan", song: "Masakali" },
    { name: "Darshan Raval", song: "Ek Tarfa" },
    { name: "K.K", song: "Labon ko" },
    { name: "Vishal Mishra", song: "Aaj Bhi" }
  ],
  punjabi: [
    { name: "Bohemia", song: "Gunegar" },
    { name: "Honey Singh", song: "First Kiss" },
    { name: "Shivjot", song: "Panjebaan" },
    { name: "Siddu Moosewala", song: "Game" },
    { name: "Gurnaam Bhullar", song: "Diamond" }
  ]
};

var singersArray = Object.keys(singersData);

export default function App() {
  const [singer, setSinger] = useState("english");
  console.log(singer);

  const singerSet = (data) => {
    setSinger(data);
  };

  return (
    <div className="App">
      <br />
      <h2 className="text-center">Singers And Songs Recommendations</h2>
      <div>
        <ul className="no-bullet text-center">
          {singersArray.map((data, index) => {
            return (
              <button
                key={index}
                className="list-inline list-button padding1rem"
                onClick={() => singerSet(data)}
              >
                {data}
              </button>
            );
          })}
        </ul>
      </div>

      <div className="data-bg">
        <div className="data-show text-center no-bullet">
          <ul className="no-bullet padding1rem">
            {singersData[singer].map((data, index) => {
              return (
                <li className="li-ui" key={index}>
                  <div>
                    Singer: <strong> {data.name}</strong>
                  </div>
                  <div>
                    SongName: <strong>{data.song}</strong>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
