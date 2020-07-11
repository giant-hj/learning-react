//import React, { useState, useCallback } from 'react';
import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
//import Categories from './components/Categories';

function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);
  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />;
  //   </>
  // );
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
