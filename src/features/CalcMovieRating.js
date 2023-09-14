export const calcMovieRating = (number) => {
  const voteAvg = number;
  const percentageCount = voteAvg * 10;
  return percentageCount + "%";
};
