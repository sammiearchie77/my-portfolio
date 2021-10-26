import React from 'react';
// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";


export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <i className="material-icons inline-block mb-4" >memory</i>
                    <h1 className="sm:text-4xl text-3xl font-medium title-front text-white mb-4">
                        Skill &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        These are the skills I've learnt and I'm familiar with over the years. It's my utmost interest to be a proficient JavaScript developer and I'm still on that path! Learning never stops as long as you're a developer however I don't plan on learning much but understanding what I know and how to use them effectively and efficiently.
                    </p>
                </div>
                <div className="d-flex flex-wrap col-lg-12 mx-sm-auto mb-sm-2 mx-sm-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-50">
                            <div className="bg-success rounded d-flex p-2 items-center">
                                <i className='material-icons'>check_box</i>
                                <span className="badge text-success w-6 h-6 flex-shrink-0 mr-4">
                                    <span className="title-font font-medium text-white">
                                        {skill}
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
