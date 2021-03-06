import React, { Component } from "react";
import Input from "../components/Input"
import { Card, Typography, Button, CardContent } from '@material-ui/core/';
import UserService from "../services/UserService";
// import { Redirect } from "react-router-dom"

var userService = new UserService();

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      status: false,
      message: ''
    }
    this.getDataFromInput = this.getDataFromInput.bind(this);

  }

  getDataFromInput(event,data) {
    this.setState({
      [event.target.name]: data
    });
    // console.log();
  }

  handleLoginClick(){
    this.props.history.push('/login');
  }

  /**
   * handle the click of button event and send the email to backend
   */
  handleClick(event) {
    userService.forgotPassword({ email: this.state.email }).then(res => {
      console.log(res);

      if (res.status === 200) {
        this.setState(
          {
            status: true,
            message: "We couldnt find a valid user with that email address please check the email address you entered"
          });
      }
      else if (res.status === 201) {
        this.setState(
          {
            status: true,
            message: "We have emailed you the password reset link to your registered email address"
          });
      }
    }).catch();
  }

  render() {
    if (localStorage.getItem('fundootoken') !== null) {
      this.props.history.push("/login");
    }

    return (

      <div>
        <Card id='logincard'>
          <div className='label-forgetpass' >
            <div className='logo'>
              <img src={require('../assets/images/logo.svg')} alt="" />
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="0" x1="860" y1="525.97" x2="842.73" y2="507.21" gradientUnits="userSpaceOnUse"><stop stop-color="#ffee97" /><stop offset="1" stop-color="#ffe76b" /></linearGradient><linearGradient id="1" x1="858.81" y1="529.48" x2="860.02" y2="517.32" gradientUnits="userSpaceOnUse"><stop stop-color="#fed45b" /><stop offset="1" stop-color="#ffcc54" /></linearGradient><linearGradient id="2" x1="859.24" y1="526.27" x2="864.14" y2="531.15" gradientUnits="userSpaceOnUse"><stop stop-color="#f0a23a" /><stop offset="1" stop-color="#fde46a" /></linearGradient></defs><g transform="matrix(.80688 0 0 .80688-209.84-416.47)"><g transform="matrix(1.61686 0 0 1.61686-1083.5-289.41)"><rect width="35.04" height="34.793" x="831.91" y="499.13" fill="url(#2)" rx="1.5" /><g fill-rule="evenodd"><path d="m831.8 501.31v30.909c0 0 .292 1.723 2.045 1.723h13c11.65-2.057 18.553-8.41 20.08-19.625v-13.376c.084-1.866-1.563-1.952-1.563-1.952l-31.397.11c-2.337-.161-2.167 2.21-2.167 2.21" fill="url(#0)" /><path d="m846.07 534.25c6.656-1.385 10.159-5.085 12.416-9.509 5.994-1.741 7.526-6.272 8.402-11.214.128 12.622-9.624 18.834-20.819 20.723" opacity=".9" fill="url(#1)" /></g></g><g stroke-width="2.051" fill="#efac50" transform="matrix(.06596 0 0 .06596 273.12 530.27)" stroke="#cb8034" stroke-linejoin="round" stroke-linecap="round"><path d="m306.55 367.59h-121.54c-9.04 0-16.382 7.338-16.382 16.385 0 9.05 7.341 16.384 16.382 16.384h121.54c9.04 0 16.389-7.334 16.389-16.384 0-9.05-7.348-16.385-16.389-16.385z" /><path d="m213.92 464.37v8.926c0 10.08 8.157 18.242 18.239 18.242h27.23c10.06 0 18.239-8.166 18.239-18.242v-8.926c20.642-1.467 36.981-18.498 36.981-39.506h-137.69c.0001 21.01 16.357 38.04 36.997 39.506z" /><path d="m245.78 0c-90.69 0-164.22 73.52-164.22 164.21 0 38.27 13.164 73.4 35.15 101.29 19.444 24.647 37.874 51.592 53.76 78.69h150.58c16.05-27.353 34.15-53.793 53.78-78.71 21.968-27.878 35.14-63.01 35.14-101.27 0-90.69-73.52-164.21-164.2-164.21" /></g></g></svg> */}
            </div>
          </div>
          <CardContent>
            {this.state.status ?
              (<div>
                <Typography variant="h6" component="p" >
                  {this.state.message}
                </Typography>
                <Button fullWidth color="primary" type='submit' onClick={this.handleLoginClick.bind(this)} >
                 Login
              </Button>
              </div>)
              : (<div>
                <Typography variant="h5" component="h2" id='login-text'>
                  Forgot Password
      </Typography>
                <div>
                  <Input name='email' type={'Email'} placeholder={'Enter Your Email'} label={'Email'} onChange={this.getDataFromInput} />
                </div>
                <div id='login-btn-div'>
                  <Button variant="contained" color="primary" type='submit' onClick={this.handleClick.bind(this)} className='login-btn'>
                    Submit
              </Button>
                </div>
                <span id='right-text'><a href="/register">Sign Up</a></span>
                <span id='left-text' ><a href="/login">Login</a></span>
              </div>)
            }
          </CardContent>
        </Card>
      </div>

    );
  }
}