import React,{useEffect,useState} from 'react';
import SchoolService from '../../services/schoolService'

export default function SchoolList() {

    const [schools, setSchools] = useState([])

    useEffect(()=>{
        let schoolService=new SchoolService()
        schoolService.getSchools().then(result=>setSchools(result.data.data))
    })

    return (
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table class="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">School Name</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school) => (
            <tr>
              <th scope="row">{school.id}</th>
              <td>{school.schoolName}</td>
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
