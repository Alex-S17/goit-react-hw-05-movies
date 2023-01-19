export const KEY = '62f46feb65c2319fb0db62c2c080ca35';
export const PATH_TO_IMAGES = 'https://image.tmdb.org/t/p/w500/';

export async function requestTrandingMovies() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`);
    return response.json();    
  } catch (error) {
    console.log('ERROR:', error);    
  };
};

export async function requestMoviesByID(movieID) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${KEY}`);
    return response.json();    
  } catch (error) {
    console.log('ERROR:', error);    
  };
};

export async function requestCastByID(movieID) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${KEY}`);
    return response.json();    
  } catch (error) {
    console.log('ERROR:', error);    
  };
};

export async function requestMovieReview(movieID) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${KEY}`);
    return response.json();    
  } catch (error) {
    console.log('ERROR:', error);    
  };
};

export async function requestMovieByName(httpQuery) {
  // console.log(httpQuery);
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${httpQuery}&language=en-US&page=1&include_adult=false`);
    return response.json();    
  } catch (error) {
    console.log('ERROR:', error);    
  };
};

