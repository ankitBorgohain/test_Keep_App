import React, { useState } from "react";
import '../App.css';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
 
const CreateNote = (props) =>{

    const [expand,setExpand] = useState(false);

    const [note, setNote] = useState({
        title:"",
        content:"",
    });

const InputEvent = (event) =>{

    // const value = event.target.value;
    // const name = event.target.name;
    
    const {name, value} = event.target;
 
    setNote((preValue)=>{
        return {
            //use spread operator with setNote to access the prev value
            ...preValue,
            [name]: value,}
            
    });

};

const AddEvent = () =>{
    props.passNote(note); 
    setNote({
        title:"",
        content:"",
    });
}
const expandIt = () =>{
    setExpand(true);
}

const bToNormal = () =>{
    setExpand(false);
}



    return(
        <>
                
           <div className="main_note" onDoubleClick={bToNormal} >
            <form>
            {expand ? 
                <input 

                type="text" 
                name="title"
                value={note.title} 
                onChange={InputEvent} 
                placeholder="Title" 
                autoComplete="off"
            

                /> : null}

                <textarea 
                type="text" 
                rows="" 
                name="content"
                value={note.content} 
                onChange={InputEvent} 
                columns="" 
                placeholder="Write a note..."
                onClick={expandIt}
                >
                </textarea>
                {expand ? 
                <Button className="plus-sign" onClick={AddEvent }> 
                <AddIcon sx={{ color: orange[600] }} />
                </Button> : null }
            </form>
           </div>
        </>
    );
}

export default CreateNote;