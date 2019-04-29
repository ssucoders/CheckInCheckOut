import React, {Component} from "react";


class User extends Component{
    constructor(props){
        super(props);
        this.state={
            timer: null
        }
        this.checkInUser = this.checkInUser.bind(this)
        this.checkOutUser = this.checkOutUser.bind(this)
        this.handleButtonPress = this.handleButtonPress.bind(this)
        this.handleButtonRelease = this.handleButtonRelease.bind(this)
    }
checkInUser(){
    this.props.checkin(this.props.item.id)
}
checkOutUser(){
    this.props.checkout(this.props.item.id)
}

handleTouch(e){
    
    this.setState({timer})
}
handleCancel(e){
    this.setState({timer:null})
}

handleButtonPress () {
    let self = this;
    this.buttonPressTimer = setTimeout(() => self.props.checkin(self.props.item.id), 3000);
  }

  handleButtonRelease () {
    clearTimeout(this.buttonPressTimer);
  }


    render(){
        let user = this.props.item;
        return (
            <div>
                {user?
                <div className="card" onTouchStart={this.handleButtonPress} 
                onTouchEnd={this.handleButtonRelease} 
                onMouseDown={this.handleButtonPress} 
                onMouseUp={this.handleButtonRelease} 
                onMouseLeave={this.handleButtonRelease}>
                    <img src={"/images/users/"+ user.picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{user.name}</h4>
                        <h5 className="card-text">{user.designation}</h5>
                        <p>Check In Time: {user.checkin!=null? user.checkin.toLocaleTimeString():""}</p> 
                        <p>Check Out Time: {user.checkout!=null? user.checkout.toLocaleTimeString():""}</p>
                        <a href="#" className="btn btn-primary" onClick={this.checkInUser}>Check In</a>
                        {
                            user.checkin!=null?<button className="btn btn-danger" onClick={this.checkOutUser}>Check Out</button>:""
                        }
                    </div>
                </div>
            :null}
            </div>
            
        )
    }
}

export default User;