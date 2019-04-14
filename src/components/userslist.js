import React, {Component} from "react";
import User from "./user";
class UsersList extends Component{
    constructor(props){
        super(props);
        this.state={
            users: [
                {
                  "name": "saif ur rehman",
                  "designation": "Sr Software Engineer",
                  "checkin": null,
                  "checkout": null,
                  "picture": "saif.jpg"
                },
                {
                  "name": "ubaid ur rehman",
                  "designation": "Software Engineer",
                  "checkin": null,
                  "checkout": null,
                  "picture": "ubaid.jpg"
                },
                {
                  "name": "Atta ur rehman",
                  "designation": "Admin",
                  "checkin": null,
                  "checkout": null,
                  "picture": "atta.jpg"
                }
            ]
        }
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
                            <User item={el} />
                            </li>)
                    })
                }
                </ul>
               
            </div>
        )
    }
}

export default UsersList;