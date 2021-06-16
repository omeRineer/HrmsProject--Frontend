import { useFormik} from "formik";
import React from "react";
import CityService from "../../../services/cityService";
import * as Yup from 'yup'

export default function CityAdd() {
  const validationSchema=Yup.object({
    cityName:Yup.string().required("Zorunlu Alan")
  })

  const { handleSubmit, handleChange, values ,errors} = useFormik({
    initialValues: {
      cityName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let cityService = new CityService();
      cityService
        .add(values)
        .then(alert("İŞLEM BAŞARILI"))
        .catch(alert("İŞLEM BAŞARISIZ"));
    },
  });


  return (
    <div
      class="modal fade"
      id="cityModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          {/* MODAL HEADER */}
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New City
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
                  City Name
                </label>
                <input
                  type="text"
                  name="cityName"
                  class={errors.cityName ? "form-control is-invalid" :"form-control"}
                  id="exampleFormControlInput1"
                  placeholder="City"
                  onChange={handleChange}
                  values={values.cityName}
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
