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
                    errors:<p>Please Enter Your Username</p>,
                    success:''
                })
            }else if(this.state.username.length < 3){
                this.setState({
                    errors:<p>please your username is too short</p>,
                    success:''
                })
            }else if(Number(this.state.username) ){
                this.setState({
                    errors:<p>Please username is not a number</p>
                    ,success:''
                })
            }
            else if(this.state.password === ''){
                this.setState({
                    errors:<p>Please Enter Your Password </p>,
                    success:''
                })
            }else if(this.state.password.length < 8){
                this.setState({
                    errors: <p>Your password is too weak</p>,
                    success:''
                })
            }

            else{
                this.setState({
                    success:<p>Thanks for submitting</p>,
                    errors:''
                })
            }

        }
        /*
          email patterns 
          ^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$
        */

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

