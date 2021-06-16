import React from "react";
import { useEffect,useState } from "react";
import JobSeekerProgrammingLanguageService from '../../services/jobSeekerProgrammingLanguage'

export default function JobSeekerProgrammingLanguageList({jobSeekerId}) {

    const [jobSeekerProgrammingLanguages, setJobSeekerProgrammingLanguages] = useState([])
    useEffect(()=>{
        let jobSeekerProgrammingLanguageService=new JobSeekerProgrammingLanguageService()
        jobSeekerProgrammingLanguageService.getByJobSeekerId(jobSeekerId).then(result=>setJobSeekerProgrammingLanguages(result.data.data))
    },[jobSeekerId])
  return (
    <div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Programming Technologies
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            style={{height:"200px",overflowY:"scroll"}}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <table class="table table-striped table-bordered mb-0">
                <thead>
                  <tr>
                    <th scope="col">Programming Technologies</th>
                  </tr>
                </thead>
                <tbody>
                  {jobSeekerProgrammingLanguages.map((jobSeekerProgrammingLanguage) => (
                    <tr key={jobSeekerProgrammingLanguage.id}>
                      <td scope="row">
                        {jobSeekerProgrammingLanguage.programmingLanguage.programmingLanguageName}
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
