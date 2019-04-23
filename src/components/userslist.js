import React, {Component} from "react";
import User from "./user";
import {fetchEmployees} from "../API";
import Header from "./header";

class UsersList extends Component{
    constructor(props){
        super(props);
        this.state={
            users: []
        }
        this.checkIn = this.checkIn.bind(this)
        this.checkOut = this.checkOut.bind(this)
        this.localTime = this.localTime.bind(this)
        this.searchUsers = this.searchUsers.bind(this)
        this.setupUsers = this.setupUsers.bind(this)
    }
    checkIn(id){
        console.log(id)
        this.setState(state =>{
            let curUsers = state.users.map(el=>{
                if(el.id==id){
                    el.checkin = this.localTime()
                }
                return el
            }).sort((a,b) =>{
                if(a.checkin == null){
                    return 1
                }else if(b.checkin==null){
                    return -1
                }else if(a.checkin.getTime() > b.checkin.getTime()){
                    return 1
                }else{
                    return -1
                }

            })
            
            return {users:curUsers}
        })
    }
    
    searchUsers(query){
        console.log(query)
        this.setState(state =>{
            let curUsers = this.state.users.filter(el=>{
                if (el.name.toUpperCase().indexOf(query.toUpperCase()) > -1) {
                    return el
                } 
            })
            return {users:curUsers}
        }
    )
}


    checkOut(id){
        console.log(id)
        this.setState(state =>{
            let curUsers = state.users.map(el=>{
                if(el.id==id){
                    el.checkout = this.localTime()
                }
                return el
            })
            return {users:curUsers}
        }) 
    }

    localTime(){
        var d = new Date();
        return d //.toLocaleTimeString();
    }

    componentDidMount(){
        this.setupUsers();
    }

    setupUsers(){
        var self = this;
        fetchEmployees().then((response)=>{
            self.setState({users:response.data})
        });
    }

    render(){

        let users = this.state.users
      
        return (
            <div>
                <Header searchusers={this.searchUsers} setupusers={this.setupUsers}/>
                <ul className="row">
                {
                    users.map((el, i)=>{
                        return (<li className={el.checkin!=null?"changeBg":""} key={i} >
                            <User item={el} checkin={this.checkIn} checkout={this.checkOut} />
                            </li>)
                    })
                }
                </ul>
        </div>
        )
    }
}

export default UsersList;