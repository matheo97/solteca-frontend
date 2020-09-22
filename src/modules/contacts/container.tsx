import React, { Component } from 'react';
import { Button, Input } from '../../atoms';
import { CompaniesTable, ConfirmationModal } from '../../components';
import { header, rows } from './constants';
import leftArrow from '../../images/general/left-arrow.svg';
import { CreateContactModal } from './createContact';
import { RouteComponentProps } from 'react-router-dom';

import './container.scss';

interface Props extends RouteComponentProps {} 

interface State {
  currentPage: number;
  inputSearch: string;
  showCreateContactModal: boolean;
  showDeleteModal: boolean;
  totalPages: number;
}

class Contacts extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputSearch: '',
      currentPage: 1,
      showCreateContactModal: false,
      showDeleteModal: false,
      totalPages: 10,
    }
  }
  render() {
    return (
      <div className='contacts-wrapper'>
        <div className='header'>
          <div className='top-option'>
            <img className='arrowLeft' src={leftArrow} alt='' onClick={this.props.history.goBack} />
            <Input 
              onChange={this.onChangeSearchBar} 
              width={'inherit'} 
              placeholder='Buscar'
            />
          </div>
          <div className='form-actions'>
            <div className='actions'>
              <Button 
                copy={'CREAR CONTACTO'}
                type='terciary'
                onClick={this.showCreateContactModal}
              />
            </div>
          </div>
        </div>
        <div className='content'>
          <CompaniesTable 
            header={header}
            rows={rows}
            changeCurrentPage={this.changeCurrentPage}
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
            showDeleteModal={this.showDeleteModal}
            showContactsIcon={false}
          />
        </div>
        
        {/* Create Contact */}
        <CreateContactModal
          show={this.state.showCreateContactModal}
          onClose={this.hideCreateContactModal}
        />

        {/* Confirmation modal */}
        <ConfirmationModal 
          show={this.state.showDeleteModal}
          onClose={this.hideDeleteModal}
          onConfirm={this.hideDeleteModal}
          message={'¿Estas seguro que deseas eliminar este contacto?'}
        />
      </div>
    );
  }

  private readonly showCreateContactModal = () => {
    this.setState({ 
      showCreateContactModal: true,
    });
  }

  private readonly showDeleteModal = () => {
    this.setState({ 
      showDeleteModal: true,
    });
  }

  private readonly hideCreateContactModal = () => {
    this.setState({ showCreateContactModal: false });
  }

  private readonly hideDeleteModal = () => {
    this.setState({ showDeleteModal: false });
  }

  private readonly onChangeSearchBar = () => {
    console.log('update state variable in dashboard');
  }

  private readonly changeCurrentPage = (nextPage: number) => {
    this.setState({ currentPage: nextPage });
  }
}

export default Contacts;