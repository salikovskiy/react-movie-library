import React from "react";

const Reviews = ({ reviews }) =>
  reviews.length !== 0 && (
    <ul>
      <h4>Reviews</h4>
      {reviews.results.length === 0 ? (
        <li>We don`t have reviews for this movie</li>
      ) : (
        <>
          {reviews.results.map(elem => (
            <li key={elem.id}>
              <h4>{elem.author}</h4> <p>{elem.content}</p>
            </li>
          ))}
        </>
      )}
    </ul>
  );

export default Reviews;
