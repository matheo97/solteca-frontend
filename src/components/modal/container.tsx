import React, { Component } from 'react';

import './container.scss';

interface Props {
  children: string;
  show: boolean;
  onClose(): void; 
};

interface State {};

class Modal extends Component<Props, State> {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='modal' id='modal'>
        <div className='modal-child'>
          {this.props.children}
          <button className='close-button' onClick={this.props.onClose}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;