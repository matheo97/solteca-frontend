import React from 'react';

interface Props {
  onChange(files: FileList | null): void; 
}

const InputFile = (props: Props) => (
  <div className='upload-file-manually'>
    <label>
      Buscar
      <input
        style={{ display: 'none' }}
        type='file'
        onChange={e => {
          props.onChange(e.target.files);
        }}
      />
    </label>
  </div>
);

export default InputFile;
