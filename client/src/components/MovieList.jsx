import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList (props) {
    return (
      <movies>
        {props.movies.map(movie => (
          <React.Fragment key={movie.id}>
            <Link to={`/movies/${movie.id}/moviepage`}>
              <div>
                <img src={movie.img} />
                <p>{movie.name}</p>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </movies>
    )
  }