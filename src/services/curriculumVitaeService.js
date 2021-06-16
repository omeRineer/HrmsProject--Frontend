import axios from 'axios'

export default class CurriculumVitaeService{
    getCurriculumVitaes(){
        return axios.get("http://localhost:8080/api/curriculumvitae/getall")
    }

    getByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/curriculumvitae/getbyjobseekerid/"+jobSeekerId)
    }

    add(curriculumVitae){
        return axios.post("http://localhost:8080/api/curriculumvitae/add"+curriculumVitae)
    }
}