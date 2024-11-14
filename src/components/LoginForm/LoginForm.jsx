import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from '../../redux/auth/operations';

import * as Yup from "yup";
import styles from './LoginForm.module.css';

const loginUserSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Required!"),
  password: Yup.string()
    .min(8, "min 8 characters")
    .required("Required!"),
});

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
           <h2>Login Form</h2>
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

          <button className={styles.button} type="submit">Sign In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;