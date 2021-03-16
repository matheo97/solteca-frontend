import React from 'react';
import { Company } from 'services/api';
import { companyService } from 'services/company';
import { Option, SearchProps } from './Search.props';
import Input from '../input/container';
import SearchOption from './SearchOption';
import { useDebouncedValue } from './useDebouncedValue';

const Search = (props: SearchProps) => {
  const [value, setValue] = React.useState('');
  const [options, setOptions] = React.useState<Option[]>([]);
  let timer: any = null;

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
    props.setValueForm(`${props.name}Id`, option.value);
    props.setValueForm(props.name, option.label);
  };

  React.useEffect(() => {
    clearTimeout(timer);
    timer = setTimeout(() => filterOptions(value), 500);
  }, [value]);

  React.useEffect(() => {
    return () => {
      timer = null;
    };
  }, []);

  return (
    <div>
      <Input
        {...props}
        onChange={(e) => {
          props.onChange(e);
          setValue(e.target.value);
        }}
      />
      <div>
        {options.map((option: Option) => (
          <SearchOption
            option={option}
            setSelectedOption={updateOptionSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
