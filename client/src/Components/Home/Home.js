import axios from 'axios'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

 class Home extends Component {

    handleClick=async ()=>{
        try {
            const response=await fetch("/api/user/allUser", {
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json",
                },
                credentials:"include"
            })
            const data=await response.json()
        console.log("[][][][front",data)
        this.props.history.push("/about")


        } catch (error) {
            console.log(error)
        this.props.history.push("/login")

        }

//        await  axios.get("/api/user/val" ,{

//             // headers:{
//             // accept:"application/json",
//             // "content-type":"application/json"
//             // },
//             withCredentials: true
//         })
//         .then((res)=>{
//             console.log("[][][][][]Home",res)
//         })
//         .catch((error)=>{
// console.log(error)
//         })


    }

    render() {
        return (
           <div><button onClick={this.handleClick}>Redirect to About Component</button></div>
        )
    }
}

export default withRouter(Home)
