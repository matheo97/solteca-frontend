import React, { Component } from 'react'
import DragAndDrop from '../dropzone/container';

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
        <div style={{height: 300, width: 250}}>
          {this.state.files.map((file: any, i: any) =>
            <div key={i}>{file}</div>
          )}
        </div>
      </DragAndDrop>
    )
  }
}

export default FileList;