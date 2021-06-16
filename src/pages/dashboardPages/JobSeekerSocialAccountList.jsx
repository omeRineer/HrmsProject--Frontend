import React, { useEffect,useState} from "react";
import JobSeekerSocialAccountService from '../../services/jobSeekerSocialAccountService'

export default function JobSeekerSocialAccountList({jobSeekerId}) {
    const [jobSeekerSocialAccounts, setjobSeekerSocialAccounts] = useState([])
    useEffect(()=>{
        let jobSeekerSocialAccountService=new JobSeekerSocialAccountService()
        jobSeekerSocialAccountService.getByJobSeekerId(jobSeekerId).then(result=>setjobSeekerSocialAccounts(result.data.data))
    },[jobSeekerId])
  return (
    <div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Social Accounts
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            style={{height:"200px",overflowY:"scroll"}}
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <table class="table table-striped table-bordered mb-0">
                <thead>
                  <tr>
                    <th scope="col">Social Media Name</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  {jobSeekerSocialAccounts.map((jobSeekerSocialAccount) => (
                    <tr key={jobSeekerSocialAccount.id}>
                      <td scope="row">{jobSeekerSocialAccount.socialMedia.socialMediaName}</td>
                      <td>{jobSeekerSocialAccount.accountUrl}</td>
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
