import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from '../../redux/auth/operations';

import * as Yup from "yup";
import styles from './RegistrationForm.module.css'

const registerUserSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be less than 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
});

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .catch((error) => {
        if (error === "Request failed with status code 400") {
          alert("User with this email already exists");
        }
      });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={registerUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name:</span>
            <Field
              type="text"
              name="name"
              className={styles.input}
              placeholder="Ivan Ivanov"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={styles.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              className={styles.input}
              placeholder="example.email@example.com"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={styles.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              className={styles.input}
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="password"
              component="span"
            />
          </label>

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;