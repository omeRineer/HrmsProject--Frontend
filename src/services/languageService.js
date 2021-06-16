import axios from 'axios'

export default class LanguageService{
    getLanguages(){
        return axios.get("http://localhost:8080/api/language/getall")
    }

    add(language){
        return axios.post("http://localhost:8080/api/language/add",language)
    }
}