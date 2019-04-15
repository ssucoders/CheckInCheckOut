import React, {Component} from "react";
import User from "./user";
class UsersList extends Component{
    constructor(props){
        super(props);
        this.state={
            users: [
                {
                  "name": "Saif ur rehman",
                  "designation": "Sr Software Engineer",
                  "checkin": null,
                  "checkout": null,
                  "picture": "IMG-20190205-WA0167.jpg",
                  "id":"1"
                },
                {
                  "name": "Ubaid ur rehman",
                  "designation": "Software Engineer",
                  "checkin": null,
                  "checkout": null,
                  "picture": "IMG-20190205-WA0150.jpg",
                  "id":"2"
                },
                {
                  "name": "Atta ur rehman",
                  "designation": "Admin",
                  "checkin": null,
                  "checkout": null,
                  "picture": "IMG-20190205-WA0170.jpg",
                  "id":"3"
                }
            ]
        }
        this.checkIn = this.checkIn.bind(this)
        this.localTime = this.localTime.bind(this)
    }
    checkIn(id){
        console.log(id)
        this.setState(state =>{
            let curUsers = state.users.map(el=>{
                if(el.id==id){
                    el.checkin = this.localTime()
                }
                return el
            })
            return {users:curUsers}
        })
    }
    
    localTime(){
        var d = new Date();
        return d.toLocaleTimeString();
    }

    render(){

        let users = this.state.users
      
        return (
            <div>
                <h1>SSU: Check in Check Out</h1>
                <ul>
                {
                    users.map((el, i)=>{
                        return (<li key={i}>
                            <User item={el} checkin={this.checkIn} />
                            </li>)
                    })
                }
                </ul>
               
            </div>
        )
    }
}

export default UsersList;