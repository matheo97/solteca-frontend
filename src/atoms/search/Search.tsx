import React from 'react';
import Input from '../input/container';
const Search = ({}: any) => {
  const [value, setValue] = React.useState('');
  /*   const [selectedOption, setSelectedOption] = React.useState<SelectOption<T>>(
    null
  );
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<SelectOption<T>[]>(
    _options || []
  ); */

  const filterOptions = (value: string) => {};

  React.useEffect(() => {
    filterOptions(value);
  }, [value]);

  return (
    <div>
      <Input onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Search;
