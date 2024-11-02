import React, { Component } from "react";
import maison from "../images/Img1.jpeg";
class Home extends Component {
  render() {
    return (
      <div className="container ms-1 bg-slate-100 ">
        <div className="blog_first">
          <div className="blog_img text-center bg-blue-400 pt-20">
            <span>
              <img
                src={maison}
                alt="Image d'un immeuble "
                className=" w-full h-96 "
              />
            </span>
            <span
              className=" text-xl 
                         text-center  md:bg-blue-400 p-4 
                         text-white md:text-4xl md:font-bold rounded-2xl md:uppercase"
            >
              Location de maison et de vente de terrain
            </span>
          </div>
        </div>
        <div className="blog_second flex flex-col md:flex md:flex-row gap-3 md:p-10 items-center ">
          <div className="immobilier rounded-xl bg-slate-300 flex-col mt-8 gap-4 p-3">
            <p className="text-blue-800 uppercase text-3xl text-center pb-3">
              Comment acheter une maison
            </p>
            <span className="text-justify text-2xl/7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              consequatur eveniet ducimus, iure culpa id doloribus nesciunt
              fugiat repellendus aliquid porro dignissimos, consequuntur
              officia? Id ducimus voluptatem ipsam laudantium voluptas!
            </span>
          </div>

          <div className="terrain rounded-xl bg-slate-300 flex-col mt-8 gap-4 p-3">
            <p className="text-blue-800 uppercase text-3xl text-center pb-3">
              Comment acheter un terrain
            </p>
            <span className="text-justify text-2xl/7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              consequatur eveniet ducimus, iure culpa id doloribus nesciunt
              fugiat repellendus aliquid porro dignissimos, consequuntur
              officia? Id ducimus voluptatem ipsam laudantium voluptas!
            </span>
          </div>
        </div>
        <div className="blog_third">
          <div className="title text-center text-4xl text-blue-600">
            <h2>contactez-nous ❕</h2>
          </div>
          <div
            className="form flex flex-col justify-center 
                     items-center"
          >
            <form
              action=""
              className="flex-col gap-5 justify-center 
                         bg-blue-300 rounded-xl p-4"
            >

              <div className="civilite flex flex-col gap-2 text-2xl pb-2">
                <label htmlFor="name">
                  votre nationnalité
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="nom"
                  placeholder="Ivoirienne"
                  className="rounded-md text-center h-10"
                />
              </div>

              <div className="civilite flex flex-col gap-2 p-2 text-2xl">
                <label htmlFor="name">
                  votre nom et prénoms
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="nom"
                  placeholder="Songon Donald"
                  className="rounded-md text-center h-10"
                />
              </div>

              <div className="civilite flex flex-col gap-2 pb-2 text-2xl">
                <label htmlFor="name">
                  votre adress mail
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="mail"
                  name=""
                  id="nom"
                  placeholder="songon@gmail.com"
                  className="rounded-md text-center h-10"
                />
              </div>

              <div className="civilite flex flex-col gap-2 p-2 text-2xl">
                <label htmlFor="name">
                  votre numéro de telephone
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name=""
                  id="nom"
                  placeholder="+225 06832678"
                  className="rounded-md text-center h-10"
                />
              </div>

              <div className="civilite flex flex-col gap-2 pb-2 text-2xl">
                <label htmlFor="name">
                  Adress du bien à estimer
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="nom"
                  placeholder="Bondoukou/Zanzan"
                  className="rounded-md text-center h-10"
                />
              </div>
              <div className="civilite flex flex-col gap-2 pb-2 text-2xl">
                <label htmlFor="name">
                  Type de bien à estimer
                  <span className="text-red-600">*</span>
                </label>
                <select name="" id="" className="rounded-sm text-center h-10">
                  <option value="maison">Maison</option>
                  <option value="terrain">Terrain</option>
                  <option value="appartement">Appartement</option>
                  <option value="parkin">Parkin</option>
                </select>
              </div>
              <div className="btn">
                <button className="btn-primary">
                  confirmer ma demande de rendez-vous
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
