import React, { useState, useEffect } from "react";
import SocialMediaService from '../../services/socialMediaService'

export default function SocialMediaList() {

    const [socialMedias, setSocialMedias] = useState([])

    useEffect(()=>{
        let socialMediaService=new SocialMediaService()
        socialMediaService.getSocialMedias().then(result=>setSocialMedias(result.data.data))
    })

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Social Media</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {socialMedias.map((socialMedia) => (
            <tr>
              <th scope="row">{socialMedia.id}</th>
              <td>{socialMedia.socialMediaName}</td>
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
