import React from "react";
const defaultImgURL = "https://image.tmdb.org/t/p/w200/";

const Cast = ({ actors }) =>
  actors.length !== 0 && (
    <ul>
      {actors.cast &&
        actors.cast.map((elem, index) => {
          if (index < 5) {
            return (
              <li key={elem.id}>
                {" "}
                <img src={`${defaultImgURL}${elem.profile_path}`} alt="" />{" "}
                <p>{elem.name}</p>
              </li>
            );
          }
        })}
    </ul>
  );

export default Cast;
