import React,{useEffect,useState} from 'react'
import ProgrammingLanguageService from '../../services/programmingLanguageService'

export default function ProgrammingLanguageList() {

    const [porgrammingLanguages, setporgrammingLanguages] = useState([])

    useEffect(()=>{
        let programmingLanguageService=new ProgrammingLanguageService()
        programmingLanguageService.getProgrammingLanguages().then(result=>setporgrammingLanguages(result.data.data))
    })

    return (
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Programming Language</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {porgrammingLanguages.map((programmingLanguage) => (
            <tr>
              <th scope="row">{programmingLanguage.id}</th>
              <td>{programmingLanguage.programmingLanguageName}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
}
