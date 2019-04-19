import React from 'react';
import './LoginPage.css'

class LoginPage extends React.Component{
    constructor(){
        super();

        this.state={};
    }

    render(){
        return(
            <div className='login-page'>
                <h1>Login Form:</h1>
                
                <div className='username'>
                    <h4>UserName:</h4>

                    <form>
                        <input type='text' placeholder='enter username'></input>
                    </form>

                </div>

                <div className='password'>
                    <h4>Password:</h4>

                    <form>
                        <input type='text' placeholder='enter password'></input>
                    </form>
                </div>

                <button type='button'>Login</button>
                
            </div>
        )
    }
}

export default LoginPage;