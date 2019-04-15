import React, {Component} from "react";
import { Button ,Badge  } from 'react-bootstrap';

class User extends Component{
    constructor(props){
        super(props);
        this.state={
        }
       
        this.checkInUser = this.checkInUser.bind(this)
    }

checkInUser(){
    this.props.checkin(this.props.item.id)
}
    render(){
        return (
            <div>
                <img src={"/images/users/"+ this.props.item.picture} />
                <h2> <Badge variant="secondary">{this.props.item.name}</Badge></h2>
                <h4><Badge variant="info">{this.props.item.designation}</Badge></h4>
                <div>
                <Button className="in" variant="success" onClick={this.checkInUser}>Check In</Button>
                <Button className="out" variant="danger">Check Out</Button>
                </div>
                <div>
                    <p>Check In Time:</p>
                    <p>{this.props.item.checkin}</p> 
                    <p>Check Out Time:</p>
                    <p>{this.props.item.checkout}</p>
                </div>
            </div>
        )
    }
}

export default User;