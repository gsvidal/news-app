import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Form = ({setCategory, setCountry}) => {

  const optionsCategories = [
    { value: "general", label: "General"},
    { value: "business", label: "Business"},
    { value: "entertainment", label: "Entertainment"},
    { value: "health", label: "Health"},
    { value: "science", label: "Science"},
    { value: "sports", label: "Sports"},
    { value: "technology", label: "Technology"}
  ]
  const optionsCountries = [
    { value: "us", label: "United States"},
    { value: "au", label: "Australia"},
    { value: "br", label: "Brazil"},
    { value: "ng", label: "England"},
    { value: "mx", label: "Mexico"},
    { value: "ru", label: "Russia"},
  ]

  // Using custom hook
  const [ category, SelectNews ] = useSelect("technology", optionsCategories);
  const [ country, SelectCountry] = useSelect("us", optionsCountries);

  // Submit to form, send category to app.js
  const handleSubmit = event => {
    event.preventDefault();

    setCategory(category);
    setCountry(country);
  }

  return(
    <div className={`${styles.search} row`}>
      <div className="col s12 m8 offset-m2">
        <form 
          action=""
          onSubmit={handleSubmit}
          >
          <h2 className={styles.heading}>Search news by categories</h2>
          <div className="row">
            <p className="col s3">Country:</p>
            <SelectCountry 
              item="country"
            />
          </div>
          <div className="row">
            <p className="col s3">Category:</p>
            <SelectNews 
              item="news"
            />
          </div>
          <div className="input-field col s12">
            <button
              type="submit"
              className={`${styles["btn-block"]} btn-large blue-grey`}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  setCategory: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired
}

export default Form;