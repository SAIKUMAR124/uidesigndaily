import "./JobsComp.css";

const JobsComp = ({ search, data }) => {
  return (
    <div className="jobs">
      {data
        .filter((d) => d.job_name.toLowerCase().includes(search.toLowerCase()))
        .map((job) => {
          return (
            <div key={job.id} className="jobs-container">
              <div>{job.job_image}</div>
              <div>{job.job_name}</div>
            </div>
          );
        })}
    </div>
  );
};

export default JobsComp;
