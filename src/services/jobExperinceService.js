import axios from 'axios'

export default class JobExperinceService{
    getJobExperinces(){
        return axios.get("http://localhost:8080/api/jobexperince/getall")
    }

    getByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobexperince/getbyjobseekerid/"+jobSeekerId)
    }
}