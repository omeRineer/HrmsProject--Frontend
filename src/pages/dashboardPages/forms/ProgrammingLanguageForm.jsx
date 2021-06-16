import React from "react";
import {useFormik} from 'formik'
import ProgrammingLanguageService from '../../../services/programmingLanguageService'
import * as Yup from 'yup'

export default function ProgrammingLanguageForm() {

  const validationSchema=Yup.object({
    programmingLanguageName:Yup.string().required("Zorunlu Alan")
  })

  const {handleSubmit,handleChange,values,errors}=useFormik({
    initialValues:{
      programmingLanguageName:""
    },
    onSubmit:values=>{
      let programmingLanguageService=new ProgrammingLanguageService()
      programmingLanguageService.add(values).then()
    },
    validationSchema
  })
  
  return (
    <div
      class="modal fade"
      id="programmingLanguageModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          {/* MODAL HEADER */}
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New Programming Language
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
                  Programming Language Name
                </label>
                <input
                  type="text"
                  name="programmingLanguageName"
                  class={errors.programmingLanguageName ? "form-control is-invalid" : "form-control"}
                  id="exampleFormControlInput1"
                  placeholder="Programming Language"
                  onChange={handleChange}
                  values={values.programmingLanguageName}
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
