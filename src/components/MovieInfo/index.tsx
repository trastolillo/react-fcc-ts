import React, { useContext } from 'react';
import API from '../../API';
// Components
import Thumb from '../Thumb';
import Rate from '../Rate';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
// Types
import { MovieState } from '../../hooks/useMovieFetch';
// Context
import { Context } from '../../context';

type Props = {
  movie: MovieState;
  backdrop?: string;
};

const MovieInfo: React.FC<Props> = ({ movie }) => {
  const [user] = useContext(Context);
  const handleRating = async (value: string) => {
    const rate = await API.rateMovie(
      user.sessionId,
      movie.id.toString(),
      value
    );
    console.log(rate);
  };

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>SINOPSIS</h3>
          <p>{movie.overview}</p>
          <div className='rating-directors'>
            <div>
              <h3>RATING</h3>
              <div className='score'>{movie.vote_average}</div>
            </div>
            <div className='director'>
              <h3>DIRECTOR{movie.directors.length > 1 ? 'ES' : ''}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          {user && (
            <div>
              <p>Puntúa la peli</p>
              <Rate callback={handleRating}></Rate>
            </div>
          )}
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
