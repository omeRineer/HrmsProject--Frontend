import React, { useEffect,useState } from "react";
import JobSeekerSchoolService from "../../services/jobSeekerSchoolService";

export default function JobSeekerSchoolList({ jobSeekerId }) {
  const [jobSeekerSchools, setJobSeekerSchools] = useState([]);
  useEffect(() => {
    let jobSeekerSchoolService = new JobSeekerSchoolService();
    jobSeekerSchoolService
      .getByJobSeekerId(jobSeekerId)
      .then((result) => setJobSeekerSchools(result.data.data));
  }, [jobSeekerId]);
  return (
    <div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Education
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            style={{height:"300px",overflowY:"scroll"}}
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <table class="table table-striped table-bordered mb-0">
                <thead>
                  <tr>
                    <th scope="col">School</th>
                    <th>Department</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {jobSeekerSchools.map((jobSeekerSchool) => (
                    <tr key={jobSeekerSchool.id}>
                      <td scope="row">{jobSeekerSchool.school.schoolName}</td>
                      <td>{jobSeekerSchool.department}</td>
                      <td>{jobSeekerSchool.startDate}</td>
                      <td>{jobSeekerSchool.endDate?jobSeekerSchool.endDate:"---"}</td>
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
