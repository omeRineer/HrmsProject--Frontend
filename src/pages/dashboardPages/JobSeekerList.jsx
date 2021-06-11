import React from 'react'
import { useEffect,useState } from 'react'
import JobSeekerService from '../../services/jobSeekerService'

export default function JobSeekerList() {

    const [jobSeekers, setJobSeekers] = useState([])

    useEffect(()=>{
        let jobSeekerService=new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result=>setJobSeekers(result.data.data))
    })

    return (
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Nationality Id</th>
            <th scope="col">Birthday Date</th>
            <th scope="col">Email</th>
            <th scope="col">Pasword</th>
            <th scope="col">Curriculum Vitae</th>
          </tr>
        </thead>
        <tbody>
          {jobSeekers.map((jobSeeker) => (
            <tr>
              <th scope="row">{jobSeeker.id}</th>
              <td>{jobSeeker.firstName}</td>
              <td>{jobSeeker.lastName}</td>
              <td>{jobSeeker.nationalityId}</td>
              <td>{jobSeeker.birthdayDate}</td>
              <td>{jobSeeker.email}</td>
              <td>{jobSeeker.password}</td>
              <td><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">View CV</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}
