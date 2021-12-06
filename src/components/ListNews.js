import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const ListNews = ({news}) => {
  console.log(news);
  if(news?.length === 0) return null;

  return(
    <div className="row">
      { news?.map(newsElement => (
        <News 
          key={newsElement.url}
          newsElement={newsElement}
        />
      ))}
    </div>
  );
}

ListNews.propTypes = {
  news: PropTypes.array.isRequired
}

export default ListNews;