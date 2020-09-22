import React from 'react';

interface Props {
  name?: string;
  register?: any;
  required?: boolean;
  uploadIcon?: string;
  onChange?(files: FileList | null): void; 
}

const InputFile = (props: Props) => (
  <div className='upload-file-manually'>
    { props.uploadIcon ? <img className='upload-icon' src={props.uploadIcon} alt=''/> : null }
    <label>
      Buscar
      <input
        style={{ display: 'none' }}
        type='file'
        ref={props.register}
        name={props.name}
        onChange={e => {
          if (props.onChange) props.onChange(e.target.files);
        }}
        required={props.required}
      />
    </label>
  </div>
);

export default InputFile;
