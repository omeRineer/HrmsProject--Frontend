import React from "react";
import {useFormik} from 'formik'
import WorkingTypeService from '../../../services/workingTypeService'
import * as Yup from 'yup'

export default function WorkingTypeForm() {

  const validationSchema=Yup.object({
    workTypeName:Yup.string().required("Zorunlu Alan")
  })

  const {handleSubmit,handleChange,values,errors}=useFormik({
    initialValues:{
      workTypeName:""
    },
    validationSchema,
    onSubmit:values=>{
      let workingTypeService=new WorkingTypeService()
      workingTypeService.add(values).then()
    }
  })
  return (
    <div
      class="modal fade"
      id="workingTypeModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          {/* MODAL HEADER */}
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New Working Type
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* MODAL BODY */}
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{float:"left"}}>
                  Working Type Name
                </label>
                <input
                  type="text"
                  name="workTypeName"
                  class={errors.workTypeName ? "form-control is-invalid" : "form-control"}
                  id="exampleFormControlInput1"
                  placeholder="Working Type"
                  onChange={handleChange}
                  values={values.workTypeName}
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
