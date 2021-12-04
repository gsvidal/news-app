import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = () => {

  const OPTIONS = [
    { value: "general", label: "General"},
    { value: "business", label: "Business"},
    { value: "entertaiment", label: "Entertaiment"},
    { value: "health", label: "Health"},
    { value: "science", label: "Science"},
    { value: "sports", label: "Sports"},
    { value: "technology", label: "Technology"}
  ]

  // Using custom hook
  const [ category, SelectNews ] = useSelect("general", OPTIONS);

  return(
    <div className={`${styles.search} row`}>
      <div className="col s12 m8 offset-m2">
        <form action="">
          <h2 className={styles.heading}>Search news by categories</h2>

          <SelectNews />

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



export default Form;