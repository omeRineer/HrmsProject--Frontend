import React from "react";
import { useEffect,useState } from "react";
import EmployeeService from '../../services/employeeService'

export default function EmployeeList() {

    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        let employeeService=new EmployeeService()
        employeeService.getEmployees().then(result=>setEmployees(result.data.data))
    })

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Pasword</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
              <th scope="row">{employee.id}</th>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
