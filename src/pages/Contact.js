import React from 'react';
import { useState } from 'react';
import '../styles/bootstrap.min.css'

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const encode = data => {
        return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type" : "application/x-www-form-urlencoded" },
            body: encode({ "Form-name" : "contact", name, email, message }),
        })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto d-flex ">
                <div className="col-lg-6 overflow-hidden m;mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="95%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/search?q=its+near+the+college+of+health+science,+amassoma&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="relative d-flex flex-fill py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                        </h2>
                            <p className="mt-1">
                                Apartment 33 Swagville. <br />
                            Wilberforce Island - Amassoma, Bayelsa
                        </p>
                        </div>
                        <div className="lg:w-1//2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a href="tel" className="text-indigo-400 leading-relaxed">
                                chinonsosamuel29@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">
                                +2348103155891<br /> +2348119959625
                            </p>
                        </div>
                    </div>
                </div>
                <form
                    netlify="true"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="col-lg-6 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me
                        </h2>
                    <p className="leading-relaxed mb-5">
                        Need to showcase your business solution to the world? <br />
                        I'm open to Freelancing, Partime and Full-time jobs.
                        </p>
                    <div className="relatve mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                            </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-100 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relatve mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Email
                            </label>
                        <input
                            id="email"
                            name="email"
                            className="w-100 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-secondary">
                            Message
                            </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-100 bg-light rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-lg w-100 text-white bg-danger hover:bg-blue-400 hover:text-white text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}
