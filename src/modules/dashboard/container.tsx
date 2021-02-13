import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { UploadFile, Card, Modal } from '../../components';
import Graph from './graph';
import bankrupt from '../../images/dashboard/bankrupt.svg';
import earnings from '../../images/dashboard/earnings.svg';
import media from '../../images/dashboard/media.svg';
import bank from '../../images/dashboard/bank.svg';
import UpdateBankAccount from './updateBankAccountModal';
import { bindActionCreators, Dispatch } from 'redux';
import { getCompanyInfo } from '../../actions';
import Solteca from 'types';

import './container.scss';
interface Props {
  moneyOwnedToUs: number;
  moneyOwned: number;
  getCompanyInfo(): void;
}

interface State {
  displayUpdateBankAccountModal: boolean;
}

class Dashboard extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displayUpdateBankAccountModal: false,
    };
  }

  async componentDidMount() {
    this.props.getCompanyInfo();
  }

  private readonly onChangeBankAccountModal = () => {
    this.setState({
      displayUpdateBankAccountModal: !this.state.displayUpdateBankAccountModal,
    });
  };

  render() {
    return (
      <div className="dashboard-wrapper">
        <div className="upper-container">
          <div className="graph">
            <div className="title">ventas por cuatrimestre:</div>
            <div className="graph-container">
              <Graph
                firstQuater={10000000}
                secondQuater={8000000}
                thirdQuater={4000000}
              />
            </div>
          </div>
          <div className="upload-file">
            <UploadFile />
          </div>
        </div>
        <div className="cards-container">
          <Card
            icon={bankrupt}
            title="total adeudado a la fecha"
            value={this.props.moneyOwned + ''}
            color={'red'}
          />
          <Card
            icon={earnings}
            title="dinero que nos deben a la fecha"
            value={this.props.moneyOwnedToUs + ''}
            color={'green'}
          />
          <Card
            icon={media}
            title="liquidacion del iva a la fecha"
            value={'10.000.000'}
            color={'blue'}
            quarter={1}
          />
          <Card
            icon={bank}
            title="dinero total en cuenta de ahorros"
            value={'2.000.000'}
            color={'green'}
            date={'febrero 21 de 2020'}
            changeBankAccount={this.onChangeBankAccountModal}
          />
        </div>
        {/* Update amount of money in the bankAccount */}
        <Modal show={this.state.displayUpdateBankAccountModal}>
          <UpdateBankAccount onCancel={this.onChangeBankAccountModal} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state: Solteca.FullState) => ({
  moneyOwnedToUs: state.company.moneyOwnedToUs,
  moneyOwned: state.company.moneyOwned,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getCompanyInfo,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
