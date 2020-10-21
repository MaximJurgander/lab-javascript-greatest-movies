// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => {
  return movies.map((x) => x.director);
};
console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const filteredAllDirectors = () => {
  let filteredDirectors = movies.map((x) => x.director);
  return [...new Set(filteredDirectors)];
};

console.log(filteredAllDirectors());

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
  return movies.filter(
    (x) => x.director === 'Steven Spielberg' && x.genre.includes('Drama')
  ).length;
};
console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimasls

const ratesAverage = (movies) => {
  if (!movies.length) {
    return 0;
  }
  return Number(
    (
      movies.reduce((sum, rating) => (sum += rating.rate), 0) / movies.length
    ).toFixed(2)
  );
};
console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
  const dramaRate = +(
    movies
      .filter((x) => x.genre[0] === 'Drama')
      .reduce((sumRating, rating) => sumRating + rating.rate, 0) / 67
  ).toFixed(2);
  return dramaRate;
};
console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
  return movies.sort((a, b) => {
    return a.year - b.year;
  });
};
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
  return movies
    .map((x) => x.title)
    .sort()
    .slice(0, 20);
};

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (movies) => {
  return movies.map((movie) => {
    const hours = parseInt(movie.duration) * 60;
    const minutes = parseInt(movie.duration.slice(-5));
    const toMinutes = hours + minutes;
    movie.duration = toMinutes;
    return movie;
  });
};
console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
