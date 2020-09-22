import React, { Component } from 'react';
import { Button, Input, Select } from '../../atoms';
import { CompaniesTable, ConfirmationModal } from '../../components';
import { options, header, rows } from './constants';

import './container.scss';
import { CreateCompanyModal } from './createCompany';

interface Props {} 

interface State {
  currentPage: number;
  inputSearch: string;
  selectValue: string;
  showCreateModal: boolean;
  showDeleteModal: boolean;
  totalPages: number;
}

class Companies extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputSearch: '',
      currentPage: 1,
      showCreateModal: false,
      showDeleteModal: false,
      totalPages: 10,
      selectValue: 'customers',
    }
  }

  render() {
    return (
      <div className='companies-wrapper'>
        <div className='header'>
          <Input 
            onChange={this.onChangeSearchBar} 
            width={'inherit'} 
            placeholder='Buscar'
          />
          <div className='form-actions'>
            <div className='form'>
            </div>
            <div className='actions'>
              <Select 
                defaultOption={'Clientes'}
                options={options}
                setValueOutside={this.setSelectValue}
              />
              <Button 
                copy={this.state.selectValue === 'customers' ? 'CREAR CLIENTES' : 'CREAR PROOVEDORES'}
                type='terciary'
                onClick={this.showCreateEntityModal}
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
            showContactsIcon={true}
          />
        </div>
        
        {/* Create Customer and Suppliers */}
        <CreateCompanyModal
          show={this.state.showCreateModal}
          onClose={this.hideCreateEntityModal}
        />

        {/* Confirmation modal */}
        <ConfirmationModal 
          show={this.state.showDeleteModal}
          onClose={this.hideDeleteEntityModal}
          onConfirm={this.hideDeleteEntityModal}
          message={'¿Estas seguro que deseas eliminar esta empresa?'}
        />
      </div>
    );
  }

  private readonly showCreateEntityModal = () => {
    this.setState({ 
      showCreateModal: true,
    });
  }

  private readonly showDeleteModal = () => {
    this.setState({ 
      showDeleteModal: true,
    });
  }

  private readonly hideCreateEntityModal = () => {
    this.setState({ showCreateModal: false });
  }

  private readonly hideDeleteEntityModal = () => {
    this.setState({ showDeleteModal: false });
  }

  private readonly onChangeSearchBar = () => {
    console.log('update state variable in dashboard');
  }

  private readonly changeCurrentPage = (nextPage: number) => {
    this.setState({ currentPage: nextPage });
  }

  private readonly setSelectValue = (selectValue: string) => {
    this.setState({ selectValue });
  }
}

export default Companies;