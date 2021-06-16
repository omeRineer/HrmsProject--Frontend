import axios from 'axios'

export default class JobSeekerLanguageService{
    getJobSeekerLanguages(){
        return axios.get("http://localhost:8080/api/jobseekerlanguage/getall")
    }

    getByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobseekerlanguage/getbyjobseekerid/"+jobSeekerId)
    }
}