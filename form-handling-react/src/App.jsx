
import './App.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
