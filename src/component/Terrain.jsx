import React, { Component } from 'react'
import t1 from "../images/t1.jpeg"
import t2 from "../images/t2.jpeg"
import t3 from "../images/t3.jpeg"
import t4 from "../images/t4.jpeg"
import t5 from "../images/t5.jpeg"
import t6 from "../images/t6.jpeg"
import profile from '../images/profile (1).jpg'

export class Terrain extends Component {
  render() {
    const data=[
      {
        id:1, 
        img:t1,
        devi:"100m carré",
        prix:500000,
        situe:"bondoukou ",
        quatier:"zanzan"
      },
      {
        id:2, 
        img:t2,
        devi:"100m carré",
        prix:500000,
        situe:"bondoukou ",
        quatier:"Lycée"
      },
      {
        id:3, 
        img:t3,
        devi:"100m carré",
        prix:500000,
        situe:"bondoukou ",
        quatier:"Saint Odile"
      },
      {
        id:4, 
        img:t4,
        devi:"100m carré",
         prix:500000,
        situe:"bondoukou ",
        quatier:"Labaya"
      },
      {
        id:5, 
        img:t5,
        devi:"100m carré",
        prix:500000,
        situe:"bondoukou ",
        quatier:"zanzan"
      },
      {
        id:6, 
        img:t6,
        devi:"100m carré",
        prix:500000,
        situe:"bondoukou ",
        quatier:"Dozosso"
      }
    ]
    return (
      <div>
        <div className="container">
          <div className="content pb-4 pt-20">
            <div className="">
                 <img src={t1} alt="" className="h-96 w-full opacity-50" />
            </div>
            <div
            className="absolute top-1/3 text-center right-1/4
                     bg-blue-950 rounded-lg font-serif  p-4 left-1/4 text-white "
          >
            <h2 className=" text-xl md:text-3xl uppercase">
              Vente de terrain chez Intelect certain
            </h2>
          </div>
          </div>

          <div className="recherche flex justify-center">
            <input type="text" name="" id=""
            className="border-black border-solid bg-slate-200 md:w-1/2 h-8 p-6 md:text-2xl" 
            placeholder="faite vos recherche ici "/>
            <button className="bg-blue-400 pl-4 pr-4 md:text-2xl text-white">
              Reherche</button>
          </div>
          <div className="blog pt-4">
            <div className="text-3xl font-serif font-bold text-center">Mon blog </div>
            <div className="blog_content flex flex-col gap-4 md:grid 
                md:grid-cols-3 md:gap-4 p-4">
              {
                data.map((todo)=>(<div className="bg-slate-200 rounded-lg p-4"  >
                  <div className=""><img src={todo.img} alt="Image d'un térrain" className="w-full h-60" /></div>
                  <div className="info flex flex-col justify-center text-center font-serif text-2xl">
                    <span>{todo.nom}</span>
                    <span>{todo.devi}</span>
                    <span className="font-bold text-blue-600">{todo.prix}</span>
                    <span>{todo.situe}</span>
                    <span className="flex gap-2 justify-center">
                      <small>situé au </small>
                      <small className="font-bold">
                        {todo.quatier}
                      </small>
                      </span>
                  </div>
                  <div className="btn flex flex-col justify-center">
                    <button
                      className="bg-blue-100 hover:bg-slate-300 h-14 md:h-10 p-1 text-gray-700
                                                    mt-2 text-2xl text-center font-serif font-bold
                                                        transform motion-safe:hover:scale-110 duration-500"
                    >
                      Acheter un terrain
                    </button>
                  </div>
                  <div className="profile flex gap-3 mt-4">
                    <article>
                      <img src={profile} alt="photo de profile" 
                      className="rounded-full w-20 h-20 border-x-4 border-blue-500"/>
                    </article>
                    <article className="flex flex-col gap-3 justify-center">
                      <span className="uppercase md:text-xl font-serif">zana albert</span>
                      <span className=" md:text-xl font-serif">Il y'a 2heure</span>
                    </article>
                  </div>
                </div>
                ))}

            <div className="pagination flex gap-4 md:justify-center pt-3">
            <span className="border-2 cursor-pointer border-black p-2">1</span>
            <span className="border-2 cursor-pointer border-black p-2">2</span>
            <span className="border-2 cursor-pointer border-black p-2">3</span>
            <span className="border-2 cursor-pointer border-black p-2">4</span>
          </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Terrain
