import React from "react";

class SkillTiltle extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return <h3>{this.props.name}</h3>
    }
}

export default SkillTiltle