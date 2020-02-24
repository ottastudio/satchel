import { Formik, Form } from "formik";
import FormBlock from "./FormBlock";

const FormLogin: React.SFC<{}> = () => {
  return (
    <Formik
      initialErrors={{ email: "required", password: "required" }}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
        if (values.email === "")
          return actions.setErrors({ email: "required" });
        if (values.password === "")
          return actions.setErrors({ password: "required" });
        if (values.password.length < 6)
          return actions.setErrors({ password: "min. 6 characters" });
        alert(JSON.stringify(values, null, 2));
        setTimeout(() => {
          actions.setSubmitting(false);
          actions.resetForm();
        }, 2000);
      }}
    >
      {({ handleChange, values, errors, touched }) => (
        <Form className="form-container">
          <FormBlock
            id="login-email"
            label={errors.email && touched.email && errors.email}
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            autoFocus
          />
          <FormBlock
            id="login-password"
            label={errors.password && touched.password && errors.password}
            name="password"
            type="password"
            placeholder="••••••"
            value={values.password}
            onChange={handleChange}
          />
          <button type="submit">Log.</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
