import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {withRouter } from 'react-router-dom'


class RegisterPage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username:"",
       email:"",
       password:""
    }
  }



  setValue =(event)=>{
    let attributeName=event.target.attributes.id.value;
    if (attributeName==="email") {
        this.setState({
            email:event.target.value
        })
    } else if (attributeName==="username") {
      this.setState({
        username:event.target.value
    })
    }else
     {
        this.setState({
            password:event.target.value
        })
    }
   
}
  handleRegister=async ()=>{

    const {username,email,password}=this.state
    await axios.post("/api/user/register",{
      username,
      email,
      password
    }
    ,{
      Headers:{
        "content-type":"application/json",
      }
  })
  .then((res)=>{

    if(res.status===200){
      if(res.data.details){
        const error=res.data.details.map((val)=>{return val.message});
        alert(error)
      }else if(res.data==="Email Already Exist"){
        alert("Email Already Exist!")
      }else{
        alert("User created Successfully")
        this.props.history.push("/login")
      }
    }else{
      alert("there is something wrong with the connection")
    }
  })
  .catch((err)=>{
    console.log(err)
    alert("Cant Create New User!")
  })
}
  
    render() {
        return (
           <div>
               <section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input 
                      type="text" 
                      id="username" 
                      className="form-control" 
                      value={this.state.username}
                      onChange={this.setValue}
                      />
                      <label className="form-label" htmlFor="form3Example1c">Your Username</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input 
                      type="email" 
                      id="email" 
                      className="form-control" 
                      value={this.state.email}
                      onChange={this.setValue}
                      />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input 
                      type="password" 
                      id="password" 
                      className="form-control" 
                      value={this.state.password}
                      onChange={this.setValue}
                      
                      />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div> */}

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button 
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={this.handleRegister}
                    >Register</button>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <label className="form-check-label" htmlFor="form2Example3">
                    Already have an Account. Click to
                     <Link to="/login">
                     <a 
                     href="#!">Sign In
                     </a>.
                     </Link>
                    </label>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

           </div>
        )
    }
}

export default withRouter(RegisterPage)