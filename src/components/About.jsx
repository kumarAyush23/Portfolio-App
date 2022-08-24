import React from "react";

const About = () => {
  return (
    <div
      name="about"
    //   className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    className="w-full h-screen bg-neutral-100"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-amber-600 font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

    <p className="text-2xl text-gray-800 text-justify font-bold mt-20">
         Hi, My name is Ayush Kumar. I am 21 year old recently graduated from Presidency University,
         Bengaluru in Bachelor of Computer Application(B.C.A).I have good 
        coding skills and also a 5th star coder at HackerRank. I am also a Winner of 
        1 Equity and F&O in 60 day challenge at Zerodha. In the next few decades, India
        will rise as a leader of the world with the maximum young workforce, but for 
        this, we need some good pilots who can take us through this and I really want
        to be a part of such a great workforce under the guidance of good pilots. When
        I am not working I trade the Options through Bombay Stock Exchange(B.S.E) and also
        like to read the Balancesheet of different Companies.
        </p>
      </div>
    </div>
  );
};

export default About;