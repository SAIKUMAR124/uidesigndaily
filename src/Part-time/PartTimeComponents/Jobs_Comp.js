import "./Jobs_Comp.css";

const Jobs_Comp = ({data}) => {
  return (
    <div className="jobs">
      {data.map((job) => {
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

export default Jobs_Comp;
