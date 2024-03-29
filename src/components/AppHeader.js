import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

import { default as facebook } from "../img/icon-facebook.svg";
import { default as instagram } from "../img/icon-instagram.svg";
import { default as pinterest } from "../img/icon-pinterest.svg";
import { default as twitter } from "../img/icon-twitter.svg";
import { default as youtube } from "../img/icon-youtube.svg";


const AppHeader = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="border-solid border-b-2 border-gray">
            <nav className="relative container mx-auto p-5">
                <div className="container flex flex-row items-center justify-between drop-shadow-md ">
                    <div className="pt-2">
                        <h1 className="font-bold text-4xl">
                            Keyboard Site
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 flex-row hidden md:block">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/list">List</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer space-y-2 md:hidden">
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>
                    
                </div>
                <div className={isOpen ? "flex flex-col absolute items-center self-end bg-white py-8 mt-10 left-6 right-6 space-y-6 md:hidden sm:w-auto sm:self-center drop-shadow-md" : "hidden"}>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/list">List</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
            </nav>
        </div>

        <Outlet />

        <section id="footer">
            <footer className="bg-slate-400">
                <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                    <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                        <div className="mx-auto my-6 text-center md:hidden">
                            Copyright &copy; 2022, All Rights Reserved
                        </div>
    
                        <div className="flex justify-center space-x-4">
                            <a href="#">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="#">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="#">
                                <img src={pinterest} alt="" />
                            </a>
                            <a href="#">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="#">
                                <img src={youtube} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-around space-x-32">
                        <div className="flex flex-col space-y-3">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/list">List</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
    
                    <div className="flex flex-col justify-between">
                        <form action="">
                            <div className="flex space-x-3">
                                <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Update in your inbox"/>
                                <button className="px-6 py-2 rounded-full focus:outline-none">
                                    Go
                                </button>
                            </div>
                        </form>
                        <div className="hidden md:block">
                            Copyright &copy; 2022, All Rights Reserved
                        </div>
                    </div>
                </div>
    
            </footer>
        </section>
      </div>
    )
}

export default AppHeader;