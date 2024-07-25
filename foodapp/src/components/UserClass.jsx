import React from "react"
class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo: {
                name:"abc",
                location:"default"

            }

        }
    }
   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/ukm01")
    const json = await data.json() 
    

    this.setState({userInfo:json})
   }
    


    render(){
        const{name,location,html_url,avatar_url}=this.state.userInfo;
        //const{count}=this.state;
        return(
            <div className="user-card">
                <img src={avatar_url}></img>
               
             <h2>Name:{name}</h2>
             <h3>Location:{location}</h3>
             <h4>Contact:{html_url}</h4>
     
            </div>
         )
        
    }
     
}

export default UserClass;