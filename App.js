import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

const App = () => {
  const { blogName, blogImage, aboutText, articles } = blogData;

  return (
    <div>
      <Header blogName="Mr. Perfect Tech" />
      <About blogImage={blogImage} aboutText={aboutText} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;
