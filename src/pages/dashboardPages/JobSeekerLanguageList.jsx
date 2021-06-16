import React, { useEffect, useState } from "react";
import JobSeekerLanguageService from "../../services/jobSeekerLanguage";

export default function JobSeekerLanguageList({ jobSeekerId }) {
  const [jobSeekerLanguages, setJobSeekerLanguages] = useState([]);

  useEffect(() => {
    let jobSeekerLanguageService = new JobSeekerLanguageService();
    jobSeekerLanguageService
      .getByJobSeekerId(jobSeekerId)
      .then((result) => setJobSeekerLanguages(result.data.data));
  }, [jobSeekerId]);

  return (
    <div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Foreign Languages
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            style={{height:"200px",overflowY:"scroll"}}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div>
              <table class="table table-striped table-bordered mb-0">
                <thead>
                  <tr>
                    <th scope="col">Foreign Language</th>
                  </tr>
                </thead>
                <tbody>
                  {jobSeekerLanguages.map((jobSeekerLanguage) => (
                    <tr key={jobSeekerLanguage.id}>
                      <td scope="row">
                        {jobSeekerLanguage.language.languageName}
                      </td>
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
