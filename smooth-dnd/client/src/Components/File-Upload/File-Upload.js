import React from 'react';
import "./File-Upload.css"
import 'react-dropzone-uploader/dist/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {Progress} from 'reactstrap';




class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }

  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files,
      loaded: 0,
    })
    console.log(event.target.files);
  }

  onClickHandler = () => {
    const data = new FormData()
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }

    axios.post("http://localhost:3001/upload", data, {
      // receive two    parameter endpoint url ,form data
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
        })
      },
    })

      .then(res => { // then print response status
        toast.success('upload success')
      }).catch(err => { 
        toast.error('upload fail')
    })

  }

  render() {
    return (
      <div className="FileUploader">
        <form method="post" action="#" id="#">




          <div className="form-group files">
            <label>Upload Your Files </label>
            <br></br>
            <i>**max 10</i>
            <ToastContainer />
            <input type="file" multiple className="form-control" name="file" onChange={this.onChangeHandler} />
            <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
            <button type="button" className="btn btn-success btn-block mt-3" onClick={this.onClickHandler}>Upload</button>
          </div>


        </form>
      </div>
    );
  }
}
export default FileUpload;