import React, { useEffect } from 'react';
import { Company } from 'services/api';
import { companyService } from 'services/company';
import { Option, SearchProps } from './Search.props';
import Input from '../input/container';
import SearchOption from './SearchOption';
import './Search.scss';

const Search = ({ name, value, onChange, setValueForm }: SearchProps) => {
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState<Option[]>([]);

  const filterOptions = async (name: string) => {
    const companies = await companyService.getCompaniesByName(name);
    setOptions(
      companies.map((company: Company) => ({
        label: company.name,
        value: company.id,
      }))
    );
  };

  const updateOptionSelected = (option: Option) => {
    setValueForm(`${name}Id`, option.value);
    setValueForm(name, option.label);
    setOptions([]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      filterOptions(inputValue);
    }, 400);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="search-input">
      <Input
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e);
          setInputValue(e.target.value);
        }}
      />
      {options.length > 0 && (
        <div className="options">
          {options.map((option: Option) => (
            <SearchOption
              option={option}
              setSelectedOption={updateOptionSelected}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
