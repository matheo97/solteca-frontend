import * as React from 'react'
import { InputProps } from '../Input';
import { ClassNameAndStyle } from '../utils/types';

export interface SelectProps<T> extends React.ComponentPropsWithoutRef<'input'>, ClassNameAndStyle {
  label?: string
  placeholder?: string
  fullWidth?: boolean
  error?: string

  options?: SelectOption<T>[]

  onSelectOption?: (option: SelectOption<T>) => void
  onOptionFilter?: (value: string) => SelectOption<T>[]
  format?(value: string): string

  clearable?: boolean
  searchable?: boolean

  inputProps?: InputProps
  optionProps?: SelectOptionProps<T>
}

export interface SelectOption<T> {
  label: string
  value: T
}

export interface SelectOptionProps<T> extends ClassNameAndStyle {
  onSelect?: (option: SelectOption<T>) => void
  option?: SelectOption<T>

  isSelected?: boolean
  fullWidth?: boolean
}
