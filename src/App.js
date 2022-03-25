import React, { useState, useEffect } from 'react';

const API_URL = "http://www.omdbapi.com/?apikey=4078af18";

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div>
      This is my app
    </div>
  );
};

export default App;