import React from "react";
import {useFormik} from 'formik'
import SocialMediaService from '../../../services/socialMediaService'
import * as Yup from 'yup'

export default function SocialMediaForm() {

  const validationSchema=Yup.object({
    socialMediaName:Yup.string().required("Zorunlu Alan")
  })

  const {handleSubmit,handleChange,values,errors}=useFormik({
    initialValues:{
      socialMediaName:""
    },
    validationSchema,
    onSubmit:values=>{
      let socialMediaService=new SocialMediaService()
      socialMediaService.add(values).then()
    }
  })
  return (
    <div
      class="modal fade"
      id="socialMediaModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          {/* MODAL HEADER */}
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New Social Media
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* MODAL BODY */}
          <form onSubmit={handleSubmit}>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{float:"left"}}>
                  Social Media Name
                </label>
                <input
                  type="text"
                  name="socialMediaName"
                  class={errors.socialMediaName ? "form-control is-invalid" : "form-control"}
                  id="exampleFormControlInput1"
                  placeholder="Social Media"
                  onChange={handleChange}
                  values={values.socialMediaName}
                />
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-dark">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
