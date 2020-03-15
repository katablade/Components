import React from "react";
import ListItem from "./ListItem";

function List(){
    return(
        <>
        <h1 style={{textAlign: "center"}}>List Component</h1>
        <div className="container">
            <ListItem>1</ListItem>
            <ListItem>2</ListItem>
            <ListItem>3</ListItem>
            <ListItem>4</ListItem>
            <ListItem>5</ListItem>
        </div>
        </>
    );
}

export default List;