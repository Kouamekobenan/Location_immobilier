import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div
          className="container flex
        flex-col gap-4 bg-slate-300 md:flex md:flex-row justify-around items-center 
        p-4 border-t-8 border-white"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-blue-500 uppercase font-bold">
              Nos coordonnées{" "}
            </h2>
            <span className="text-2xl">email: mail@gmail.com</span>
            <span className="text-2xl">tel:+2250709985677</span>
            <span className="text-2xl">Nous somme a bondoukou lycée </span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-blue-500 uppercase font-bold">
              Nos activités
            </h2>
            <div className="flex flex-col gap-4 text-2xl  ">
              <span>✔ vente de terrian</span>
              <span>✔ Location de maison</span>
              <span>✔ Location des departement</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
