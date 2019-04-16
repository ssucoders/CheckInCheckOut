import React, {Component} from "react";
import { Button ,Badge  } from 'react-bootstrap';

class User extends Component{
    constructor(props){
        super(props);
        this.state={
        }
        this.checkInUser = this.checkInUser.bind(this)
        this.checkOutUser = this.checkOutUser.bind(this)
    }
checkInUser(){
    this.props.checkin(this.props.item.id)
}
checkOutUser(){
    this.props.checkout(this.props.item.id)
}
    render(){
        let user = this.props.item;
        return (
            <div>
                <img src={"/images/users/"+ user.picture} />
                <h2> <Badge variant="secondary">{user.name}</Badge></h2>
                <h4><Badge variant="info">{user.designation}</Badge></h4>
                <div>
                <Button className="in" variant="success" onClick={this.checkInUser}>Check In</Button>
                {
                    user.checkin!=null?<Button className="out" variant="danger" onClick={this.checkOutUser}>Check Out</Button>:""
                }
                </div>
                <div>
                    <p>Check In Time: {user.checkin!=null? user.checkin.toLocaleTimeString():""}</p> 
                    <p>Check Out Time: {user.checkout!=null? user.checkout.toLocaleTimeString():""}</p>
                </div>
            </div>
            
        )
    }
}

export default User;