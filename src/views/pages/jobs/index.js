import React, { Component } from 'react';

class Jobs extends Component {
    render() {
        return (
            <div>
                <div className="hero">
                    <h1 className="hero__title ml-5">The Possibilities Are Endless</h1>
                </div>
                <section className="container jobs p-md-5 mt-5">
                    <h2 className="about-title"> Jobs at UserLAnd</h2>
                    <div className="jobs__section">
                        <ul className="jobs-ul">
                            <li className="job">
                                <div className="job__head">
                                    <h4 className="job__title">Back-End Developer</h4>
                                    <p>Application Deadline: 6/30/2018</p>

                                </div>
                                <div className="job__body">
                                    <p>A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers.</p>
                                    <ul className="job__requirements">
                                        <li>You are smart and keep your head up in the face of a challenge.</li>
                                        <li>You are a quick study and enjoy learning new things.</li>
                                        <li>You have a demonstrated aptitude for software development.</li>
                                        <li>You are not afraid to dive into complex codebases teeming with both the new and shiny as well as the ancient and mysterious.</li>
                                        <li>You diagnose and squash technical debt with glee.</li>
                                        <li>You like helping others, regardless of their technical prowess.</li>
                                    </ul>
                                    <p>To apply, email your resume and cover letter to <strong><a className="link link_underline" href="mailto:jobs@userlandtech.com">jobs@userlandtech.com</a></strong></p>
                                </div>
                            </li>
                            <li className="job">
                                <div className="job__head">
                                    <h4 className="job__title">Back-End Developer</h4>
                                    <p>Application Deadline: 6/30/2018</p>

                                </div>
                                <div className="job__body">
                                    <p>A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers.</p>
                                    <ul className="job__requirements">
                                        <li>You are smart and keep your head up in the face of a challenge.</li>
                                        <li>You are a quick study and enjoy learning new things.</li>
                                        <li>You have a demonstrated aptitude for software development.</li>
                                        <li>You are not afraid to dive into complex codebases teeming with both the new and shiny as well as the ancient and mysterious.</li>
                                        <li>You diagnose and squash technical debt with glee.</li>
                                        <li>You like helping others, regardless of their technical prowess.</li>
                                    </ul>
                                    <p>To apply, email your resume and cover letter to <strong><a className="link link_underline" href="mailto:jobs@userlandtech.com">jobs@userlandtech.com</a></strong></p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Jobs;