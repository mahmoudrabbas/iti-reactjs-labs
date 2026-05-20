import React from "react";

class TitleComponent extends React.Component
{
    constructor(props){
        super()
    }
    render(){
        return(
            <>
                <h1 className={`text-${this.props.color} ${this.props.padding}`}>{this.props.title}</h1>
            </>
        )
    }
}
export default TitleComponent