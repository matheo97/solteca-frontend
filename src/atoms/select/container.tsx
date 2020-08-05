import React, { Component } from 'react';
import arrowDown from '../../images/general/down-arrow.svg';

import './container.scss';

interface Props {
  defaultOption: string;
  options: Array<{ value: string, copy: string }>;
}

interface State {
  selectedOption: string;
  selectedValue: string;
  showOptions: boolean;
}

class Select extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedOption: '',
      selectedValue: '',
      showOptions: false,
    }
  }

  render() {
    const height = this.generateHeight();
    const selectedOption = this.state.selectedOption ? this.state.selectedOption : this.props.defaultOption;
    return (
      <div className='select-container' style={{ height: `${height}rem` }}>
        <div className='default-option' onClick={this.openOptions}>
          <span className='selected-option'>{selectedOption}</span>
          <img className='arrow-down' src={arrowDown} alt=''/>
        </div>
        { this.state.showOptions ? (
          <div className='options'>
            { this.props.options.map(
                (option, index) => {
                  if (option.copy !== selectedOption) {
                    return (
                      <div key={index}>
                        <hr/>
                        <div 
                          className='option' 
                          onClick={() => this.onSelectedOptionChange(option.value)}
                        >
                          { option.copy }
                        </div>
                      </div>
                    )
                  } else {
                    return null;
                  }
                }
              )
            }
          </div> 
        ) : null }
      </div>
    )
  }

  private readonly openOptions = () => {
    this.setState({ showOptions: !this.state.showOptions });
  }

  private readonly generateHeight = () => {
    let perElement = 5;
    if (window.innerWidth <= 1870) perElement = 4.5;
    return this.state.showOptions ? (perElement * this.props.options.length) : perElement;
  }

  private readonly onSelectedOptionChange = (value: string) => {
    this.setState({ 
      selectedValue: value, 
      selectedOption: this.props.options.filter((option) => option.value === value)[0].copy,
      showOptions: false,
    });
  }
};

export default Select;