import React, {useState} from "react"; //to manage data in our component
import axios from "axios"; //This helps us send data to the backend API


function FileUpload(){
    const [files, setFiles] = useState([]); //files - stores the files user selects
    const [processing, setProcessing] = useState([]); //uploadedFiles - stores the renamed files after backend processes them

    // function to detect when a user select a file, and store them in the "files"
    const handleFileChange = (event) => {
        setFiles(Array.from(event.target.files)); //get the list of selected files
    };

    //function to send files to the backend and navigate to processing page
    const handleNext = async()=>{
        setProcessing(true); //start processing when the next is clicked

        const formData = new FormData(); //storing the uploaded files to send backend

        //loop through the files and append to formData
        for(let i =0;i<files.length;i++){
            formData.append("files", files[i]);
        }
        try{
            //send the files to backend for uploading and renaming
            const response = await axios.post("http://localhost:5000/upload", formData, {headers:{"Content-Type":"multipart/form-data"}});
         //After uploaded, pass the uploaded files to processing page
         setProcessing(false);

         //redirect to processing page with the uplaoded files
         window.location.href = "/processing";
        }
        catch(error){
            console.error("upload failed",error);
            setProcessing(false);//stop processing when an error
        }
    };
    return(
        <div className="file-upload-container">
            <h2>Uploaded Files</h2>
            <input type="File" multiple onChange={handleFileChange}/>
            <br></br>
            <h3>Selected Files</h3>
            <ul style={{listStyleType:"none"}}>
                {Array.from(files).map((file, index)=>(
                <li key={index}>{file.name}</li>))}
            </ul>
            <br></br>
            <button onClick={handleNext}> Next </button>
        </div>
    )
};

export default FileUpload;