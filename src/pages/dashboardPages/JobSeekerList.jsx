import React from "react";
import { useEffect, useState } from "react";
import JobSeekerService from "../../services/jobSeekerService";
import JobExperince from "../dashboardPages/JobExperince";
import JobSeekerLanguageList from "../dashboardPages/JobSeekerLanguageList";
import JobSeekerSchoolList from "../dashboardPages/JobSeekerSchoolList";
import JobSeekerProgrammingLanguageList from "../dashboardPages/JobSeekerProgrammingLanguageList";
import JobSeekerSocialAccountList from "../dashboardPages/JobSeekerSocialAccountList";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);
  const [jobSeekerId, setJobSeekerId] = useState(0);
  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekers()
      .then((result) => setJobSeekers(result.data.data));
  }, []);

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Nationality Id</th>
            <th scope="col">Birthday Date</th>
            <th scope="col">Email</th>
            <th scope="col">Pasword</th>
            <th scope="col">Curriculum Vitae</th>
          </tr>
        </thead>
        <tbody>
          {jobSeekers.map((jobSeeker) => (
            <tr key={jobSeeker.id}>
              <th scope="row">{jobSeeker.id}</th>
              <td>{jobSeeker.firstName}</td>
              <td>{jobSeeker.lastName}</td>
              <td>{jobSeeker.nationalityId}</td>
              <td>{jobSeeker.birthdayDate}</td>
              <td>{jobSeeker.email}</td>
              <td>{jobSeeker.password}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setJobSeekerId(jobSeeker.id);
                  }}
                >
                  View CV
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Curriculum Vitae
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="accordion" id="accordionExample">
                {jobSeekerId != 0 ? (
                  <JobExperince jobSeekerId={jobSeekerId} />
                ) : undefined}
                <div className="row">
                  <div className="col-md-4 mb-3 mt-3">
                    {jobSeekerId != 0 ? (
                      <JobSeekerLanguageList jobSeekerId={jobSeekerId} />
                    ) : undefined}
                  </div>
                  <div className="col-md-4 mb-3 mt-3">
                    {jobSeekerId != 0 ? (
                      <JobSeekerProgrammingLanguageList
                        jobSeekerId={jobSeekerId}
                      />
                    ) : undefined}
                  </div>
                  <div className="col-md-4 mb-3 mt-3">
                    {jobSeekerId != 0 ? (
                      <JobSeekerSocialAccountList jobSeekerId={jobSeekerId} />
                    ) : undefined}
                  </div>
                </div>
                {jobSeekerId != 0 ? (
                  <JobSeekerSchoolList jobSeekerId={jobSeekerId} />
                ) : undefined}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
