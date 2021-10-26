import React from 'react'
import image from '../components/images/sam1.jpg'

const About = () => {
    return (
        <section id="about">
        <div className="container mx-auto d-flex px-5 py-5 flex-md-row  items-center">
            <div className="flex-lg-grow col-lg-6 lg:pr-24 md:pr-16 flex md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h3 className="text-white">
                    Hi, I'm Samuel .C. Archibong <br />
               <span className="text-primary">Nice to meet you!.</span>
          </h3>
                <p className="mb-8 leading-relaxed">
                Since beginning my journey as a freelance developer 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.</p>
                <p>I'm quietly confident, naturally curious, and perpetually working on improving my chops, one coding problem at a time.
                </p>
            </div>
            <div className="col-lg-6 w-100">
                <img
                    className="w-100 rounded-circle h-100"
                    alt="samuel"
                    src={image}
                />
            </div>
        </div>
    </section>
    )
}

export default About
