import React, { useEffect, useState } from "react";
import SchoolService from "../../services/schoolService";
import SchoolForm from './forms/SchoolForm'

export default function SchoolList() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    let schoolService = new SchoolService();
    schoolService.getSchools().then((result) => setSchools(result.data.data));
  }, []);

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">

      <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#schoolModal" style={{float:"left"}}>New School</button>
      <SchoolForm/>
      
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
            <tr key={school.id}>
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
  );
}
