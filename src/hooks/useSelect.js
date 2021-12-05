import React, { useState } from 'react';

const useSelect = (initialState, options) => {
  // Custom hook state
  const [ state, setState ] = useState(initialState);

  const SelectItem = ({item}) => (
    <select 
      name="" 
      id=""
      className={`col s9 browser-default ${item === "news" ? "" : "cyan lighten-5 select-country"}`}
      value={state}
      onChange={event => setState(event.target.value)}
    >
      { options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))
      }
    </select>
  )

  return [state, SelectItem];
}

export default useSelect;