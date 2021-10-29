import React from 'react';
import style from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <header className={`${style.nav}`}>
            <div className="container mx-auto d-flex flex-wrap p-3 flex-sm-column flex-md-row items-center">
                <div className="mb-lg-2 mb-md-0">
                    <a href="/" className="ml-3 ">
                        Coding Gee|
                    </a>
                </div>
                <nav className="mr-md-auto ml-md-4 py-md-1 pl-md-4 border-md-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a 
                        href="./about"
                        className="mr-5">
                            About
                    </a>
                    <a 
                        href="./projects"
                        className="mr-5">
                            Past Work
                    </a>
                    <a 
                        href="./skills"
                        className="mr-5">
                            Skills
                    </a>
                    <a 
                        href="./testimonials"
                        className="mr-5">
                            Testimonials
                    </a>
                    <a 
                        href="./profile"
                        className="mr-5">
                            Profile
                    </a>
                </nav>
                <a
                    href="./contact"
                    className={`inline-flex items-center text-white bg-danger fw-bolder border-0 py-1 px-3 focus:outline-none hover:primary rounded mt-4 mt-md-0`}>
                        Hire Me
                        {/* <NavLinkrrowRightIcon className="w-4 h-4 ml-1" /> */}
                    </a>
            </div>
        </header>
    )
}
