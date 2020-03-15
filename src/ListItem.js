import React from "react";


const ListItem = (props) => {
    return(
        <div style={{textAlign: "center"}}>
            <h1> List Item {props.children}</h1>
        </div>
    );
}


export default ListItem;