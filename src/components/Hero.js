import { useState, useEffect } from "react";
import React from "react";

//import logo
import LogoDark from "../assets/img/logo-dark.svg";
import LogoWhite from "../assets/img/logo-white.svg";

//import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";

import GirlImg from "../assets/img/girl.png";

const Hero = () => {
  // theme state
  const [theme, setTheme] = useState('light');
  //handle theme switch

  useEffect(()=>{
    if(localStorage.getItem('theme')=== null){
      localStorage.setItem('theme', 'light')
    }
  },[])
  
  useEffect(()=>{
    const html = document.querySelector('html');
    if(localStorage.getItem('theme')=== 'dark'){
      setTheme('dark');
    }else{
      html.classList.remove('dark');
      setTheme('light')
    }
  },[theme])

  //handle switch
  const handleSwitch =()=> {
    if (localStorage.getItem('theme') === 'light'){
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }else{
      setTheme('light');
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <section className={`${ theme === 'light' ? 'bg-heroLight' : 'bg-heroDark'} min-h-[740px] w-full  bg-cover bg-center bg-no-repeat overflow-hidden tranisition-all duration-300`}>
      <div className="container mx-auto px-4 lg:px-0">
        <header className="flex justify-between items-center py-8">
        <div>
        <a href="/">
          {theme === 'light' ? (<img src={LogoDark} alt="drklogo"/>):(<img src={LogoWhite} alt="lightlogo"/>)} 
        </a>
        </div>
      
        <button onClick={handleSwitch} className="bg-accent p-4 text-white rounded-full w-12 h-12 flex justify-center items-center ">
          {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
        </button>
        </header>
        {/* text */}
        <div className="flex ">
        <div  className="flex flex-col items-start gap-y-10 py-20">
          <div>
            <h1 className={`${theme === 'light' ? 'text-primary':'text-white'} text-5xl font-bold mb-6 leading-[60px]`}>Online Accounting <br /><span className="text-accent">Fast & Uncomplicated</span></h1>
            <p className={`${theme === 'light' ? 'text-primary':'text-white'} font-light m max-w-[597px]`}>We specialize in small businesses. Our goals is to eliminate bureaucracy, crreatig a modrn relationship between your company and the accountant.</p>
          </div>
          {/* itm */}
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-2 items-center">
              <BsCheck className={`${theme === 'light' ? 'bg-accent/10 text-accent': 'bg-accent/70 text-white'} rounded-full h-[20px] w-[20px]`}/>
              <p className={`${theme === 'light' ? 'text-primary':'text-white'} text-base`}>Have your accounting 100% Online.</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <BsCheck className={`${theme === 'light' ? 'bg-accent/10 text-accent': 'bg-accent/70 text-white'} rounded-full h-[20px] w-[20px]`}/>
              <p className={`${theme === 'light' ? 'text-primary':'text-white'} text-base`}>Save with Plans starting at $10/month. </p>
            </div>
          </div>
          <button className="btn">Discover our Plans</button>
          </div>
          <div className="hidden lg:flex">
            <img src={GirlImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
