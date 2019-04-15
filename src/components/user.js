import React, {Component} from "react";
import { Button ,Badge  } from 'react-bootstrap';

class User extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return (
            <div>
                <img src={"/images/users/"+ this.props.item.picture} />
                <h2> <Badge variant="secondary">{this.props.item.name}</Badge></h2>
                <h4><Badge variant="info">{this.props.item.designation}</Badge></h4>
                <div>
                <Button className="in" variant="success">Check In</Button>
                <Button className="out" variant="danger">Check Out</Button>
                </div>
            </div>
        )
    }
}

export default User;