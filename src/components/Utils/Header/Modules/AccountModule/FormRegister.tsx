import { Formik, Form } from "formik";
import FormBlock from "./FormBlock";

const FormRegister: React.SFC<{}> = () => {
  return (
    <Formik
      initialErrors={{
        name: "required",
        email: "required",
        password: "required"
      }}
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, actions) => {
        if (values.name === "") return actions.setErrors({ name: "required" });
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
            id="register-name"
            label={errors.name && touched.name && errors.name}
            name="name"
            type="text"
            placeholder="Full Name"
            value={values.name}
            onChange={handleChange}
          />
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
          <button type="submit">Reg.</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegister;
