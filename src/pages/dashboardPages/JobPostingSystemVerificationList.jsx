import React, { useEffect,useState } from "react";
import JobPostingSystemVerificationService from '../../services/jobPostingSystemVerificationService'

export default function JobPostingSystemVerificationList() {
    const [jobPostingSystemVerifications, setJobPostingSystemVerifications] = useState([])

    useEffect(()=>{
        let jobPostingSystemVerificationService= new JobPostingSystemVerificationService()
        jobPostingSystemVerificationService.getJobPostingSystemVerifications().then(result=>setJobPostingSystemVerifications(result.data.data))
    },[])
  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Job Posting</th>
            <th scope="col">Active/Passive</th>
          </tr>
        </thead>
        <tbody>
          {jobPostingSystemVerifications.map((jobPostingSystemVerification) => (
            <tr key={jobPostingSystemVerification.id}>
              <th scope="row">{jobPostingSystemVerification.id}</th>
              <td>{jobPostingSystemVerification.jobPosting.jobDescription}</td>
              <td>
                {jobPostingSystemVerification.confirm==false?<button className="btn btn-success">Activate</button>:<button className="btn btn-danger">Disable</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
