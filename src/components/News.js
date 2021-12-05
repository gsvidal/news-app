import React from 'react';
import styles from './News.module.css';

const News = ({newsElement}) => {

  // Extracting data
  const { urlToImage, url, author, publishedAt, title, description, source } = newsElement;

  // Date:
  const rawDate = publishedAt;

  const year = new Date(rawDate).getFullYear();
  const month = new Date(rawDate).getMonth();
  const day = new Date(rawDate).getDate();

  return(
    <div className="col s12 m6 l4">
      <div className={`card ${styles["card-news"]}`}>
        { urlToImage && 
          <div className={`card-image ${styles["card-image-news"]}`}>
            <img 
              src={urlToImage} 
              alt={title}
            />
            <span className="card-title">{source.name}</span>
          </div>
        }
        { author && 
          <p className={styles["news__author"]}>{`${author} - ${day}/${month}/${year}`}</p>
        }
        
        <div className="card-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Read the article
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default News;