import React,{ useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from "@mui/material/Zoom";


function InputArea(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function expand() {
      setIsExpanded(true);  
    }

    return (<div>
        <form onSubmit={(event)=>event.preventDefault()}>
            {isExpanded && <input type="text" placeholder="Title" onChange={props.onChange} value={props.value.title} name="title"></input>}
            <textarea type="text" placeholder="Take a note..." onChange={props.onChange} value={props.value.content} name="content" onClick={expand} rows={isExpanded?3:1}></textarea>
            <Zoom in={isExpanded}><Fab type="submit" onClick={props.onAdd} className="button"><AddIcon/></Fab></Zoom>

        </form>
    </div>);
    
}

export default InputArea;