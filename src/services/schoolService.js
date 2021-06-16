import axios from 'axios'

export default class SchoolService{
    getSchools(){
        return axios.get("http://localhost:8080/api/school/getall")
    }

    add(school){
        return axios.post("http://localhost:8080/api/school/add",school)
    }
}