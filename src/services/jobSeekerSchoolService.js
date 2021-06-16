import axios from 'axios'

export default class JobSeekerSchoolService{
    getJobSeekerSchools(){
        return axios.get("http://localhost:8080/api/jobseekerschool/getall")
    }

    getByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobseekerschool/getbyjobseekerid/"+jobSeekerId)
    }
}