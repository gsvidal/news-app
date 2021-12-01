import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = () => {

  // Using custom hook
  const [ category, SelectNews ] = useSelect();

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