import React, { Component } from 'react';
import items, { Item } from './itemsSideBar';
import { RouteComponentProps , withRouter } from 'react-router-dom';
import avatar from '../../../images/sideBar/avatar.svg';

import './sideBar.scss';

interface State {
  activeTab: string;
}

interface Props extends RouteComponentProps{}

class SideBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: 'dashboard',
    }
  }

  public render () {
    return (
      <div className='side-bar-container'>
        <div className='side-bar-header'>
          <img src={avatar} alt=''/>
        </div>
        <div className='side-bar-buttons-wrapper'>
          {
            items.map(
              (item: Item) => (
                <button
                  className='wrapper-button'
                  onClick={() => this.handleOnClick(item.key)}
                >
                  <div className='item-container'>
                    <div className='icon'>
                      <img 
                        className={this.state.activeTab === item.label ? 'active' : ''} 
                        src={item.icon} 
                        alt=''
                      />
                    </div>
                    <span className='title'>{item.label}</span>
                  </div>
                </button>
              )
            )
          }
        </div>
      </div>
    );
  }

  private handleOnClick = (nextRoute: string) => {
    this.props.history.push(`/${nextRoute}`)
  }
}

export default withRouter (SideBar);