import React, { Component } from 'react';
import InputFile from './inputFile';

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
      <>
        <div
          style={{display: 'inline-block', position: 'relative'}}
          ref={this.dropRef}
        >
          {this.state.dragging &&
            <div 
              style={{
                border: 'dashed grey 4px',
                backgroundColor: 'rgba(255,255,255,.8)',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0, 
                right: 0,
                zIndex: 9999
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  left: 0,
                  textAlign: 'center',
                  color: 'grey',
                  fontSize: 36
                }}
              >
                <div>drop here :)</div>
              </div>
            </div>
          }
            {this.props.children}
        </div>
        <InputFile onChange={this.props.uploadFiles} />
      </>
    )
  }
}
export default DragAndDrop;