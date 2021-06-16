import React from "react";
import {useFormik} from 'formik'
import SchoolService from '../../../services/schoolService'
import * as Yup from 'yup'

export default function SchoolForm() {

  const validationSchema=Yup.object({
    schoolName:Yup.string().required("Zorunlu Alan")
  })

  const {handleSubmit,handleChange,values,errors}=useFormik({
    initialValues:{
      schoolName:""
    },
    validationSchema,
    onSubmit:values=>{
      let schoolService=new SchoolService()
      schoolService.add(values).then()
    }
  })
  return (
    <div
      class="modal fade"
      id="schoolModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          {/* MODAL HEADER */}
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New School
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
                  School Name
                </label>
                <input
                  type="text"
                  name="schoolName"
                  class={errors.schoolName ? "form-control is-invalid" : "form-control"}
                  id="exampleFormControlInput1"
                  placeholder="School"
                  onChange={handleChange}
                  values={values.schoolName}
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
