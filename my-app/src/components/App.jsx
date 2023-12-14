import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notes from "../notes";
import InputArea from "./InputArea";
import {v4 as uuidv4} from 'uuid';

function App(){

    const[noteInput,setNoteInput] = useState({title:"" , content:""});
    const[totalNotes,setTotalNotes]= useState([...notes]);

    function handleChange(props){
        console.log(props.target.name);
        setNoteInput(prevValue=>{
            return {...prevValue, [props.target.name]:props.target.value};
        }
        )
        console.log(noteInput);
    }

    function handleAdd(){
        setTotalNotes([...totalNotes,{...noteInput, key: uuidv4()}]);
        setNoteInput({title:"" , content:""});
    }

    function handleDelete(id){
        setTotalNotes(totalNotes.filter(n=> n.key !== id));
    }
    return (
        <div>

            <Header/>
            <InputArea onChange={handleChange} value={noteInput} onAdd={handleAdd}/>
            {totalNotes.map(n => {
                return <Notes
                            id = {n.key}
                            key={n.key} 
                            title={n.title} 
                            content={n.content}
                            onDelete={handleDelete}
                        />
            })}
            <Footer/>
        </div>
    );
}

export default App;