import React from "react";
import ProfilePic from "../katablade.jpg"
import "./ProfilePhoto.css"

function ProfilePhoto(){
    return(
        <img src={ProfilePic} alt="Profile Picture" />
    );
}

export default ProfilePhoto;
