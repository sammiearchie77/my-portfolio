import React from 'react';
import style from '../styles/navbar.module.css'
import { Link } from '@mui/material'
import logo from '../components/images/myavatar.png'
// import { ArrowRightIcon } from '@heroicons/react/solid';

export default function Navbar() {
    return (
        <header className={`${style.nav}`}>
            <div className="container mx-auto d-flex flex-wrap p-3 flex-sm-column flex-md-row items-center">
                <div className="mb-lg-2 mb-md-0">
                    <Link href="/" className="ml-3 ">
                        <img className={`rounded`} src={logo} alt={`logo`} width={30} />
                    </Link>
                </div>
                <nav className="mr-md-auto ml-md-4 py-md-1 pl-md-4 border-md-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <Link 
                        href="./about"
                        className="mr-5">
                            About
                    </Link>
                    <Link 
                        href="./projects"
                        className="mr-5">
                            Past Work
                    </Link>
                    <Link 
                        href="./skills"
                        className="mr-5">
                            Skills
                    </Link>
                    <Link 
                        href="./testimonials"
                        className="mr-5">
                            Testimonials
                    </Link>
                    <Link 
                        href="./profile"
                        className="mr-5">
                            Profile
                    </Link>
                </nav>
                <Link
                    href="./contact"
                    className={`inline-flex items-center text-white bg-danger fw-bolder border-0 py-1 px-3 focus:outline-none hover:primary rounded mt-4 mt-md-0`}>
                        Hire Me
                    </Link>
            </div>
        </header>
    )
}
