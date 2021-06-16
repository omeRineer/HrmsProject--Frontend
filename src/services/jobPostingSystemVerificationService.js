import axios from 'axios'

export default class JobPostingSystemVerificationService{
    getJobPostingSystemVerifications(){
        return axios.get("http://localhost:8080/api/jobpostingsystemverification/getall")
    }
}