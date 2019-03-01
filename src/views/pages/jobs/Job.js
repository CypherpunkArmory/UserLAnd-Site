import React from 'react';

const Job = ({ title, salaryRange, description, dayToDayTasks, requirementsDescription, requirements, extraAwesomePointsDescription, extraAwesomePoints, benefits }) => {
  return (
    <li className="job">
      <div className="row">
        <div className="job__head col-lg-4">
          <h4 className="job__title">{title}</h4>
          <h5>Salary Range: {salaryRange}</h5>
        </div>
        <div className="job__body col-lg-8">

          <p className="display-linebreak">{description}</p>
          <ul className="job__requirements">
            {dayToDayTasks.map((requirement, key) => <li key={key}>{requirement}</li>)}
          </ul>
          <br />

          <p className="display-linebreak">{requirementsDescription}</p>
          <ul className="job__requirements">
            {requirements.map((requirement, key) => <li key={key}>{requirement}</li>)}
          </ul>
          <br />
          <p className="display-linebreak">{extraAwesomePointsDescription}</p>
          <ul className="job__requirements">
            {extraAwesomePoints.map((requirement, key) => <li key={key}>{requirement}</li>)}
          </ul>
          <br />

          <p>To apply, email your resume and cover letter to <strong><a className="link link_underline" href="mailto:jobs@userland.tech">jobs@userland.tech</a></strong></p>
        </div>
      </div>
    </li>
  );
};

export default Job;
