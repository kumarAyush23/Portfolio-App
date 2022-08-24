import React from  "react";
 import portfolio from "../assets/portfolio/Profile-image.jpg";
 import Game from "../assets/portfolio/Game-image.jpg";
import Newsify from "../assets/portfolio/Newsify-image.jpg";

 const Portfolio = () => {

 const handleClick1 = () =>{
   window.open('https://github.com/kumarAyush23/Newsify-App')
 }

 const handleClick2 = () =>{
   window.open('https://github.com/kumarAyush23/Portfolio-App')
 }
 const handleClick3 = () =>{
   window.open('https://github.com/kumarAyush23/Guess_My_Number')
 }
 
  return (
    <div
      name="portfolio"
      className="bg-neutral-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-amber-600 font-bold inline border-b-4 border-white">
            Portfolio
          </p>
          <p className="py-6 text-2xl">Check out some of my work right here</p>
        </div>

   <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            <div  className="shadow-md shadow-orange-900 rounded-lg">
              <img
                src={Newsify}
                alt=""
                className="rounded-md shadow-md shadow-orange-900 duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 font-bold duration-200 hover:scale-105">
                 Newsify-App
                </button>
                  <button onClick={handleClick1} className="w-1/2 px-6 bg-amber-600 font-bold rounded-lg py-3 m-4 duration-200 hover:scale-105">
                 Code
                </button> 
              </div>
            </div>

 <div  className="shadow-md shadow-orange-900 rounded-lg">
              <img
                src={portfolio}
                alt=""
                className="rounded-md shadow-md shadow-orange-900 duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 font-bold duration-200 hover:scale-105">
                 Portfolio-App
                </button>
                  <button onClick={handleClick2} className="w-1/2 px-6 bg-amber-600 font-bold rounded-lg py-3 m-4 duration-200 hover:scale-105">
                 Code
                </button> 
              </div>
            </div>

 <div  className="shadow-md shadow-orange-900 rounded-lg">
              <img
                src={Game}
                alt=""
                className="rounded-md shadow-md shadow-orange-900 duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 font-bold duration-200 hover:scale-105">
                 Guess_Number!
                </button>
                  <button onClick={handleClick3} className="w-1/2 px-6 bg-amber-600 font-bold rounded-lg py-3 m-4 duration-200 hover:scale-105">
                 Code
                </button> 
              </div>
            </div>


        </div>
      </div>
    </div>
  );
};

export default Portfolio;







  
