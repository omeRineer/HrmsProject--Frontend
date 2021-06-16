import axios from 'axios'

export default class WorkingTimeService{
    getWorkingTimes(){
        return axios.get("http://localhost:8080/api/workingtime/getall")
    }

    add(workingTime){
        return axios.post("http://localhost:8080/api/workingtime/add",workingTime)
    }
}