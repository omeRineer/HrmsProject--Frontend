import React,{useState,useEffect} from "react";
import  EmployerService  from "../../services/employerService";

export default function EmployerList() {

  const [employers, setEmployers] = useState([])

  useEffect(() => {
    let employerService=new EmployerService()
    employerService.getEmployers().then(result=>setEmployers(result.data.data))
  },[])

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company Name</th>
            <th scope="col">Web Site</th>
            <th scope="col">Email</th>
            <th scope="col">Pasword</th>
          </tr>
        </thead>
        <tbody>
          {employers.map((employer) => (
            <tr key={employer.id}>
              <th scope="row">{employer.id}</th>
              <td>{employer.companyName}</td>
              <td>{employer.webSite}</td>
              <td>{employer.email}</td>
              <td>{employer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
