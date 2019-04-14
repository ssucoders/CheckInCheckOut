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
              {this.props.item.name}
            </div>
        )
    }
}

export default User;