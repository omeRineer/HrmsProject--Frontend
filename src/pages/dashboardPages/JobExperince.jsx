import React from "react";
import { useEffect,useState } from "react";
import JobExperinceService from "../../services/jobExperinceService";

export default function JobExperince({jobSeekerId}) {
  const [jobExperinces, setJobExperinces] = useState([]);

  useEffect(() => {
    let jobExperinceService = new JobExperinceService();
    jobExperinceService
      .getByJobSeekerId(jobSeekerId)
      .then((result) => setJobExperinces(result.data.data));
  },[jobSeekerId]);

  return (
    <div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Job Experinces
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            style={{height:"300px",overflowY:"scroll"}}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <table class="table table-striped table-bordered mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Workplace</th>
                    <th scope="col">Position</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {jobExperinces.map((jobExperince) => (
                    <tr key={jobExperince.id}>
                      <th scope="row">{jobExperince.id}</th>
                      <td>{jobExperince.workPlace}</td>
                      <td>{jobExperince.positionName}</td>
                      <td>{jobExperince.startDate}</td>
                      <td>{jobExperince.endDate?jobExperince.endDate:"---"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}
