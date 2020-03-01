import React, {useState} from 'react';
import {login} from './UserFunctions';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            email:this.state.email,
            password:this.state.password
        }

        login(user).then(res =>{
            if(res){
                this.props.histroy.push('/profile')
            }
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onsubmit = {this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" placeholder="Enter the email" value={this.state.email} onChange={(e) => this.setState({email:e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Email</label>
                                <input type="password" className="form-control" placeholder="Enter the password" value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;