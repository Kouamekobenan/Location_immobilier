import React from 'react'
import profile from '../images/profile (1).jpg'
import couverture from '../images/profile (2).jpg'

function Profile() {
  return (
    <div className="container ">
        <div className="blog">
            <div className="profile__couverture w-full">
                <div className="relative">
                    <img src={couverture} alt="ma photo de profile" className="w-full" />
                    <div 
                    className="absolute   h-full flex flex-col justify-end
                       cursor-pointer top-0 left-0
                      text-end ">
                   <span className=" hover:bg-slate-300 p-2 rounded-full text-3xl bg-blue-500">📷</span> 
                    </div>
                </div>
                
                <div className="photo__profile  text-center flex 
                flex-col justify-center items-center mb-48 md:mb-40 ">
                    
                <div className="absolute top-20 md:top-2/3">
                   <div className="">
                    <img src={profile} alt="ma photo de couverture" 
                    className=" h-56  w-56 md:h-64 md:w-64 rounded-full "/>
                    </div> 
                    <div 
                    className="absolute bg-blue-500 cursor-pointer top-48 
                    text-end items-end hover:bg-slate-300 p-2 rounded-full text-3xl ">
                    📷</div>
                </div>
            </div>
            </div>
            <div className="posts flex flex-col gap-4">
                <div className="text-2xl font-serif text-center font-bold">JACKIE JEAN</div>
                <div className="">
            <button 
            className="w-full bg-blue-400 hover:bg-blue-200 cursor-pointer h-10 text-white font-bold md:text-2xl">
            posts</button></div>
            <div className="bg-blue-100 h-10 w-full cursor-pointer hover:bg-blue-50 flex 
            justify-between  md:text-2xl font-serif pl-3 pr-3 items-center">
               <span>Tableau de bord</span> 
               <span>📊</span> 
                </div>
            <div className="bg-blue-100 h-10 w-full cursor-pointer hover:bg-blue-50
            flex  justify-between items-center md:text-2xl font-serif pl-3 pr-3">
                <span>créer un noveau post</span>
                <span>💻</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Profile