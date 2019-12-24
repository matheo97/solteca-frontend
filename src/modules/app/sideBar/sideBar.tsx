import React, { Component } from 'react';
import items from './itemsSideBar';
import logo from '../../../images/parking/p-logo.svg';

import './sideBar.scss';

interface State {
  activeTab: string;
}

interface Props {
  example: string;
}

interface Item {
  label: string;
  iconOn: string;
  iconOff: string;
  key: string;
}

class SideBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: 'getting in',
    }
  }

  public render () {
    return (
      <div className='side-bar-container'>
        <div className='side-bar-header'>
          <img src={logo} alt=""/>
        </div>
        {
          items.map(
            (item: Item) => (
              <div>
                <button
                  className='wrapper-button'
                  onClick={() => console.log('Clicked!!')}
                >
                  <div className={`selector ${this.state.activeTab === item.label ? 'active' : ''}`}></div>
                  <div className='item-container'>
                    <div className='icon'>
                      <img 
                        src={this.state.activeTab === item.label ? item.iconOn : item.iconOff} 
                        alt=""
                      />
                    </div>
                    <span className='title'>{item.label}</span>
                  </div>
                </button>
              </div>
            )
          )
        }
      </div>
    );
  }
}

export default SideBar;