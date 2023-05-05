import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.filterLabel}>
    Find contacts by name
    <input
      className={css.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

export default Filter;
