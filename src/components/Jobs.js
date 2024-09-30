import React from "react";

function Jobs() {
  return (
    <div className="jobs">
      <h2>Suggested job searches</h2>
      <div className="job-listing">
        <h3>Web Developer at XYZ Corp.</h3>
        <button>Apply Now</button>
      </div>
      <div className="job-listing">
        <h3>UI/UX Designer at ABC Inc.</h3>
        <button>Apply Now</button>
      </div>
      <div className="job-listing">
        <h3>Fullstack Developer (Node.js/Typescript/React)</h3>
        <button>Apply Now</button>
      </div>
      <div className="job-listing">
        <h3>Growth Hacker</h3>
        <button>Apply Now</button>
      </div>
      <div className="job-listing">
        <h3>Machine Learning Engineer</h3>
        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default Jobs;
