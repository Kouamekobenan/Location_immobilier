import React, { Component } from 'react'
import {Link} from "react-router-dom"

export class Deshbord extends Component {
  render() {
    return (
      <div className="container p-6 top-1/2 mt-10">
        <h2>Dashbord</h2>
        <Link to="/">
        <button className="w-1/4 bg-blue-600 h-20 
         text-white text-5xl ">
        Accueil</button>
        </Link>
        
      </div>
    )
  }
}

export default Deshbord
