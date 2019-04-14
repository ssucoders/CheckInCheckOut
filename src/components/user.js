import React, {Component} from "react";

class User extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return (
            <div>
                <img src={"images/"+ this.props.item.picture} />
                <h4>{this.props.item.name}</h4>
                <p>{this.props.item.designation}</p> 

                <div>
                    <button>Check In</button>
                    <button>Check Out</button>
                </div>
            </div>
        )
    }
}

export default User;