import React from "react";
import '../App.css';
import { orange } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
 
const Note = (props) =>{

    const deleteNote = () =>{
        props.deleteItem(props.id);

    };
    
    return(
       <>
        <div className="note">
            <button style={{float: "right"}} className="btn" onClick={deleteNote}>
            <CloseIcon className="close-btn" sx={{ color: orange[600] }}/>
            </button>
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
           
        </div>
       </>
    );
}

export default Note;