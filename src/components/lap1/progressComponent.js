import React from "react";

class progressComponent extends React.Component{
    
    constructor(props){
        super()
    }
    render(){
        return(
            <>
            <div className="d-flex align-items-center mb-3">
            <span style={{ width: '80px', fontWeight: 'bold' }}>
                {this.props.name}
            </span>
           <div className="progress flex-grow-1" style={{ height: '20px' }}>
                <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{ width: this.props.value }} 
                    aria-valuenow="25" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                >
                    {this.props.value}
                </div>
            </div>
            </div>
            </>
        )
    }
}

export default progressComponent