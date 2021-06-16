import React, { useEffect,useState } from "react";
import WorkingTimeService from "../../services/workingTimeService";
import WorkingTimeForm from './forms/WorkingTimeForm'

export default function WorkingTimeList() {
  const [workingTimes, setWorkingTimes] = useState([]);

  useEffect(() => {
    let workingTimeService = new WorkingTimeService();
    workingTimeService
      .getWorkingTimes()
      .then((result) => setWorkingTimes(result.data.data));
  }, []);

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      
      <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#workingTimeModal" style={{float:"left"}}>New Working Time</button>
      <WorkingTimeForm/>
      
      <table className="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Working Time Name</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {workingTimes.map((workingTime) => (
            <tr key={workingTime.id}>
              <th scope="row">{workingTime.id}</th>
              <td>{workingTime.workingTime}</td>
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
