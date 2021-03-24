import { ChangeEvent } from 'react';

export interface Option {
  label: string | null;
  value: string | null;
}

export interface SearchProps {
  name: string;
  value: string;
  onChange(e: ChangeEvent): void;
  setValueForm(name: string, value: any): void;
}

export interface SearchOptionProps {
  setSelectedOption: any;
  option: Option;
}
