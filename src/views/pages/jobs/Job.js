import React from 'react';

const Job = ({ title, deadline, description, requirements }) => {
  return (
    <li className="job">
      <div className="job__head">
        <h4 className="job__title">{title}</h4>
        <p>{deadline}</p>
      </div>
      <div className="job__body">
        <p>{description}</p>
        <ul className="job__requirements">
          {requirements.map(requirement => <li>{requirement}</li>)}
        </ul>
        <p>To apply, email your resume and cover letter to <strong><a className="link link_underline" href="mailto:jobs@userlandtech.com">jobs@userlandtech.com</a></strong></p>
      </div>
    </li>
  );
};

export default Job;