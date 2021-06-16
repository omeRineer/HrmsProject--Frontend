import React, { useEffect, useState } from "react";
import LanguageService from "../../services/languageService";
import LanguageForm from './forms/LanguageForm'

export default function LanguageList() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    let languageService = new LanguageService();
    languageService
      .getLanguages()
      .then((result) => setLanguages(result.data.data));
  },[]);

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">

      <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#languageModal" style={{float:"left"}}>New Language</button>
      <LanguageForm/>
      
      <table className="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Language</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {languages.map((language) => (
            <tr key={language.id}>
              <th scope="row">{language.id}</th>
              <td>{language.languageName}</td>
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
