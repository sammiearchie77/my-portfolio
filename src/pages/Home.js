import React from 'react'
import style from '../styles/home.module.css'
import image from '../components/images/slack.jpg'
const Home = () => {
    return (
        <div className={`container ${style.home}`}>
            <div className={`row`}>
                <div className={`col-lg-6 ${style.main__text}`}>
                    <h2>Hi, I'm Samuel Chinonso Archibong</h2>
                    <span className={`text-danger`}>I am a <span>Front End Developer</span></span>
                    <p className={`text-white`}>Learning has always been a thing of interest to me but when it comes to coding, it's another dimension. 
                        The ability to build anything that runs on the Web where everyone anywhere can have access to is a thing of beauty. 
                        I love to code, I'm passionate about learning, coding, building Web Solutions and one day becoming "World Class". 
                        This is my purpose.
                    </p>
                    <div className={`justify-center"`}>
                        <button className={`btn btn-outline-light`}>
                            Work With Me
                        </button>
                        <button className={`btn btn-outline-danger mx-5`}>
                            See My Past Work
                        </button>
                    </div>
                </div>
                <div className={`col-lg-6 ${style.main__picture}`}>
                    <img src={image} alt="sam's portrait" width="100%"/>
                </div>
            </div>
        </div>
    )
}

export default Home
