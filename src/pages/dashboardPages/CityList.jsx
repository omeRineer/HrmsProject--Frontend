import React, { useState, useEffect } from "react";
import CityService from "../../services/cityService";
import CityForm from "./forms/CityForm";

export default function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">

      <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#cityModal" style={{float:"left"}}>New City</button>
      <CityForm/>
      
      <table class="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">City Name</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((cities) => (
            <tr key={cities.id}>
              <th scope="row">{cities.id}</th>
              <td>{cities.cityName}</td>
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
