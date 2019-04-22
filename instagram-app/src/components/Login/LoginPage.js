import React from 'react';
import './LoginPage.css'

class LoginPage extends React.Component{
    constructor(){
        super();

        this.state={
            username: '',
            password: ''
        };
    }

    handleChanges = e =>{
        this.setState({ [e.target.name]: e.target.value});
    }

    handleLoginBtn = () =>{
        const user = this.state.username;
        const password = this.state.password
        localStorage.setItem('user', user);
        localStorage.setItem('password', password)
        window.location.reload();
    }

    render(){
        console.log(this.state.password)
        return(
            <div className='login-page'>
                <h1>Login Form:</h1>
                
                <div className='username'>
                    <h4>UserName:</h4>

                    <form>
                        <input 
                            type='text' 
                            placeholder='enter username' 
                            name='username' 
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                    </form>

                </div>

                <div className='password'>
                    <h4>Password:</h4>

                    <form>
                        <input 
                            type='text' 
                            placeholder='enter password' 
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChanges}
                        />
                    </form>
                </div>

                <button type='button' onClick={this.handleLoginBtn} >Login</button>
                
            </div>
        )
    }
}

export default LoginPage;