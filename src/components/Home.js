import React from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';
// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore
  } = useHomeFetch();
  console.log('home: ' + state);

  if (error) return <div>Algo ha ido mal...</div>;

  return (
    <>
      {state.results[0] && !searchTerm
        ? <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
        : null
      }
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm
        ? `Resultados de "${searchTerm}"`
        : 'Películas populares'}>
        {state.results.map(movie => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button
          text='Cargar más'
          callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
