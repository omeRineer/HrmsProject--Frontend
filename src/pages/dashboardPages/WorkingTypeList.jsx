import React from "react";
import { useEffect,useState } from "react";
import WorkingTypeService from '../../services/workingTypeService'
import WorkingTypeForm from './forms/WorkingTypeForm'

export default function WorkingTypeList() {
    const [workingTypes, setWorkingTypes] = useState([])

    useEffect(()=>{
        let workingTypeService=new WorkingTypeService()
        workingTypeService.getWorkingTypes().then(result=>setWorkingTypes(result.data.data))
    },[])
  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">

      <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#workingTypeModal" style={{float:"left"}}>New Working Type</button>
      <WorkingTypeForm/>
      
      <table className="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Working Type Name</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {workingTypes.map((workingType) => (
            <tr key={workingType.id}>
              <th scope="row">{workingType.id}</th>
              <td>{workingType.workTypeName}</td>
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
