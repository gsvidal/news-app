import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const ListNews = ({news}) => {
  return(
    <div className="row">
      { news.map(newsElement => (
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