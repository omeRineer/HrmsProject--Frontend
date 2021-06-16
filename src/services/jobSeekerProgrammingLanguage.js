import axios from 'axios'

export default class JobSeekerProgrammingLanguageService{
    getJobSeekerProgrammingLanguages(){
        return axios.get("http://localhost:8080/api/jobseekerprogramminglanguage/getall")
    }

    getByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobseekerprogramminglanguage/getbyjobseekerid/"+jobSeekerId)
    }
}