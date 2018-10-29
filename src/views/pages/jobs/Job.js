import React from 'react';

const Job = ({ title, applicationDeadline, description, requirements }) => {
  return (
    <li className="job">
      <div className="row">
        <div className="job__head col-lg-4">
          <h4 className="job__title">{title}</h4>
          <h5>Application Deadline: {applicationDeadline}</h5>
        </div>
        <div className="job__body col-lg-8">
          <p>{description}</p>
          <ul className="job__requirements">
            {requirements.map((requirement, key) => <li key={key}>{requirement}</li>)}
          </ul>
          <p>To apply, email your resume and cover letter to <strong><a className="link link_underline" href="mailto:jobs@userlandtech.com">jobs@userlandtech.com</a></strong></p>
        </div>
      </div>
    </li>
  );
};

export default Job;