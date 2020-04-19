import React from 'react';
import "./main.css";
import ProfilePhoto from "./Profile/ProfilePhoto";
import FullName from "./Profile/FullName";
import Address from "./Profile/Address";

function App() {
  return (
    <div className="App">
    <ProfilePhoto/>
    <FullName/>
    <Address/>
    </div>
  );
}

export default App;
