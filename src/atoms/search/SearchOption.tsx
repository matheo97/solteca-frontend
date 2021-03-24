import React from 'react';
import { SearchOptionProps } from './Search.props';

const SearchOption = ({ setSelectedOption, option }: SearchOptionProps) => {
  return (
    <div className="option" onClick={() => setSelectedOption(option)}>
      <span>{option.label}</span>
    </div>
  );
};

export default SearchOption;
