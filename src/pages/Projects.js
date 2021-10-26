import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { projects } from '../data';
import styles from '../styles/projects.module.css'
import { Link } from 'react-router-dom';



export default function Projects() {
    return (
        <section id="projects" className={`${styles.project__banner} text-white `}>
            <div className="container px-5 py-10 mx-auto text-center px-lg-5">
                <div className="d-flex flex-column w-100">
                    {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-warning">
                       I've built many projects that I can not list all of them here howevery, if you are interested then please visit my <a className="text-white" href="https://github.com/sammiearchie77">github page</a>
                    </p>
                </div>
                <div className="row m-4">
                   <div className={`col-lg-12 ${styles.project__div}`}>
                      {projects.map((project) => (
                            <Link 
                            href={project.link}
                            key={project.id}
                            >
                                <Card className={`mb-4`}>
                                    <img className={`${styles.project__img}`} src={project.image} alt="project img" width={100} />
                                    <CardHeader>
                                        <h2 className={`text-danger`}>{project.subtitle}</h2>
                                    </CardHeader>
                                    <CardContent>
                                        <h1>{project.title}</h1>
                                        <p>{project.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                   </div>
                </div>
            </div>
        </section>
    );
}