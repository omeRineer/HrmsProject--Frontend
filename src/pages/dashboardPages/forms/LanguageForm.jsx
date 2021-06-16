import React from "react";
import {useFormik} from 'formik'
import LanguageService from '../../../services/languageService'
import * as Yup from 'yup'
import { values } from "lodash";

export default function LanguageForm() {
  const validationSchema=Yup.object({
    languageName:Yup.string().required("Zorunlu Alan")
  })

  const {handleSubmit,handleChange,values,errors}=useFormik({
    initialValues:{
      languageName:""
    },
    validationSchema,
    onSubmit:values=>{
      let languageService=new LanguageService()
      languageService.add(values).then()
    }
  })

  return (
    <div
      class="modal fade"
      id="languageModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          {/* MODAL HEADER */}
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New Language
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
                  Language Name
                </label>
                <input
                  type="text"
                  name="languageName"
                  class={errors.languageName ? "form-control is-invalid" : "form-control"}
                  id="exampleFormControlInput1"
                  placeholder="Language"
                  onChange={handleChange}
                  values={values.languageName}
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
