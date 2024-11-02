import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="containe h-4 top-8 py-28 mb-96 p-6 flex flex-col items-center">
      <div className="form bg-blue-300 ">
        <div className="login_tit h-32 bg-blue-700 w-full rounded-b-full
        flex flex-col justify-center text-center 
            items-center text-3xl font-bold text-white font-serif">
            <section className="h-9 w-6 rounded-full bg-white">
            </section>
            <section className="flex flex-col justify-center text-center 
            items-center text-3xl font-bold text-white font-serif">
              Login</section>
        </div>
        <div className="bg flex flex-col gap-4 p-4">
          <input type="mail" placeholder="✉ entrez votre email "
          className="md:w-96 h-11 pl-3"/>
          <input type="password" placeholder="🧷entrez votre mot de passe "
          className="md:w-96 h-11 pl-3"/>
           <button className="btn-primary">connectez-vous</button>
           <aside className="flex flex-col gap-6 justify-center">
            <small className="text-2xl/4 md:text-2xl/3 font-thin"> Avez-vous un compte ? si non:</small>
            <small>
              <Link to="/register">
              <button className=" text-2xl/3 text-center text-blue-50 
              hover:text-red-600
              font-semibold">
              creer un compte</button>
            </Link> 
            </small>
           </aside>
          
        </div>
      </div>
    </div>
  )
}

export default Login