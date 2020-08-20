import React,{Component} from 'react'
import Login from '../Login'
 
class LoginValidation extends Component{
    state ={
        username:'',
        password:'' ,
        errors:'',
        success:''
    }

    // event handlers
        usernameChangeHandler =(event) =>{
            this.setState({
                username : event.target.value
            })
        }

        passwordChangeHandler =(event) =>{
            this.setState({
                 password : event.target.value
            })
           
        }

        formSubmit =(event) =>{
            event.preventDefault();
            if(this.state.username === ''){
                this.setState({
                    errors:<p>Please Enter Your Username</p>
                })
            }else if(this.state.username.length < 3){
                this.setState({
                    errors:<p>please your username is too short</p>
                })
            }else if(this.state.password === ''){
                this.setState({
                    errors:<p>Please Enter Your Password </p>
                })
            }
            else{
                this.setState({
                    success:<p>Thanks for submitting</p>,
                    errors:''
                })
            }

        }
    render (){
        return(
            <Login 
                username={this.state.username}
                password ={this.state.password}
                nameChanged={this.usernameChangeHandler}
                passwordChanged={this.passwordChangeHandler}
                submit={this.formSubmit}
                errorMessage={this.state.errors}
                successMessage ={this.state.success}

            />

        )
    }
}
export default LoginValidation

