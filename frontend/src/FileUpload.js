import React, {useState} from "react"; //to manage data in our component
import axios from "axios"; //This helps us send data to the backend API


function FileUpload(){
    const [files, setFiles] = useState([]); //files - stores the files user selects
    const [uploadedFiles, setUploadedFiles] = useState([]); //uploadedFiles - stores the renamed files after backend processes them

    // function to detect when a user select a file, and store them in the "files"
    const handleFileChange = (event) => {
        setFiles(event.target.files); //get the list of selected files
    };

    // function to "send the files to backend"
    const handleUpload = async() => {
        const formData = new FormData(); //create a new package to send files to backend

        //looping and adding each file to the package
        for(let i=0; files.length>i; i++){
            formData.append("files", files[i]);
        }
        try{
            const response = await axios.post("http://localhost:5000/upload", formData, {headers:{"Content-type":"multipart/form-data"}});
            setUploadedFiles(response.data.files);
        }catch(error){
            console.error("upload failed", error);
        }
    };

    const handleRename = async() = {
        try{

        }catch(){
            
        }
    };

    return(
        <div className="file-upload-container">
            <h2>Upload Files</h2>
            <input type="File" multiple onChange={handleFileChange}/>
            <button onClick={handleUpload}>Upload</button>

            <h3>Uploaded Files</h3>
            //list all the files that are selected by the user
             <ul>
                {Array.from(files).map((file,index)=>(
                    <li key={index}>file.name</li>
                ))}
            </ul>
            <button onClick={handleRename}>Next</button>
        </div>
     );
};

export default FileUpload;