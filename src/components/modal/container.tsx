import React, { Component } from 'react';

import './container.scss';

interface Props {
  children: React.ReactNode;
  show: boolean;
  onClose?(): void; 
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
          {this.props.onClose ? (<button className='close-button' onClick={this.props.onClose}>X</button>) : null}
        </div>
      </div>
    );
  }
}

export default Modal;