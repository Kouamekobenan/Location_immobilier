import React, { Component, useState } from "react";
import appart from "../images/appart1.jpeg";
import appart1 from "../images/appart2.jpeg";
import appart2 from "../images/appart2.jpeg";
import appart3 from "../images/appart3.jpeg";
import residence from "../images/resid1.jpeg";
import resid2 from "../images/resid2.jpeg";
import resid3 from "../images/m1.jpeg";
import m2 from "../images/m2.jpeg";
import m3 from "../images/m3.jpeg";
import pagination from "../component/Pagination"
class immobilier extends Component {
  
  render() {
    const data = [
      {
        id: 1,
        img: residence,
        nom: "Residence",
        prix: 2509,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 2,
        img: resid2,
        nom: "Residence",
        prix: 2509,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 3,
        img: resid3,
        nom: "Residence",
        prix: 2509,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 3,
        img: appart,
        nom: "Appartement",
        prix: 45000,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 4,
        img: appart1,
        nom: "Appartement",
        prix: 45800,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 5,
        img: appart2,
        nom: "Appartement",
        prix: 60000,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 6,
        img: appart3,
        nom: "Appartement",
        prix: 2509,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 7,
        img: m2,
        nom: "Maison simple",
        prix: 10000,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 8,
        img: m2,
        nom: "Maison simple",
        prix: 10000,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 9,
        img: m3,
        nom: "Maison simple",
        prix: 2509,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 10,
        img: resid3,
        nom: "Residence",
        prix: 2509,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 11,
        img: appart2,
        nom: "Appartement",
        prix: 70000,
        lieu: "Quatier Labaya",
        caract: "Deux chambres salon une douche",
      },
      {
        id: 12,
        img: appart3,
        nom: "appartement",
        prix: 30000,
        lieu: "Quatier lycée",
        caract: "Deux chambres salon une douche et une cusine",
      },
      {
        id: 13,
        img: m2,
        nom: "Maison simple",
        prix: 15000,
        lieu: "Quatier zanzan",
        caract: "Maison avec douche",
      },
    ];

    return (
      <div className="container">
        <div className="main">
          <div className="main_img bg-blue-300  pt-20">
            <img
              src={appart}
              alt="mon image d'appartement"
              className="w-full h-96"
            />
          </div>
          <div
            className="absolute p-1 top-1/4 md:top-1/3 text-center right-1/4
                     bg-blue-950 rounded-lg font-serif  md:p-4 left-1/4 text-white "
          >
            <h2 className=" text-xl md:text-3xl uppercase">
              Vente immobilier, location de maison chez Intelect certain
            </h2>
          </div>
        </div>
        <div className="category ">
          <div className="title text-center pt-4 ">
            <h2 className="text-3xl font-bold font-mono ">Les catégories</h2>
          </div>
          <div
            className="blog_cat flex flex-col gap-4 md:flex md:flex-row md:gap-4
                            pt-4 md:justify-center"
          >
            <div className="appartement bg-slate-400 rounded-lg p-4 ">
              <div className="imgs">
                <img
                  src={appart2}
                  alt="image departement "
                  className="w-full h-60"
                />
              </div>
              <div className="coodr flex flex-col justify-center text-center">
                <span>
                  <h2 className="uppercase text-2xl font-bold text-center text-blue-800">
                    Appartement
                  </h2>
                </span>
                <button className="btn-primary">
                  voir les apartements disponible
                </button>
              </div>
            </div>
            <div className="residence bg-slate-400 rounded-lg p-4 ">
              <div className="imgs">
                <img
                  src={residence}
                  alt="image résidence "
                  className="w-full h-60"
                />
              </div>
              <div className="coodr flex flex-col justify-center text-center">
                <span>
                  <h2 className="uppercase text-2xl text-center font-bold text-blue-800">
                    residence
                  </h2>
                </span>
                <button className="btn-primary">
                  voir les residences disponible
                </button>
              </div>
            </div>
            <div
              className="chambre 
                        bg-slate-400 rounded-lg p-4 "
            >
              <div className="imgs">
                <img
                  src={m3}
                  alt="image departement "
                  className="w-full h-60"
                />
              </div>
              <div className="coodr flex flex-col justify-center text-center">
                <span>
                  <h2 className="uppercase text-2xl font-bold text-center text-blue-800">
                    Chambre simple{" "}
                  </h2>
                </span>

                <button className="btn-primary">
                  voir les chambres disponible
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog p-4">
          <div className="recherche flex justify-center">
            <input
              type="text"
              placeholder="faites vos recherche ici"
              className="border-black border-solid bg-slate-200 md:w-1/2 h-8 p-6 
              md:text-2xl"
            />
            <button className="bg-blue-400 pl-4 pr-4 md:text-2xl text-white">
              Recherche
            </button>
          </div>
          <div className="blog_title p-6">
            <h2 className="text-3xl text-center font-bold">Mon blog</h2>
          </div>
          <div
            className="content_blog mt-4 flex flex-col
                        gap-4 md:grid md:grid-cols-3"
          >
            {data.map((todo) => (
              <div className="p-4 bg-slate-100 rounded-lg">
                <div className="im">
                  <div className="w-full">
                    <img src={todo.img} alt="" className="w-full h-60" />
                  </div>
                  <div
                    className="info flex flex-col justify-center 
                                            text-center gap-2 text-2xl pt-2 font-serif"
                  >
                    <span className="bg-slate-200 font-bold p-2 rounded-lg">
                      {todo.nom}
                    </span>
                    <span className="font-bold text-blue-600">
                      {todo.prix} Fcfa
                    </span>
                    <span>{todo.lieu}</span>
                    <span>{todo.caract}</span>
                  </div>
                  <div className="btn flex flex-col justify-center">
                    <button
                      className="bg-blue-100 hover:bg-slate-300 h-14 md:h-10 p-1 text-gray-700
                                                    mt-2 text-2xl text-center font-serif font-bold
                                                        transform motion-safe:hover:scale-110 duration-500"
                    >
                      commander le meuble
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination flex gap-4 md:justify-center pt-3">
            <span className="border-2 cursor-pointer border-black p-2">1</span>
            <span className="border-2 cursor-pointer border-black p-2">2</span>
            <span className="border-2 cursor-pointer border-black p-2">3</span>
            <span className="border-2 cursor-pointer border-black p-2">4</span>
          </div>
        </div>
      </div>
    );
  }
}

export default immobilier;
