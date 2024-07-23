import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
        <h1>About Class Component</h1>
        
        <UserClass name={"ujjwal"}/>
        </>
        )
    }


}

export default AboutUs;