import React, { Component } from 'react';
import InputFile from './inputFile';
import uploadFile from '../../images/dashboard/upload-file.svg';
import './container.scss';

interface Props {
  children: React.ReactNode;
  uploadFiles(files: FileList | null): void;
}

interface State {
  dragging: boolean;
}

class DragAndDrop extends Component<Props, State> {

  private dropRef = React.createRef<HTMLDivElement>();
  private dragCounter = 0;

  constructor(props: Props) {
    super(props);
    this.state = {
      dragging: false,
    }
  }

  private readonly handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  private readonly handleDragIn = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ dragging: true });
    }
  };

  private readonly handleDragOut = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter === 0) {
      this.setState({ dragging: false });
    }
  };

  private readonly handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ dragging: false });
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.uploadFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
      this.dragCounter = 0;    
    }
  };

  componentDidMount() {
    let div = this.dropRef.current;
    if (div) {
      div.addEventListener('dragenter', this.handleDragIn);
      div.addEventListener('dragleave', this.handleDragOut);
      div.addEventListener('dragover', this.handleDrag);
      div.addEventListener('drop', this.handleDrop);
    }
  }

  componentWillUnmount() {
    let div = this.dropRef.current;
    if (div) {
      div.addEventListener('dragenter', this.handleDragIn);
      div.addEventListener('dragleave', this.handleDragOut);
      div.addEventListener('dragover', this.handleDrag);
      div.addEventListener('drop', this.handleDrop);
    }
  }

  render() {
    return (
      <div className='upload-file-container'>
        <div
          ref={this.dropRef}
          className={`upload-file-section ${this.state.dragging ? 'dragging' : ''}`}
        >
          <img className='upload-logo' src={uploadFile} alt='upload-file'/>
          <span className='upload-instructions'>Arrastra y lanza tu archivo aquí</span>
          <span className='upload-instructions'>O</span>
          <InputFile onChange={this.props.uploadFiles} />
        </div>
        {this.props.children}
      </div>
    )
  }
}
export default DragAndDrop;