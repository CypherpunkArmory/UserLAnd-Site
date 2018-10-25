import React, { Component } from 'react';
import Job from './Job';
import jobstext from './jobstext';

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
                            {jobstext.jobs.map(job => <Job {...job} />)}
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Jobs;