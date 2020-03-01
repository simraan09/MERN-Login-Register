import React from 'react';
import {register} from './UserFunctions';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password
        }

        register(user).then(res =>{
            this.props.histroy.push('/profile')
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onsubmit = {this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" placeholder="Enter the First Name" value={this.state.firstName} onChange={(e) => this.setState({firstName:e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" placeholder="Enter the Last Name" value={this.state.lastName} onChange={(e) => this.setState({lastName:e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" placeholder="Enter the email" value={this.state.email} onChange={(e) => this.setState({email:e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Email</label>
                                <input type="password" className="form-control" placeholder="Enter the password" value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} />
                            </div>
                            <button type="submit" className="btn btn-success">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Register;