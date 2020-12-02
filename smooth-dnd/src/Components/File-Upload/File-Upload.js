import React from 'react';
import "./File-Upload.css"
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
 
// preview component
const Preview = ({ meta }) => {
  const { name, percent, status, previewUrl } = meta;
  return (

    <div className="preview-box">
        <div>
      <img className="imageUpload" src={previewUrl} alt="" /> 
      <span className="name">{name}</span>
       {status !== "done" && <span className="percent"> ({Math.round(percent)}%)</span>}
       </div>
    </div>
  )
}


 
function FileUpload() {
  
  // specify upload params and API url to file upload
  const getUploadParams = ({ file, meta }) => {
    const body = new FormData()
    body.append('fileField', file)
    return { url: 'http://localhost:8000/uploads', body }
  }
 
  // handle the status of the file upload
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }
 
  return (
    <div className="FileUploader">
      <div>
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          styles={{
            dropzone: { overflow: 'auto', border: '1px solid #999', background: '#f5f5f5' },
            inputLabelWithFiles: { margin: '20px 3%' }
          }}
          // PreviewComponent={Preview}
          accept="image/*,audio/*,video/*"
        />
      </div>
    </div>
  );
}
 
export default FileUpload;