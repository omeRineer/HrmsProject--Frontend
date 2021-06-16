import { useFormik } from "formik";
import React from "react";
import JobPositionService from '../../../services/jobPositionService'
import * as Yup from 'yup'

export default function JobPositionForm() {
  const validationSchema=Yup.object({
    positionName:Yup.string().required("Zorunlu Alan")
  })
  const {handleSubmit,handleChange,values,errors}= useFormik({
    initialValues:{
      positionName:""
    },
    validationSchema,
    onSubmit:values=>{
      let jobPositionService=new JobPositionService()
      jobPositionService.add(values).then()
    }
  })
  return (
    <div
      class="modal fade"
      id="jobPositionModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          {/* MODAL HEADER */}
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New Job Position
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
                  Job Position Name
                </label>
                <input
                  type="text"
                  name="positionName"
                  class={errors.positionName ? "form-control is-invalid" : "form-control"}
                  id="exampleFormControlInput1"
                  placeholder="Job Position"
                  onChange={handleChange}
                  values={values.positionName}
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
