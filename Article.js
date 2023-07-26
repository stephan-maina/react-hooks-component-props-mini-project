import React from 'react';

const Article = ({ title, date, preview, minutesToRead }) => {
  // Calculate the number of emojis needed based on minutesToRead
  const coffeeCups = "☕️";
  const bentoBoxes = "🍱";

  let emojis = '';
  if (minutesToRead < 30) {
    const numCups = Math.ceil(minutesToRead / 5);
    emojis = coffeeCups.repeat(numCups);
  } else {
    const numBoxes = Math.ceil(minutesToRead / 10);
    emojis = bentoBoxes.repeat(numBoxes);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{emojis} {minutesToRead} min read</p>
    </article>
  );
};

export default Article;

