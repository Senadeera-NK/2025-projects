import React, {useState, useEffect} from "react";

function Processing(){
    const [progress, setProgress] = useState(0); //Track the progress of the renaming
    const[finished, setFinished] = useState(false); //Tracks whether the process is completed
  
    //simulate the backend renaming process with a timer
    useEffect(()=>{
        const interval = setInterval(()=>{
            setProgress((prev)=>{
                if(prev<100) return prev+10;
                else{
                    clearInterval(interval);
                    setFinished(true); //renaming the finished
                    return 100;
                }
            }); 

        }, 1000); //progress will increment every 1 sec

        //clean up interval on component unmount
        return()=>clearInterval(interval);
    } ,[]);

    return(
        <div className="processing-container">
            <h2>Renaming Files...</h2>
            <div style={{"width":"100%", "background":"#f3f3f3", "borderRadius":"5px"}}>
                <div
                    style={{
                        height:"30px",
                        width:`${progress}%`,
                        backgroundColor: "#4caf50",
                        textAlign:"center",
                        color:"white",
                        lineHeight:"30px",
                    }}
                >
                    {progress}%
                </div>
            </div>
            {finished && <h3>Renaming complete!</h3>}
        </div>
    );
}

export default Processing;