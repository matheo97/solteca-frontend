import React from 'react';

const SearchOption = ({
  option,
  onSelect,
  isSelected,
  fullWidth,

  ...props
}: any) => {
  return (
    <SelectOptionContainer
      onClick={() => onSelect && onSelect(option)}
      isSelected={isSelected}
      fullWidth={fullWidth}
      {...props}
    >
      <Checkbox checked={isSelected} style={{ marginRight: '10px' }} />
      <Typography text={option.label} color="fontPrimary" preset="h5" />
    </SelectOptionContainer>
  );
};

export default SelectOption;
