import React, { Component } from 'react';
import './container.scss';

interface Props {
  header: Array<{ name: string, width: string }>
  rows: Array<any>
};

interface State {};

class Table extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }

  private readonly createHeader = () => (
    <thead className='table-header-wrapper'>
      <tr className='table-header'>
        {
          this.props.header.map((element: { name: string, width: string }, index: number) => (
            <th 
              key={index} 
              style={{ width: element.width }}
              className='header-element'
            >
              {element.name}
            </th>
          ))
        }
      </tr>
    </thead>
  );

  private readonly createRows = () => (
    <tbody className='table-body-wrapper'>
      {
        this.props.rows.map((row, index: number) => (
          <tr key={index} className='row' onClick={() => console.log('index', index)}>
            {
              Object.keys(row).map((key: string, index: number) => (
                <td className={`row-element ${index === 0 ? 'first-element' : ''}`} key={index}>{row[key]}</td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  );

  render() {
    return (
      <table className='table'>
        {this.createHeader()}
        {this.createRows()}
      </table>
    );
  }
}

export default Table;