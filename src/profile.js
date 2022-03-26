import React from "react";
class profile extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log("hello");
        console.warn("called life cycle");
    }
    render(){
        return(
            <div>
               <h1>Class Component</h1>
            </div>
        )
    }
}

export default profile;