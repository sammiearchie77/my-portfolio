import React from 'react';
// import { TerminalIcon, UserIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                {/* <UserIcon className="w-10 inline-block mb-4" /> */}
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Client Testimonials
                </h1>
                <div className="d-flex flex-wrap ">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="p-1 col-lg-6 ">
                         <div className={`card col-lg-10`}>
                            <div className="d-flex text-secondary bg-gray-800 opacity-50 rounded">
                                    {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
                                    <p className="font-weight-bold py-4">
                                        {testimonial.quote}
                                    </p>
                                    <div className="">
                                        <img 
                                            alt="testimonial"
                                            src={testimonial.image}
                                            className="w-75 mt-2 rounded"
                                        />
                                        <span className="flex-grow d-flex flex-column">
                                            <span className="title-font font-medium text-danger font-weight-bolder">
                                                {testimonial.name}
                                            </span>
                                            <span className="font-weight-bolder text-dark">
                                                {testimonial.company}
                                            </span>
                                            {/* <span className="text-gray-500 text-sm uppercase">
                                                {testimonial.phone}
                                            </span> */}
                                        </span>
                                    </div>
                                </div>
                         </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}