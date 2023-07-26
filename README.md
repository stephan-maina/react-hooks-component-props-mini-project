# Stephan's React Blog

Welcome to my personal blog built with React! In this blog, I share my thoughts, experiences, and knowledge about React and web development. Feel free to explore the articles and I hope you find them helpful and insightful.

## Components

### App

The main component that renders the entire blog site. It passes down the blog data to its child components.

### Header

A header component that displays the name of the blog passed as a prop.

### About

An aside component that displays an image and text about the blog. The image source is passed as a prop, with a default placeholder image used if no prop is provided. The about text for the blog is also passed as a prop.

### ArticleList

A main component that renders an array of Article components, each representing a blog post. It receives an array of articles as a prop and maps over it to create a list of Article components. A unique key prop is assigned to each Article for optimization.

### Article

An article component that displays the title, date, preview, and "minutes to read" for each blog post. The title, date, and preview are passed as props, and a default value of "January 1, 1970" is used for the date if no date prop is provided. The "minutes to read" feature calculates the appropriate emojis based on the read time, as specified in the bonus feature.

## Bonus Feature: 'Minutes to Read'

The "minutes to read" feature displays emojis (coffee cups or bento boxes) based on the estimated reading time for each article. If the article takes less than 30 minutes to read, coffee cup emojis are used (one for every 5 minutes). If the article takes 30 minutes or longer, bento box emojis are used (one for every 10 minutes).

## How to Run the Project

1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Install the required dependencies using npm or yarn: `npm install` or `yarn install`.
4. Start the development server: `npm start` or `yarn start`.
5. The blog site will be accessible at `http://localhost:3000`.

Thank you for visiting my blog and I hope you enjoy reading the articles as much as I enjoyed writing them. If you have any feedback or questions, feel free to reach out to me at stephan.maina@example.com.

Happy reading!
- Stephan Maina
