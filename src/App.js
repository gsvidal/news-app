import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListNews from './components/ListNews';

function App() {

  // Define category and news
  const [ category, setCategory ] = useState("technology");
  const [ news, setNews ] = useState([]);
  const [ country, setCountry ] = useState("us");

  useEffect(() => {
    const fetchAPI = async function () {
      const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=131c067a3230481fb2375ab4699efc3a`;

      const response = await fetch(URL);
      const data = await response.json();
      setNews(data.articles);
    }
    fetchAPI();
  }, [category, country]);

  return (
    <Fragment>
      <Header 
        title="News App"
      />

      <div className="container blue-grey lighten-5">
        <Form 
          setCategory={setCategory}
          setCountry={setCountry}
        />

        <ListNews 
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
