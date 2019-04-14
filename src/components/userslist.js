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
                <h1>Check in Check Out</h1>
                {
                    users.map(el=>{
                    return <User item={el} />
                })
                }
            </div>
        )
    }
}

export default UsersList;