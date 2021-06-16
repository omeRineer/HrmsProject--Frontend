import axios from 'axios'

export default class ProgrammingLanguageService{
    getProgrammingLanguages(){
        return axios.get("http://localhost:8080/api/programminglanguage/getall")
    }

    add(programmingLanguage){
        return axios.post("http://localhost:8080/api/programminglanguage/add",programmingLanguage)
    }
}