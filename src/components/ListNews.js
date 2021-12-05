import React from 'react';
import News from './News';

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

export default ListNews;