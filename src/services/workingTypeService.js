import axios from 'axios'

export default class WorkingTypeService{
    getWorkingTypes(){
        return axios.get("http://localhost:8080/api/workingtype/getall")
    }

    add(workingType){
        return axios.post("http://localhost:8080/api/workingtype/add",workingType)
    }
}