import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ data, changeId }) => {
  return data.map(elem => (
    <li key={elem.id}>
      <Link
        key={elem.id}
        to={{
          pathname: `/goit-fe-course-react/movies/${elem.id}`,
          state: { id: elem.id }
        }}
      >
        {elem.original_title}
      </Link>
    </li>
  ));
};

export default HomePage;
