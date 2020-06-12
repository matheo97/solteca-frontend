import React, { Component } from 'react'
import DragAndDrop from './container';
import progressIcon from '../../images/dashboard/check.svg';
import deleteIcon from '../../images/dashboard/close.svg';
import downloadIcon from '../../images/dashboard/download.svg';

import './container.scss';

interface Props {};

interface State {
  files: String[];
};

class FileList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      files: [
        'nice.pdf',
        'verycool.jpg',
        'amazing.png',
        'goodstuff.mp3',
        'thankyou.doc'
      ]
    }
  }

  private readonly uploadFile = (files: any) => {
    let fileList = this.state.files
    if (!files) return;
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return
      fileList.push(files[i].name)
    }
    this.setState({ files: fileList });
  };

  render() {
    return (
      <DragAndDrop uploadFiles={this.uploadFile}>
        <div className='upload-file-list'>
          {this.state.files.map((file: any, i: any) =>
            <div className='file-element' key={i}>
              <div className='left'>
                <img src={progressIcon} className='progress-icon' alt='progress-icon'/>
                <span className='file-name'>{file}</span>
              </div>
              <div className='right'>
                <img src={downloadIcon} className='download-icon' alt='download-icon'/>
                <img src={deleteIcon} className='delete-icon' alt='delete-icon'/>
              </div>
            </div>
          )}
        </div>
      </DragAndDrop>
    )
  }
}

export default FileList;