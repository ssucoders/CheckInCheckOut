import React, {Component} from "react";

class Header extends Component{
    constructor(props){
        super(props);
        this.handlechange = this.handlechange.bind(this)
    }

    handlechange(e){
        console.log(e.target.value)
        let query = e.target.value
        if(query.trim().length>0){
            this.props.searchusers(query);
        }else{
            this.props.setupusers()
        }
    }

    render(){
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">SSU</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0 ml-auto">
                <input className="form-control mr-sm-2" type="search" onChange={this.handlechange} placeholder="Search" aria-label="Search" />
                </form>
            </div>
    </nav>
        )
    }
}

export default Header;