import React from "react";

function InputArea(props) {

    return (<div>
        <form onSubmit={(event)=>event.preventDefault()}>
            <input type="text" placeholder="Title" onChange={props.onChange} value={props.value.title} name="title"></input>
            <input type="text" placeholder="Take a note..." onChange={props.onChange} value={props.value.content} name="content"></input>
            <button type="submit" onClick={props.onAdd}>Add</button>

        </form>
    </div>);
    
}

export default InputArea;