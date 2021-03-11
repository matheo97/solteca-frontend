import React, { useState, useCallback, ChangeEvent } from 'react';
import { InputBorderBottom } from 'atoms';
import pencilActiveIcon from '../../images/companies/edit-selected.svg';
import pencilIcon from '../../images/companies/edit.svg';
import contactsIcon from '../../images/companies/contacts.svg';
import deleteIcon from '../../images/general/delete.svg';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import './container.scss';

interface Props extends RouteComponentProps {
  index: number;
  row: any;
  showContactsIcon?: boolean;
  showDeleteModal(): void;
}

const Row = ({
  row,
  index,
  showContactsIcon,
  showDeleteModal,
  history,
}: Props) => {
  const companyId = 'Hello World!';
  const [editable, setEditable] = useState(false);
  const [fieldValues, setFieldValues] = useState({
    ...row,
    actions: null,
  });

  const edit = useCallback(() => {
    setEditable(!editable);
  }, [editable]);

  const onSave = useCallback(() => {
    // call action that should send data to backend and update store
    console.log('fieldValues', fieldValues);
    setEditable(false);
  }, [fieldValues]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event?.target;
      const { name } = event?.target;

      setFieldValues({
        ...fieldValues,
        [name]: value,
      });
    },
    [fieldValues]
  );

  return (
    <tr key={index} className={'row white'}>
      {Object.keys(row).map((key: string, index: number) => (
        <td
          className={`row-element ${index === 0 ? 'first-element' : ''}`}
          key={index}
        >
          {key === 'selfWithholdingTaxes' ? (
            'Si'
          ) : editable && key !== 'actions' ? (
            <InputBorderBottom name={key} onChange={onChange} />
          ) : (
            row[key]
          )}
        </td>
      ))}
      <td className={'row-actions-wrapper'} key={index}>
        <div className={'row-actions'}>
          <div className="edit" onClick={editable ? onSave : edit}>
            {editable ? (
              <img src={pencilActiveIcon} alt="" />
            ) : (
              <img src={pencilIcon} alt="" />
            )}
          </div>
          {showContactsIcon ? (
            <div
              className="contacts"
              onClick={() =>
                history.push({
                  pathname: '/companies/contacts',
                  state: { companyId },
                })
              }
            >
              <img src={contactsIcon} alt="" />
            </div>
          ) : null}
          <div className="delete" onClick={() => showDeleteModal()}>
            <img src={deleteIcon} alt="" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(Row);
