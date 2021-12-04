import React, { useState } from 'react';

const useSelect = (initialState, options) => {
  // Custom hook state
  const [ state, setState ] = useState(initialState);

  const SelectNews = () => (
    <select 
      name="" 
      id=""
      className="browser-default"
      value={state}
      onChange={event => setState(event.target.value)}
    >
      { options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))
      }
    </select>
  )

  return [state, SelectNews];
}

export default useSelect;