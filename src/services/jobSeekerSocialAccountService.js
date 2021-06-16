import axios from 'axios'

export default class JobSeekerSocialAccountService{
    getJobSeekerSocialAccounts(){
        return axios.get("http://localhost:8080/api/jobseekersocialaccount/getall")
    }

    getByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobseekersocialaccount/getbyjobseekerid/"+jobSeekerId)
    }
}