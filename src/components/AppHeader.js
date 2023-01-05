
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AppHeader = () => {

    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="border-solid border-b-2 border-gray">
            <nav className="relative container mx-auto p-5">
                <div className="flex container flex flex-col items-center justify-between drop-shadow-md md:flex-row">
                    <div className="pt-2">
                        <h1 className="font-bold text-4xl">
                            Keyboard Site
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <a href="#">List</a>
                        <a href="#">Contact Us</a>
                    </div>
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
                                <img src={require("../img/icon-facebook.svg")} alt="" />
                            </a>
                            <a href="#">
                                <img src={require("../img/icon-instagram.svg")} alt="" />
                            </a>
                            <a href="#">
                                <img src={require("../img/icon-pinterest.svg")} alt="" />
                            </a>
                            <a href="#">
                                <img src={require("../img/icon-twitter.svg")} alt="" />
                            </a>
                            <a href="#">
                                <img src={require("../img/icon-youtube.svg")} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-around space-x-32">
                        <div className="flex flex-col space-y-3">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">List</a>
                            <a href="#">Contact Us</a>
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