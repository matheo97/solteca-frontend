import InputFile from 'components/dropzone/inputFile';
import React, { useCallback } from 'react';
import { Button, Input } from '../../atoms';
import { useForm } from 'react-hook-form';
import { Modal } from '../../components';
import uploadIcon from '../../images/companies/upload-file.svg';

import './createCompany.scss';

interface Props {
  onClose(): void;
  show: boolean;
}

export const CreateCompanyModal = (props: Props) => {
  const { register, handleSubmit, reset, watch } = useForm();

  const onSubmit = useCallback(
    (values) => {
      console.log('values', values);
      props.onClose();
    },
    [props]
  );

  return (
    <Modal show={props.show} onClose={props.onClose}>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="NIT" name="nit" />
          <Input label="NOMBRE CLIENTE" name="clientName" />
          <Input label="DIRECCION" name="address" />
          <div className="file">
            <InputFile
              name="fileTaxes"
              register={register}
              required={true}
              uploadIcon={uploadIcon}
            />
            <p className="file-name">
              {watch('fileTaxes')
                ? watch('fileTaxes')[0]?.name
                : 'Archivo aun no seleccionado'}
            </p>
          </div>
          <div className="actions">
            <Button
              copy="LIMPIAR"
              type="terciary"
              onClick={reset}
              buttonType="button"
            />
            <Button copy="CREAR" type="primary" buttonType="submit" />
          </div>
        </form>
      </div>
    </Modal>
  );
};
