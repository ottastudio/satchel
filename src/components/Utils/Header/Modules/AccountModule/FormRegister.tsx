import { Formik, Form } from "formik";
import FormBlock from "./FormBlock";
import useRequest from "../../../../../lib/hooks/useRequest";
import Axios, { AxiosResponse } from "axios";
import { Fragment } from "react";

const FormRegister: React.SFC<{}> = () => {
  const { data } = useRequest<[{ _id: string; name: string }]>({
    url: "/api/v1/users/gender",
    method: "GET"
  });
  const { revalidate: revalidateUser } = useRequest({ url: "/api/v1/users" });
  return (
    <Fragment>
      <Formik
        initialValues={{
          name: { first_name: "", last_name: "" },
          gender: "",
          birthday: "",
          subscribe: false,
          email: "",
          password: ""
        }}
        initialErrors={{
          name: { first_name: "required", last_name: "required" },
          email: "required",
          password: "required",
          gender: "required",
          birthday: "required"
        }}
        onSubmit={async (values, actions) => {
          if (
            values.name.first_name === "" ||
            values.name.last_name === "" ||
            values.gender === "" ||
            values.email === "" ||
            values.password === ""
          ) {
            actions.setErrors({
              email: "required",
              name: { first_name: "required", last_name: "required" },
              password: "required",
              gender: "required",
              birthday: "required"
            });
          } else {
            await Axios.post("/api/v1/users/register", values).then(
              (res: AxiosResponse) => {
                if (res.status !== 200) {
                  return alert("Error");
                } else {
                  revalidateUser();
                  actions.setSubmitting(false);
                  actions.resetForm();
                }
              }
            );
          }
        }}
      >
        {({ handleChange, values, errors, touched, isSubmitting }) => (
          <Form className="form-container">
            <div style={{ display: "flex" }}>
              <FormBlock
                id="register-first_name"
                name="name.first_name"
                type="text"
                placeholder="First Name"
                value={values.name.first_name}
                onChange={handleChange}
                autoCapitalize="words"
                label={
                  errors.name?.first_name &&
                  touched.name?.first_name &&
                  errors.name?.first_name
                }
              />
              <FormBlock
                id="register-last_name"
                name="name.last_name"
                type="text"
                placeholder="Last Name"
                value={values.name.last_name}
                onChange={handleChange}
                autoCapitalize="words"
                label={
                  errors.name?.last_name &&
                  touched.name?.last_name &&
                  errors.name?.last_name
                }
              />
            </div>
            <div style={{ display: "flex" }}>
              <select
                id="register-gender"
                name="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <option>Gender</option>
                {data?.map(({ _id, name }) => (
                  <option value={_id} key={_id}>
                    {name}
                  </option>
                ))}
              </select>
              <FormBlock
                id="register-birthday"
                label={errors.birthday && touched.birthday && errors.birthday}
                name="birthday"
                type="date"
                placeholder="..."
                value={values.birthday}
                onChange={handleChange}
              />
            </div>
            <FormBlock
              id="register-email"
              label={errors.email && touched.email && errors.email}
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            <FormBlock
              id="register-password"
              label={errors.password && touched.password && errors.password}
              name="password"
              type="password"
              placeholder="••••••"
              value={values.password}
              onChange={handleChange}
            />
            <div>
              <input
                id="register-subscribe"
                name="subscribe"
                type="checkbox"
                checked={values.subscribe}
                onChange={handleChange}
              />
              <label htmlFor="register-subscribe">Newsletter?</label>
            </div>
            <button disabled={isSubmitting} type="submit">
              Reg.
            </button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default FormRegister;
