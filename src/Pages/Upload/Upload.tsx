import { Button } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import './Upload.css'

export default function Upload() {
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [files, setFile] = useState<any[]>([]);
  const [preview, setPreview] = useState<any>()
  const [selectedFile, setSelectedFile] = useState<any>()
  const [count, setCount] = useState(0)

  const handleChange = (file: any) => {
    setFile(file);
    console.log(file);
    
    setCount(0)
    setSelectedFile(file[0])
  };

  const handleChangeImage = (value: number) => {
    setSelectedFile(files[count + value])
    setCount(count + value)
    console.log(count + value);
    
  }

  useEffect(() => {    
    if (!selectedFile) {
        setPreview(undefined)
        return
    }    
    const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    return (
        <div className='root'>
          <h1 className='title'> Drag & Drop Images</h1>
          <form className='form'>
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </form>
          <div className='image-container'>
            {count > 0 ? <Button variant="contained" className='button' onClick={() => {handleChangeImage(-1)}} >
              {"<"}
              </Button> : null}
            {files? <img className='image' src={preview}/>: ""}
            {count < files.length -1 ? <Button variant="contained" className='button' onClick={() => {handleChangeImage(1)}}>
              {">"}
              </Button> : null}
          </div>
          
          <p>{selectedFile ? `File name: ${selectedFile.name}` : "No files uploaded yet"}</p>
        </div>
      );
}