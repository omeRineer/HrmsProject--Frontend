import React, { useEffect,useState } from "react"
import JobPositionService from "../../services/jobPositionService";
import JobPositionForm from './forms/JobPositionForm'

export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([])

  useEffect(()=>{
      let jobPositionService=new JobPositionService()
      jobPositionService.getJobPositions().then(result=>(
        setJobPositions(result.data.data)
      ))
  },[])
  
  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">

      <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#jobPositionModal" style={{float:"left"}}>New Position</button>
      <JobPositionForm/>

      <table class="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Position Name</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {jobPositions.map((jobPositions) => (
            <tr key={jobPositions.id}>
              <th scope="row">{jobPositions.id}</th>
              <td>{jobPositions.positionName}</td>
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
