import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
import axios from 'axios';

 class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
        }
    }

     setValue =(event)=>{

        if (event.target.attributes.id.value==="email") {
            this.setState({
                email:event.target.value
            })
        } else {
            this.setState({
                password:event.target.value
            })
        }
       
    }
    loginHandle= async ()=>{

      try {
        await axios.post("/api/user/login",{
          email:this.state.email,
          password:this.state.password
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
          }else if(res.data==="Login Successful"){
            alert(res.data)
            this.props.history.push("/home")
          }else
          {
          alert(res.data)
          }
        }
      })
      } catch (error) {
        console.log(error)
      }
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
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>
                <form className="mx-1 mx-md-4">
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
                      <label className="form-label" htmlFor="email">Your Email</label>
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

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button 
                    type="button" 
                    className="btn btn-primary btn-lg"
                    onClick={this.loginHandle}
                    >Login</button>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <label className="form-check-label" htmlFor="form2Example3">
                    Don't have an Account. Click to 
                    <Link to="/">
                    <a href="#!">Sign Up</a>
                    </Link>
                    .
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

export default withRouter(Login)